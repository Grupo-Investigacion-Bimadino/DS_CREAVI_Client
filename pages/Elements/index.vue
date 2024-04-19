<template>
    <div>
        <v-row no-gutters>
            <v-col cols="12" sm="4">
                <ElementsCodeEditor v-model="code" />
            </v-col>
            <v-col cols="12" sm="3">
                Propiedades
            </v-col>
            <v-col cols="12" sm="5">
                Elemento
            </v-col>
        </v-row>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const code = ref('');

</script>
