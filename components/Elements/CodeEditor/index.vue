<template>
  <div>
    <v-row class="pa-1 ma-1">
      <v-col cols="12" sm="2">
        <ElementsList />
      </v-col>
      <v-col cols="12" sm="10">
        <ElementsCodeEditorBarBtns
          @saveElement="saveElement"
          @newElement="newElement"
        />
      </v-col>
    </v-row>

    <v-row class="pa-1 ma-1">
      <v-col cols="12" sm="7">
        <div class="text-captiontext-body-1">
          <p class="font-weight-black">Campos y propiedades del Elemento</p>
        </div>
        <CodeEditor v-model:code="code" :lang="lang" :dimension="dimension" />
      </v-col>
      <v-col cols="12" sm="5">
        <div class="text-captiontext-body-1">
          <p class="font-weight-black">
            Previsualización del Elemento: {{ element.name }}:[{{
              element.type
            }}]
          </p>
        </div>
        <ElementsRender :element="element" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
// Store methods
import { useElementStore } from "~/store/element";
const elementStore = useElementStore();
const element = computed(() => elementStore.getElement);
const dimension = ref({ width: 800, height: 400 });
const lang = ref("json");
const code = ref(JSON.stringify(element.value, null, 2));
const elementTemplate = ref(null);

const saveElement = async () => {
  try {
    const elementData = JSON.parse(code.value);
    console.log("elementData:", elementData);
    await elementStore.createElement(elementData);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
};
const newElement = () => {
  code.value = JSON.stringify({ ...elementTemplate.value }, null, 2);
};

watch(
  () => elementStore.getElement,
  (newValue) => {
    code.value = JSON.stringify(newValue, null, 2);
  }
);

watch(
  () => code.value,
  (newValue) => {
    if (newValue._id) elementStore.updateElement(JSON.parse(newValue));
  }
);

onMounted(async () => {
  elementTemplate.value = await elementStore.getElementByName("template");

  delete elementTemplate.value._id;
  delete elementTemplate.value.createdAt;
  delete elementTemplate.value.updatedAt;
  delete elementTemplate.value.__v;
});
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

Template de elemento
{
  "name": "Template de elemento",
  "type": "default",
  "properties": {
    "data": "propiedad requerida",
    "nombre propiedad":"valor de tipo [string, number, boolean, array, command]",    
    "nombreCampoArray": ["valor 1", "valor 2", "valor 3"],
    "nombreCampoComando": "_lorem",
    "nombreCampoBooleano": true,
    "nombreCampoString": "valor string",
    "nombreCampoNumber": 1
  }  
}
-->
