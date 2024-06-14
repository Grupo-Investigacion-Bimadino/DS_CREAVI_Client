<template>
  <div>
    <div
      class="btn-editor-container"
      v-if="element"
      @mouseenter="onShowProperties"
      @mouseleave="isVisiblePanelButtons = false"
      v-bind="props"
    >
      <component
        :is="dynamicRenderElement(element.type)"
        :element="element"
        class="ma-1 pa-1"
      />
      <PanelEditor v-if="isVisiblePanelButtons" :element="element" />
    </div>
  </div>
</template>
<script setup>
// se adiciona el nuevo elemento
import {
  ElementsETParagraph,
  ElementsETDefault,
  ElementsETSelect,
  ElementsETInputTextField,
  ElementsETCard,
  ElementsETChip,
  ElementsETButton,
  ElementsETCheckbox,
  ElementsETDivider,
  ElementsETExpande,
  ElementsETIcons,
  ElementsETLists,
  ElementsETSwitch,
  ElementsETTable,
  ElementsETTooltip,
} from "#components";
import { usePropertiePanelStore } from "~/store/propertiePanel";

const propertiePanelStore = usePropertiePanelStore();
const isVisiblePanelButtons = ref(false);

const props = defineProps({
  element: {
    type: Object,
    required: true,
  },
});

const onShowProperties = () => {
  propertiePanelStore.setElementTemp(props.element);
  isVisiblePanelButtons.value = true;
};

// se vincula el nuevo elemento
const dynamicRenderElement = (type) =>
  ({
    card: ElementsETCard,
    paragraph: ElementsETParagraph,
    default: ElementsETDefault,
    select: ElementsETSelect,
    inputtextfield: ElementsETInputTextField,
    chip: ElementsETChip,
    button: ElementsETButton,
    checkbox: ElementsETCheckbox,
    divider: ElementsETDivider,
    expande: ElementsETExpande,
    icon: ElementsETIcons,
    list: ElementsETLists,
    switch: ElementsETSwitch,
    table: ElementsETTable,
    tooltip: ElementsETTooltip,
  }[type]);
</script>

<style>
.btn-editor-container {
  position: relative;
}

.btn-editor-container:hover {
  background-color: rgb(255, 255, 194, 0.1);
}
</style>
