export const useAuthMiscellaneous = () => {

    const loginMis = async (credentials: any, API_BASE_URL: string) => {                
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        return data;
    }

    const signup = async (newUser: any, API_BASE_URL: string) => {
        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });
        const data = await response.json();
        return data;
    }

    const logout = async () => {
        return null;
    }

    const getUsers = async (token: string, API_BASE_URL: string) => {
        const response = await fetch(`${API_BASE_URL}/users`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    }

    return { loginMis, signup, logout, getUsers };
};
