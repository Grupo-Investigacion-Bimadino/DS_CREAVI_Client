<template>
    <div>
        <div v-if="element" class="btn-editor-container" @mouseenter="onShowProperties"
            @mouseleave="isVisiblePanelButtons = false" v-bind="props">
            <component :is="dynamicRenderCOmponent(element.type)" :element="element" class="ma-1 pa-1" />
            <!--CPanelEditor v-if="isVisiblePanelButtons" :component="component" /-->
        </div>
    </div>
</template>
<script setup>
import { ElementsETParagraph, ElementsETDefault } from '#components';
// import { usePropertiePanelStore } from "~/store/propertiePanel";

// const propertiePanelStore = usePropertiePanelStore();
const isVisiblePanelButtons = ref(false);

const props = defineProps({
    element: {
        type: Object,
        required: true,
    },
});

const onShowProperties = () => {
    // propertiePanelStore.setComponentTemp(props.component);
    // isVisiblePanelButtons.value = true;
};

const dynamicRenderCOmponent = (type) =>
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
    background-color: rgb(255, 255, 194, 0.1);
}
</style>
