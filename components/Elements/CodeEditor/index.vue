<template>
    <v-row class="pa-1 ma-1">
        <v-col cols="12" sm="12">
            <v-textarea label="JS" rows="7" variant="outlined" auto-grow shaped v-model="code"></v-textarea>
        </v-col>
        <v-col cols="12" sm="12">
            <v-card variant="outlined">
                <v-card-actions>
                    <v-btn @click="saveElement">Save</v-btn>
                    <v-btn @click="code = codeTeplate">Reset</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-row>
            <v-col cols="12" sm="12">
                <ElementsList />
            </v-col>
        </v-row>
    </v-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// Store methods
import { useElementStore } from "~/store/element";
const elementStore = useElementStore();

var codeTeplate = `{
    "name": "p_element_3jsbrh64n",
    "version": "1.0.0",
    "type": "paragraph",
    "properties": { 
        "v_model":"data",
        "disabled": "false",
        "data": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
    },
    "data": { },
    "components": [],
    "createdBy": "jasuuenkaclaksdnaie766",
    "trunk": "maidaus8ashxlkcj8dasjc9da",
    "versions": ["maidaus8ashxlkcj8dasjc9da"]
}`

const code = ref(codeTeplate)

const saveElement = async () => {
    try {
        const elementData = JSON.parse(code.value);
        let newElement = await elementStore.createElement(elementData);
        // console.log(newElement);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}

</script>

<style></style>