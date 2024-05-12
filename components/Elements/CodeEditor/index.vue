<template>
    <div>
        <v-row class="pa-1 ma-1">
            <v-col cols="12" sm="12">
                <ElementsCodeEditorBarBtns @saveElement="saveElement" @newElement="newElement" />
            </v-col>
        </v-row>
        <v-row class="pa-1 ma-1">
            <v-col cols="12" sm="6">
                <CodeEditor v-model:code="code" :code="code" :lang="lang" :dimension="dimension" />
            </v-col>
            <v-col cols="12" sm="6">
                <v-row>
                    <v-col cols="12" sm="6">
                        <ElementsList />
                    </v-col>
                </v-row>
            </v-col>
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
    "text": "_lorem",
    "disabled": false,
    "describable": true,
    "description": []
  },
  "data": {}
}`;


const code = ref(codeTeplate);
const dimension = ref({width: 800, height: 400});
const lang = ref('json');

const saveElement = async () => {
    try {
        console.log('code:', code.value);
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
<!--
Input Text Field
{
  "name": "Input Text Field",
  "type": "inputtextfield",
  "properties": {
    "class":[ "pa-1 ma-1", "text-md", "text-justify" ],
    "label":"Nobre del campo",
    "disabled":false,
    "variant":"outlined",
    "clearable":true,
    "data":"",
    "icon":"mdi-format-text",
    "prepend-icon":"mdi-format-text",
    "prepend-inner-icon":"mdi-form-textbox",
    "append-icon":"mdi-form-textbox-password",
    "prefix":"$",
    "suffix":"lbs",
    "type":"text",
    "details":""    
  },
  "data": {}
}

Párrafo
{
  "name": "Parágrafo",
  "type": "paragraph",
  "properties": {
    "icon":"mdi-format-paragraph",
    "class": ["pa-1 ma-1", "text-md", "text-justify"],
    "text": "_lorem",
    "disabled": false,
    "describable": true,
    "description": []
  },
  "data": {}
}
-->