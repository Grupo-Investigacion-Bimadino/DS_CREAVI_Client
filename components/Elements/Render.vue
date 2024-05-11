<template>
    <div>        
        <div class="btn-editor-container" v-if="element" @mouseenter="onShowProperties"
            @mouseleave="isVisiblePanelButtons = false" v-bind="props">
            <component :is="dynamicRenderElement(element.type)" :element="element" class="ma-1 pa-1" />
            <PanelEditor v-if="isVisiblePanelButtons" :element="element" />
        </div>
    </div>
</template>
<script setup>
import { ElementsETParagraph, ElementsETDefault, ElementsETSelect, ElementsETInputTextField } from '#components';
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
    console.log('onShowProperties', props.element)
    propertiePanelStore.setElementTemp(props.element);
    isVisiblePanelButtons.value = true;
};

const dynamicRenderElement = (type) =>
({
    paragraph: ElementsETParagraph,
    default: ElementsETDefault,
    select: ElementsETSelect,
    inputtextfield: ElementsETInputTextField,
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