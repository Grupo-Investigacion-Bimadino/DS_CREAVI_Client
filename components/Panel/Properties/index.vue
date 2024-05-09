<template>
  <div>
    <v-tabs v-model="tab" centered>
      <v-tab value="tab-1"> Propiedades </v-tab>
      <v-tab value="tab-2"> Componentes </v-tab>
      <v-tab value="tab-3"> <v-icon>mdi-github</v-icon> </v-tab>
      <v-spacer></v-spacer>
      <v-btn size="small" icon="mdi-close" variant="text" class="ma-1" @click.stop="close"></v-btn>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="tab-1">
        <v-card>
          <v-card-text>
            <v-list :title="`Propiedades del componente ${element.name}`" :subtitle="`v ${element.version}`">
              <v-list-item v-for="(property, propertyName) in element.properties" :key="propertyName">
                <div v-if="propertyName == 'width'">
                  <PanelPropertiesCUnitInputField v-if="elelment.properties" :tempWidth="elelment.properties.width"
                    @onChangeWidth="changeWidth" />
                </div>
                <div v-else-if="propertyName == 'data' || propertyName == 'v_model' || propertyName == 'components'">
                  <v-text-field :model-value="element.properties[propertyName]" :label="propertyName"
                    disabled></v-text-field>
                </div>
                <div v-else-if="propertyName == 'items' && typeof element.properties[propertyName] == 'object'">
                  <PanelPropertiesArray :property="element.properties[propertyName]" :field="propertyName" />
                </div>
                <div v-else>
                  <component :is="getComponetByType(typeof element.properties[propertyName])" :label="propertyName"
                    variant="outlined" class="pa-2" />
                </div>
              </v-list-item>
            </v-list>
            <v-card elevation="0" variant="outlined">
              <v-card-actions>
                <v-btn variant="text" @click="showCode = !showCode"> JSON </v-btn>

                <v-spacer></v-spacer>
                <v-btn :icon="showCode ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="showCode = !showCode"></v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div class="code-container" v-show="showCode">
                  <v-btn id="copyButton" icon small class="copy-button ma-2">
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                  <pre id="codeText"><code class="language-js">{{ element }}</code></pre>
                </div>
              </v-expand-transition>
            </v-card>
          </v-card-text>
        </v-card>
      </v-window-item>

      <!--v-window-item value="tab-2">
        <v-card max-width="600" class="mx-auto">
          <v-card-text>
            <div class="d-flex flex-column align-left">
              <v-btn-toggle mandatory>
                Add buttons-->
                <!--CBtnsBtnContent @onAddComponent="addComponent" />
                <CBtnsBtCWidthComponent @onAddComponent="addComponent" /-->
              <!--/v-btn-toggle>
            </div>
          </v-card-text>
        </v-card>
      </v-window-item-->
      <!--v-window>
        <v-window-item value="tab-3">
          <v-card>
            <v-card-title>
              <v-icon>mdi-github</v-icon>
              <span> Código fuente </span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Alignment" v-model="alignment" />
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Formatting" v-model="formatting" />
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Value" v-model="value" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window-->
    </v-window>
  </div>
</template>
<script setup>
import { useAppStore } from "~/store/app";
const appStore = useAppStore();
// const showProperties = computed(() => appStore.getShowProperties);

//import { PropertieArray, CWidthComponent, CBtnsBtCWidthComponent, CBtnsBtnContent, CRender, CUnitInputField } from "#components";

import { ElementsETInputField, ElementsETSwitch } from "#components";

import { usePropertiePanelStore } from "~/store/propertiePanel";

import { ref, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import ClipboardJS from "clipboard";

const copyButtonId = "copyButton";
const showCode = ref(false);
const tab = ref(null);
const propertiePanelStore = usePropertiePanelStore();
const element = computed(() => propertiePanelStore.getElementTemp);
const codeTextId = "codeText";

const alignment = ref(1);
const formatting = ref([]);
const value = ref("Toggle button requirements.\n\nHave at least three toggle buttons in a group\nLabel buttons with text, an icon, or");

onMounted(() => {
  Prism.highlightAll();
  new ClipboardJS(`#${copyButtonId}`, {
    text: () => document.getElementById(codeTextId).textContent,
  });
});

const getComponetByType = (type) =>
({
  string: ElementsETInputField,
  number: ElementsETInputField,
  boolean: ElementsETSwitch,
  default: ElementsETInputField,
}[type]);


/*const getComponetByType = (propertyValue) => {
  console.log(typeof propertyValue);
  switch (typeof propertyValue) {
    case "string":
      return "ETInputField";
    case "number":
      return "ETInputField";
    case "boolean":
      return "ETSwitch";
    default:
      return "ETInputField";
  }
};*/

const addComponent = (newComponent) => {
  element.value.properties.components.push(newComponent);
};

const changeWidth = (newWidth) => {
  element.value.properties.width = newWidth;
};

const close = () => {
  appStore.toggleShowProperties();
};
</script>

<style lang="scss" scoped>
.code-container {
  position: relative;
}

.copy-button {
  position: absolute;
  top: 0;
  right: 0;
}

.btn-editor-container {
  position: relative;
}

.btn-editor {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
