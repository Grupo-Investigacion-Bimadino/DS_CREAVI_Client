<template>
    <div>
        <div v-if="element" class="btn-editor-container" @mouseenter="onShowProperties"
            @mouseleave="isVisiblePanelButtons = false" v-bind="props">
            <component :is="dynamicRenderElement(element.type)" :element="element" class="ma-1 pa-1" />                        
            <PanelEditor v-if="isVisiblePanelButtons" :element="element" />
        </div>
    </div>
</template>
<script setup>
import { ElementsETParagraph, ElementsETDefault } from '#components';
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

const dynamicRenderElement = (type) =>
({
    paragraph: ElementsETParagraph,
    default: ElementsETDefault,
}[type]);

</script>

<style>
.btn-editor-container {
    position: relative;
}

.btn-editor-container:hover {    
    background-color: rgb(245, 255, 250, 0.1);
}
</style>
