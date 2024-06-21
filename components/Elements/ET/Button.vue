<template>
    <v-btn 
    :icon="element.properties.icon" 
    :variant="element.properties.icon"
    :prepend-icon="element.properties.prepend_icon"
    :append-icon="element.properties.append_icon"
    :stacked = "element.properties.stacked"
    :density = "element.properties.density"
    :disabled = "element.properties.disabled"
    :color = "element.properties.color"
    :elevation = "element.properties.elevation"
    :border = "element.properties.border" 
    :block = "element.properties.block"
    :rounded = "element.properties.rounded"
    :value = "element.properties.value" 
    :height = "element.properties.height"
    :width = "element.properties.width"
		:class="combinedClasses(element.properties.class)"
    >
  Button
</v-btn>
</template>
 
<script setup>
	const props = defineProps({
		element: {
			type: Object,
			required: true,
		},
	});

	const combinedClasses = computed(() => {
		const classes = Array.isArray(props.element.properties.class)
			? props.element.properties.class
			: [];
		return classes.join(" ");
	});
</script>