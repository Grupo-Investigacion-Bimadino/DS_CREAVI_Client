<template>
    <div>
        <v-row class="pa-1 ma-1">
            <v-col cols="12" sm="12">
                <ElementsCodeEditorBarBtns @saveElement="saveElement" @newElement="newElement" />
            </v-col>
        </v-row>
        <v-row class="pa-1 ma-1">
            <v-col cols="12" sm="6">
                <v-textarea label="JS" rows="7" variant="outlined" auto-grow shaped v-model="code"></v-textarea>
            </v-col>
            <v-row>
                <v-col cols="12" sm="6">
                    <ElementsList />
                </v-col>
            </v-row>
        </v-row>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// Store methods
import { useElementStore } from "~/store/element";
const elementStore = useElementStore();

var codeTeplate = `{
  "name": "Parágrafo",
  "type": "paragraph",
  "properties": {
    "icon":"mdi-format-paragraph",
    "class": ["pa-1 ma-1", "text-md", "text-justify"],
    "text": "lorem",
    "disabled": false,
    "describable": true,
    "description": []
  },
  "data": {}
}`;


const code = ref(codeTeplate)

const saveElement = async () => {
    try {
        const elementData = JSON.parse(code.value);
        await elementStore.createElement(elementData);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}
const newElement = () => {
    code.value = codeTeplate;
}

</script>

<style></style>