<template>
  <v-container>
    <v-card v-if="currentRoom" class="mx-auto pa-2 ma-2" :variant="variant" :title="title" :subtitle="currentRoom.name"
      :disabled="disabled" :color="color" :elevation="elevation" :image="image">
      <v-infinite-scroll :key="currentRoom.ownerId" height="300" @load="load" side="start" id="scrollContainer">
        <template v-for="message in partOfMessagesByRoom" :key="message._id">
          <v-card-text class="pa-0 ma-0" :ref="message._id">
            <div v-if="message._id !== 'empty'" :class="message.isOwner ? 'message-owner ma-1' : 'message-other ma-1'
      ">
              <span v-html="message.contentLine"></span>
            </div>
            <div class="empty" v-else>
              <span v-html="message.contentLine"></span>
            </div>
          </v-card-text>
        </template>
        <template v-slot:load-more="{ props }">
          <v-btn icon="mdi-refresh" variant="text" size="small" v-bind="props"></v-btn>
        </template>
        <template v-slot:loading>
          La carga de mensajes está demonrando un poco...
        </template>
        <template v-slot:empty>
          <v-alert color="#546E7A" icon="mdi-message-bulleted-off" density="compact" variant="outlined">
            No hay mas mensajes!
          </v-alert>
        </template>
        <template v-slot:error="{ props }">
          <v-alert type="error">
            <div class="d-flex justify-space-between align-center">
              Ha ocurrido un error, inténtalo mas tarde.
              <v-btn color="white" variant="outlined" size="small" v-bind="props">
                Reconectar
              </v-btn>
            </div>
          </v-alert>
        </template>
      </v-infinite-scroll>

      <v-divider></v-divider>

      <v-card-actions>
        <v-text-field v-model="newMessage" density="compact" variant="outlined" :label="label"
          append-inner-icon="mdi-send-circle" single-line hide-details @click:append-inner="sendMessage"
          @keyup.enter="sendMessage"></v-text-field>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, watchEffect, computed, onMounted } from "vue";

const { $io, $getStatusConnection, $socketStore } = useNuxtApp();

const runtimeConfig = useRuntimeConfig();
const API_BASE_URL = runtimeConfig.public.API_BASE_URL;

const newMessage = ref("");
const lastScrollContainer = ref(null);
const partOfMessagesByRoom = ref([]);

const isConnected = ref(false);
const disabled = ref(false);
const userChat = ref({});

const currentRoom = ref({});
const rooms = ref([]);

onMounted(async () => {
  isConnected.value = $getStatusConnection().connected;
  rooms.value = $socketStore.getRooms;

  if ($socketStore) {
    userChat.value = ref($socketStore.getUserChat);
  }

  if (currentRoom.value?._id !== "") {
    disabled.value = currentRoom.value?._id === "";
    partOfMessagesByRoom.value = [];
    // await load({ done: () => { } });
  }

  $io.on("onNewMessage", async (data) => {
    let { ownerId, newMessage: message } = data;

    let newMessage = {
      ...message,
      isOwner: data.senderId === userChat.value._id,
      contentLine: formatedLine({
        author: message.author,
        content: message.content,
        timestamp: message.timestamp,
      }),
    };

    if (currentRoom.value.ownerId === ownerId) {
      partOfMessagesByRoom.value = [...partOfMessagesByRoom.value, newMessage];
    }
  });
});

const sendMessage = () => {
  const messageData = {
    content: newMessage.value,
    senderId: userChat.value._id,
    author: userChat.value.name,
    avatar: userChat.value.avatar,
    roomId: currentRoom.value._id,
    ownerId: currentRoom.value.ownerId,
    timestamp: Date.now(),
  };
  $io.emit("newMessage", messageData);
  newMessage.value = "";
};

