<template>
    <div class="ma-2">
        <h1>Home Page</h1>
        <p>Welcome to the home page</p>
        <!-- Render SVG element -->
        <Twemoji emoji="🚀" />

        <!-- Resize -->
        <Twemoji emoji="🚀" size="2em" />

        <!-- Render PNG <img> element -->
        <Twemoji emoji="🚀" png />

        <Twemoji emoji="1F60A" />

        <Twemoji emoji="U+1F60A" />
        <!-- https://nuxt.com/modules/twemoji -->
        <!-- https://unicode.org/Public/emoji/15.1/emoji-test.txt -->
        <!--CodeEditor v-model="value" :lang="lang" :dimension="dimension"/-->
        <!--TWSample /-->
    </div>
</template>
<script setup>
import { ref } from 'vue'
const value = ref('console.log("Hello, World!")')
const dimension = ref({width: 200, height: 100})
const lang = ref('typescript')
</script>

