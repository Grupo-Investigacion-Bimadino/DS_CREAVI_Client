<template>
  <v-card elevation="0">
    <div class="d-flex justify-space-between">
      
    <v-btn-toggle variant="outlined" divided>
        <v-btn icon="mdi-content-save" @click="save"></v-btn>
        <v-btn icon="mdi-restore" @click="reset"></v-btn>           
    </v-btn-toggle>

    <v-btn-toggle variant="outlined" divided>
        <v-btn icon="mdi-format-paragraph"></v-btn>
    </v-btn-toggle>
    </div>    
  </v-card>
</template>
<script setup>
const  emit  = defineEmits(['save', 'reset'])

const save = () => {
  emit('save')
}

const reset = () => {
  emit('reset')
}
</script>