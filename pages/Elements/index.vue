<template>
    <div class="ma-3" v-if="element">
        <v-row no-gutters>
            <v-col cols="12">
                <div class="text-captiontext-body-1">
                    <p class="font-weight-black">{{ element.name }}:[{{element.type}}]</p>
                </div>                
                <ElementsRender :element="element" />
            </v-col>
            <v-col cols="12">
                <ElementsCodeEditor v-model="code" />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useElementStore } from "~/store/element";

const elementStore = useElementStore();
const element = computed(() => elementStore.getElement);
const code = ref('');
// const elements = computed(() => elementStore.getStateElements);

// ! se debe cargar con el codigo del elemento seleccionado



onMounted(async () => { })

</script>
