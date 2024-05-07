<template>
    <v-footer class="d-flex flex-column">
        <div class="px-4 text-center w-100">
            {{ new Date().getFullYear() }} — <strong>CREAVI</strong>
        </div>
    </v-footer>
</template>
<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>
