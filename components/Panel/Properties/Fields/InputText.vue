<template>
  <div>
    <v-text-field
      variant="outlined"
      :label="label"
      v-model="value"
    ></v-text-field>
  </div>
</template>

<script setup>
const props = defineProps(["label", "property"]);
const emit = defineEmits(["update:property"]);

const value = ref(props.property);

watch(
  () => value.value,
  (newValue) => {
    emit("update:property", newValue);
  }
);
</script>

<style></style>
