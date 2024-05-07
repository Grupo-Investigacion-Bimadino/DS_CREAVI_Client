// store/auth.ts
import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";
import { useAuthMiscellaneous } from "~/composable/useAuthMiscellaneous";

const {loginMis} = useAuthMiscellaneous();

interface userResutl {
  token: string;
  _id: number;
  username: string;
  email: string;
  role: string;
  picture: string;
}

interface User {
  _id: number;
  username: string;
  email: string;
  role: string;
  picture: string;
}

interface Login {
  username: string;
  password: string;
}

const userDefault = {
  _id: 0,
  username: "Invitado",
  email: "@invitado",
  role: "Invitado",
  picture: "/v1/images/profile.png",
} as User;

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: null as string | null,
      user: null as User | null,
      users: [] as User[],      
    };
  },
  persist: true,
  getters: {
    isAuthenticated: (state) => !!state.token,
    getToken: (state) => state.token,
    getUser: (state) => state.user || userDefault,
  },
  actions: {
    
    login(credentials: Login) {
      const runtimeConfig = useRuntimeConfig();
      const API_BASE_URL = runtimeConfig.public.API_BASE_URL;    

      return loginMis(credentials, API_BASE_URL).then((data: userResutl) => {

        // Almacenar el token en el estado
        let token = data.token;

        // Decodificar el token para obtener los datos del usuario
        const userToken = jwtDecode(token);
        // Verifica si userToken es un objeto válido antes de asignarlo a this.user
        if (typeof userToken === "object" && userToken !== null) {
          this.user = userToken as User; // Asigna los datos del usuario
        } else {
          this.user = null; // Asigna null si el token no es un objeto válido
        }

        // Almacenar el token en el estado
        this.token = token;

        return { token, user: userToken };
      });      
    },
    signup(newUser: any) {
      const runtimeConfig = useRuntimeConfig();
      const API_BASE_URL = runtimeConfig.public.API_BASE_URL;

      return fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => {
          console.log("response", response);
          return response.json();
        })
        .then((data) => {
          // Almacenar el token en el estado
          this.token = data.token;
          return data;
        });
    },
    logout() {
      // Eliminar el token del estado
      this.user = null;
      this.token = null;
    },
    getUsers() {
      const runtimeConfig = useRuntimeConfig();
      const API_BASE_URL = runtimeConfig.public.API_BASE_URL;
      return fetch(`${API_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }).then(async (response) => {
        this.users = (await response.json()) as User[];
      });
    },
  },
});
