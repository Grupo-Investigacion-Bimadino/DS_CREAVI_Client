// /store/socket.ts
import { defineStore } from "pinia";

const dynamicId = Math.random().toString(36).substr(2, 9);

interface Room {
  _id: string;
  ownerId: string;
  name: string;
  lengthMessages: number;
  total: number;
  page: number;
  messages: [];
}

interface User {
  _id: string;
  name: string;
  email: string;
}

interface State {
  idConnection: string;
  connected: boolean;
  rooms: Room[];
  userChat: User;
  connectedUsers: User[];
  currentRoom: Room;
}

export const useSocketStore = defineStore({
  id: "socket",
  state: (): State => ({
    idConnection: "",
    connected: false,
    rooms: [] as Room[],
    userChat: {
      _id: dynamicId,
      name: `Anonimo_${dynamicId}`,
      email: `anonimo_${dynamicId}@email.com`,
    } as User,
    connectedUsers: [] as User[],
    currentRoom: {
      _id: "",
      ownerId: "",
      name: "...",
      lengthMessages: 0,
      total: 0,
      page: 1,
      messages: [],
    } as Room,
  }),

  getters: {
    isConnected: (state) => state.connected,
    getUserChat: (state) => state.userChat,
    getCurrentRoom: (state) => state.currentRoom,
    getConnectedUsers: (state) => state.connectedUsers,
    getRooms: (state) => state.rooms,
  },

  actions: {
    // User-related actions
    disconnect() {
      console.log("💬 Chat disconnect");
      this.connected = false;
      this.idConnection = "";
    },
    connect(idConnection: string) {
      console.log("💬 Chat connect", idConnection);
      this.connected = true;
      this.idConnection = idConnection;
    },
    initUserChat() {
      this.userChat = {
        _id: Math.random().toString(36).substr(2, 9),
        name: `Anonimo_${dynamicId}`,
        email: `anonimo_${dynamicId}@email.com`,
      } as User;
    },
    setUser(user: User) {
      this.userChat = user;
    },

    addRoom(room: Room) {
      this.rooms.push(room);
    },
    setRooms(rooms: Room[]) {
      this.rooms = rooms;
    },
    selectRoom(idRoom: string) {
      let tempRoom = this.rooms.find((room) => room.ownerId === idRoom) as Room;
      tempRoom.page = 1;
      tempRoom.lengthMessages = 0;
      this.currentRoom = tempRoom;
    },
    addUser(user: User) {
      this.connectedUsers.push(user);
    },
    removeUser(userId: string) {
      this.connectedUsers = this.connectedUsers.filter(
        (user) => user._id !== userId
      );
    },
  },
});