const load = async ({ done }) => {

  let lengthMessages = -1;
  let totalMessages = 0;

  currentRoom.value.page = currentRoom.value.page || 1;
  currentRoom.value.pageSize = currentRoom.value.pageSize || 10;


  try {
    if (currentRoom.value.ownerId) {
      const { data, error } = await useFetch(
        `${API_BASE_URL}/chat/${currentRoom.value.ownerId}`,
        {
          params: {
            page: currentRoom.value.page,
            pageSize: currentRoom.value.pageSize,
          },
          transform: (data) => {

            let { messages, total } = data;
            lengthMessages = Number(messages.length);
            totalMessages = total;

            return messages.map((message) => ({
              ...message,
              isOwner: message.senderId === userChat.value._id,
              contentLine: formatedLine({
                author: message.author,
                content: message.content,
                timestamp: message.timestamp,
              }),
            }));
          },
        }
      );

      currentRoom.value.lengthMessages =
        Number(currentRoom.value.lengthMessages) + Number(lengthMessages);
      currentRoom.value.total = totalMessages;
      currentRoom.value.page++;

      if (data._rawValue?.length !== 0 && data._rawValue !== null) {

        partOfMessagesByRoom.value = [
          ...data._rawValue.reverse(),
          ...partOfMessagesByRoom.value,
        ];
        done("ok");
      } else {

        if (partOfMessagesByRoom.value.length === 0)
          partOfMessagesByRoom.value = [
            {
              _id: "empty",
              contentLine: `<label class="empty">No hay mensajes en esta sala</label>`,
            },
          ];

        if (
          data._rawValue?.length === 0 ||
          currentRoom.lengthMessages === currentRoom.total
        ) {
          done("empty");
        } else {
          done("ok");
        }
      }

    } else {
      done("empty");
      // Generate error if not found room
      // data = { _rawValue: null };
    }
  } catch (error) {
    console.error(error);
    done("error");
  }
};

const formatedLine = ({ author, content, timestamp }) => {
  const date = new Date(timestamp);
  const optionsDate = { year: "2-digit", month: "numeric", day: "numeric" };
  const optionsTime = { hour: "numeric", minute: "numeric" };

  const formattedDate = date.toLocaleDateString("es-ES", optionsDate);
  const formattedTime = date.toLocaleTimeString("es-ES", optionsTime);

  return `<p><b>${author}</b><br/>${content}</p>
    <label style="font-size: 12px;" class="dateFormat">${formattedDate} ${formattedTime}</label>`;
};

// watchEffect(() => {});

watch(
  () => $socketStore.getCurrentRoom,
  async () => {
    currentRoom.value = $socketStore.getCurrentRoom;

    if (currentRoom.value.ownerId && $io !== undefined) {
      disabled.value = false;
      partOfMessagesByRoom.value = [];
      console.log("load on watch");
      await load({ done: () => { } });
    }
  }
);

onBeforeUnmount(() => {
  if (currentRoom.value._id) {
    $io.emit("leaveRoom", {
      roomId: currentRoom.value.ownerId,
      userId: userChat.value._id,
    });
  }
});

const props = defineProps({
  variant: {
    type: String,
    default: "outlined",
  },
  label: {
    type: String,
    default: "Escribe un mensaje",
  },
  color: {
    type: String,
    default: "rgb(64, 48, 117)",
  },
  bg_color: {
    type: String,
    default: "grey-darken-4",
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  rows: {
    type: Number,
    default: 10,
  },
  title: {
    type: String,
    default: "Sala de Chat",
  },
  elevation: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: "",
  },
});
</script>
<style scoped>
.message-owner {
  background-color: rgb(12, 8, 59, 0.05);
  color: rgb(114, 114, 114);
  padding: 10px;
  margin: 10px;
  text-align: right;
  border-radius: 15px;
}

.message-other {
  background-color: rgb(89, 84, 148, 0.05);
  color: rgb(114, 114, 114);
  padding: 10px;
  margin: 10px;
  text-align: left;
  border-radius: 15px;
}

.dateFormat {
  font-size: 10px !important;
}

.empty {
  font-size: 12px;
  color: grey;
  text-align: center;
  margin: 10px;
}
</style>
