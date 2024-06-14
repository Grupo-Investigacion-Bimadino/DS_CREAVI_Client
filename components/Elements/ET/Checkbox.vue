<template>
  <v-checkbox
    :label="element.properties.label"
    :append-icon="element.properties.append_icon"
    :base-color="element.properties.base_color"
    :center-affix="element.properties.center_affix"
    :color="element.properties.color"
    :defaults-target="element.properties.defaults_target"
    :density="element.properties.density"
    :direction="element.properties.direction"
    :disabled="element.properties.disabled"
    :error="element.properties.error"
    :error-messages="element.properties.error_messages"
    :false-icon="element.properties.false_icon"
    :false-value="element.properties.false_value"
    :focused="element.properties.focused"
    :hide-details="element.properties.hide_details"
    :hide-spin-buttons="element.properties.hide_spin_buttons"
    :hint="element.properties.hint"
    :id="element.properties.id"
    :indeterminate="element.properties.indeterminate"
    :indeterminate-icon="element.properties.indeterminate_icon"
    :max-errors="element.properties.max_errors"
    :messages="element.properties.messages"
    :min-width="element.properties.min_width"
    :model-value="element.properties.model_value"
    :multiple="element.properties.multiple"
    :name="element.properties.name"
    :persistent-hint="element.properties.persistent_hint"
    :prepend-icon="element.properties.prepend_icon"
    :readonly="element.properties.readonly"
    :ripple="element.properties.ripple"
    :rules="element.properties.rules"
    :theme="element.properties.theme"
    :true-icon="element.properties.true_icon"
    :true-value="element.properties.true_value"
    :type="element.properties.type"
    :validate-on="element.properties.validation_on"
    :validation-value="element.properties.validation_value"
    :value="element.properties.value"
    :value-comparator="element.properties.value_comparator"
    :width="element.properties.width"
		:class="combinedClasses(element.properties.class)"
  >
  </v-checkbox>
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
