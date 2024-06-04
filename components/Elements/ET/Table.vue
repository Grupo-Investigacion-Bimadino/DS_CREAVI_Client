<template>
	<v-data-table
		:density="element.properties.density"
		:hide-default-footer="element.properties.hide_default_footer"
		:hide-default-header="element.properties.hide_default_header"
		:show-select="element.properties.show_select"
		:group-by="element.properties.group_by">
	</v-data-table>
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
