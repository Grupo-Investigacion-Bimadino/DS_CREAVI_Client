<template>
    <div>
        <h1>Logout</h1>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";

const router = useRouter();

const authStore = useAuthStore();

onMounted(() => { 
    authStore.logout();
    router.push('/auth/login');
});
</script>

<style scoped>

</style>