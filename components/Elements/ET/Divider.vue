<template>
	<v-divider
		:class="element.properties.class"
		:color="element.properties.color"
		:inset="element.properties.inset"
		:vertical="element.properties.vertical"
		:thickness="element.properties.thickness">
	</v-divider>
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
