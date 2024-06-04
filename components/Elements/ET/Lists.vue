<template>
	<v-list :lines="element.properties.lines">
		<v-list-item
			:key="element.properties.key"
			:title="element.properties.title"
			:subtitle="element.properties.subtitle"
			:prepend-avatar="element.properties.prepend_avatar"></v-list-item>
	</v-list>
</template>
<script setup>
	import { computed } from "vue";

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

<style></style>
