<template>
  <v-switch
    variant="outlined"
    v-model="value"
    color="success"
    :label="labelMessage"
    hide-details
  ></v-switch>
</template>
<script setup>
const props = defineProps(["label", "property"]);
const emit = defineEmits(["update:property"]);

const labelMessage = computed(() => {
  return `${props.label} : ${props.property ? "Deshabilitado" : "Habilitado"}`;
});

const value = ref(props.property);

watch(
  () => value.value,
  (newValue) => {
    emit("update:property", newValue);
  }
);
</script>

<style></style>
