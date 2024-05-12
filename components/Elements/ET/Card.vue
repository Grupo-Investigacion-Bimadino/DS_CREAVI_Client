<template>
  <v-card
    v-if="element.properties.isAvatar"
    :append-icon="element.properties.append_icon"
    :prepend-icon="element.properties.prepend_icon"
    :color="element.properties.color"
    :dark="element.properties.dark"
    :disabled="element.properties.disabled"
    :elevation="element.properties.elevation"
    :height="element.properties.height"
    :img="element.properties.img"
    :img-alt="element.properties.img_alt"
    :img-src="element.properties.img_src"
    :loading="element.properties.loading"
    :max-height="element.properties.max_height"
    :max-width="element.properties.max_width"
    :min-height="element.properties.min_height"
    :min-width="element.properties.min_width"
    :outlined="element.properties.outlined"
    :raised="element.properties.raised"
    :ripple="element.properties.ripple"
    :rounded="element.properties.rounded"
    :shaped="element.properties.shaped"
    :title="element.properties.title"
    :subtitle="element.properties.subtitle"
    :text="text"
    :width="element.properties.width"
    :class="combinedClasses"
    :variant="element.properties.variant"
    :hover="element.properties.hover"
    :href="element.properties.href"
    :link="element.properties.link"
    :image="element.properties.image"
  >
    <v-card-actions v-if="element.properties.actions">
      <v-btn @click="element.properties.actions_function">{{
        element.properties.actions_label
      }}</v-btn>
    </v-card-actions>
  </v-card>

  <v-card
    v-if="element.properties.isIcon"
    :append-avatar="element.properties.append_avatar"
    :prepend-avatar="element.properties.prepend_avatar"
    :color="element.properties.color"
    :dark="element.properties.dark"
    :disabled="element.properties.disabled"
    :elevation="element.properties.elevation"
    :height="element.properties.height"
    :img="element.properties.img"
    :img-alt="element.properties.img_alt"
    :img-src="element.properties.img_src"
    :loading="element.properties.loading"
    :max-height="element.properties.max_height"
    :max-width="element.properties.max_width"
    :min-height="element.properties.min_height"
    :min-width="element.properties.min_width"
    :outlined="element.properties.outlined"
    :raised="element.properties.raised"
    :ripple="element.properties.ripple"
    :rounded="element.properties.rounded"
    :shaped="element.properties.shaped"
    :title="element.properties.title"
    :subtitle="element.properties.subtitle"
    :text="text"
    :width="element.properties.width"
    :class="combinedClasses"
    :variant="element.properties.variant"
    :hover="element.properties.hover"
    :href="element.properties.href"
    :link="element.properties.link"
    :image="element.properties.image"
  >
  </v-card>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  element: {
    type: Object,
    required: true,
  },
});

const expr = /^_.+/;
const regex = new RegExp(expr);

const combinedClasses = computed(async () => {
  const classes = (await Array.isArray(props.element.properties.class))
    ? props.element.properties.class
    : [];
  return classes.join(" ");
});

const resolveCommand = (text) => {
  const match = regex.test(text);

  if (match) {
    switch (text) {
      case "_lorem":
        return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
      default:
        return text;
    }
  } else {
    return text;
  }
};

const text = ref(resolveCommand(props.element.properties.text));
</script>

<style></style>
