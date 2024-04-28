// /src/runtime/plugin.ts
import { defineNuxtPlugin } from "#app";
import { io, Socket } from "socket.io-client";
import { useSocketStore } from "@/store/socket";

export const connectSocket = (socket_url: string) =>
  new Promise(async (resolve, reject) => {
    try {
      var socketInstance: Socket | null = null;

      const socketStore = useSocketStore();

      const connect = async () => {
        try {
          socketInstance = await io(socket_url);

          return socketInstance;
        } catch (error) {
          console.error("Error connecting to the server:", error);
          throw error;
        }
      };

      const getStatusConnection = () =>
        socketInstance
          ? { connected: socketInstance.connected, socketInstance }
          : false;

      await connect();

      resolve({
        io: socketInstance,
        connect,
        getStatusConnection,
        socketStore,
      });
    } catch (error) {
      reject(error);
    }
  });

export default defineNuxtPlugin(async (nuxtApp) => {
  const {
    public: { SOCKET_URL },
  } = nuxtApp.$config;

  connectSocket(SOCKET_URL as string).then((socket: any) => {
    const { io, connect, getStatusConnection, socketStore } = socket;

    nuxtApp.provide("io", io);
    nuxtApp.provide("connect", connect);
    nuxtApp.provide("getStatusConnection", getStatusConnection);

    if (socketStore) {
      nuxtApp.provide("socketStore", socketStore);
    }
  });
});
