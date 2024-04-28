<template>
    <v-container>
        <v-row>
            <v-col cols="4" md="4">
                <v-card elevation="0">
                    <ChatRoomList />
                </v-card>
            </v-col>
            <v-col cols="8" md="8">
                <v-card elevation="0">
                    <ChatRoom />
                </v-card>
            </v-col>
        </v-row>
        <ChatAgent />
    </v-container>
</template>

<script setup>

</script>

<style></style>
