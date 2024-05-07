<template>
  <div>
    <v-card class="mx-auto pa-8 pb-8" max-width="448" variant="outlined" rounded="lg">
      <v-form v-model="valid" ref="form" @submit.prevent="submitForm" fast-fail>
        <v-img class="mx-auto my-6" max-width="160" src="/images/Logo_R-360.png"></v-img>
        <div class="text-subtitle-1 text-medium-emphasis">Cuenta</div>

        <v-text-field :rules="rulesEmail" density="compact" placeholder="Correo electrónico"
          prepend-inner-icon="mdi-email-outline" variant="outlined" v-model="email"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Contraseña

          <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
            ¿Olvidaste la contraseña?</a>
        </div>

        <v-text-field :rules="rulesPassword" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'" density="compact" placeholder="Ingresa tu contraseña"
          prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"
          v-model="password"></v-text-field>

        <v-btn :disabled="!valid" :loading="loading" type="submit" class="mb-8" color="blue" size="large"
          variant="tonal" block>
          login
        </v-btn>


        <v-card-text class="text-center">
          <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
            Usar otro proveedor <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-form>
      <v-snackbar v-model="snackbar" multi-line>
        {{ snackbarText }}
        <template v-slot:actions>
          <v-btn color="red" variant="text" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>      
    </v-card>
  </div>
</template>
<script setup>
import { ref } from 'vue';  
import { useAuthStore } from "@/store/auth";

const email = ref("");
const password = ref("");
const snackbarText = ref("");

const visible = ref(false);
const snackbar = ref(false);

const rulesEmail = ref([(v) => !!v || "El usuario es requerido"]);
const rulesPassword = ref([
  (v) => !!v || "La contraseña es requerida",
  (v) => (v && v.length >= 8) || "La contraseña debe tener al menos 8 caracteres",
]);

const isLogin = ref(true);
const valid = ref(false);
const loading = ref(false);

const router = useRouter();
const authStore = useAuthStore();

const submitForm = async () => {
  isLogin.value = false;

  authStore
    .login({ email: email.value, password: password.value })
    .then((data) => {
      isLogin.value = true;      
      router.push({ path: "/" });
    })
    .catch((error) => {
      console.log(error);
      isLogin.value = false;
      snackbarText.value = "Usuario o contraseña incorrectos";      
      snackbar.value = true;
    });
};

onMounted(() => {
  /*if (authStore.isAuthenticated) {
    router.push({ path: "/" });
  }*/
});
</script>