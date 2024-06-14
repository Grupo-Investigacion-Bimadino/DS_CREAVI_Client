<template>
	<v-tooltip
		:activator="element.properties.activator"
		:location="element.properties.location"
		:class="combinedClasses(element.properties.class)">
        {{ element.properties.data }}
	</v-tooltip>
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
