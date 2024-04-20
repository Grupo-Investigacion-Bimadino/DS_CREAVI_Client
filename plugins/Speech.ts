export const functionA = () => {
    console.log('functionA');
}

export const functionB = () => {
    console.log('functionB');
}

export default defineNuxtPlugin(nuxtApp => {
    // nuxtApp.vueApp.use(functionA);
    // nuxtApp.vueApp.use(functionB);

    return {
        provide: {
            // messageSpeech: () => console.log('messageSpeech')
            functionA: functionA,
            functionB: functionB
        }
    };
})


