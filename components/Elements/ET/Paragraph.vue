<template>    
    <p :class="combinedClasses" :disabled="element.properties.disabled">
        {{ text }}
    </p>
</template>
<script lang="ts" setup>
// class align ['left', 'center', 'right', 'justify']
// class size ["sm", "md", "lg", "xl"]

const expr = /^_.+/; 
const regex = new RegExp(expr);

const props = defineProps({
    element: {
        type: Object,
        required: true,
    },
});

const resolveCommand = (text:string) => {    
    const match = regex.test(text);
    
    if (match) {        
        switch (text) {
            case '_lorem':
                return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
            default:
                return text;
        }
    } else {
        return text;
    }    
}

const text = ref(resolveCommand(props.element.properties.text)); 

const combinedClasses = computed(() => {    
    const classes = Array.isArray(props.element.properties.class)
        ? props.element.properties.class
        : [];    
    return classes.join(' ');
});



</script>

<style scoped></style>
