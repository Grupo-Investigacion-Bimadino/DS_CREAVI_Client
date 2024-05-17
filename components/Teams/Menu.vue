<template>
  <div>
    <v-row>
      <v-col cols="3">
        <div class="pa-4" v-for="(button, i) in buttons" :key="i">
          <v-btn
            :prepend-icon="button.icon"
            variant="outlined"
            rounded="xl"
            size="large"
            block
          >
            {{ button.text }}
          </v-btn>
        </div>
      </v-col>
      <v-col cols="9">
        <v-card>
          <v-card-title>
            <v-icon>mdi-account-group</v-icon>
            Equipo
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <v-card>
                  <v-card-title>Integrantes</v-card-title>
                  <v-card-text>
                    <v-list>
                      <v-list-item-group>
                        <v-list-item>
                          <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/port"></v-img>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>Nombre</v-list-item-title>
                            <v-list-item-subtitle
                              >Profesión</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="8">
                <v-card>
                  <v-card-title>Descripción</v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-textarea
                          outlined
                          rows="5"
                          placeholder="Descripción del equipo"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const buttons = ref([
  {
    text: "Tareas",
    value: "task",
    icon: "mdi-content-paste",
  },
  {
    text: "Notificaciones",
    value: "notifications",
    icon: "mdi-chat",
  },
  {
    text: "Equipo",
    value: "teams",
    icon: "mdi-account-group",
  },
]);
</script>

<style></style>
