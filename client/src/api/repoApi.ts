import axios from 'axios'
import { getTokenFromLocalStorage } from './authApi'

const API = "localhost:8081"

export const createRepo = async (data: object) => {
    try {
        const token = getTokenFromLocalStorage();
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        };
        const response = await axios.post(API, data, config);

        if (response.data && response.data.access) {
            localStorage.setItem("token", response.data.access);
            console.log("Token saved successfully");
        }

        return response.data;
    } catch (error) {
        console.error("createRepo failed", error);
    }
}

export const getRepos = async () => {
    try {
        const token = getTokenFromLocalStorage();
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        };
        const response = await axios.get(API, config);

        return response.data;
    } catch (error) {
        console.error("getRepos failed", error);
    }
}

export const getRepo = async (id: string) => {
    try {
        const token = getTokenFromLocalStorage();
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        };
        const response = await axios.get(`${API}/${id}`, config);

        return response.data;
    } catch (error) {
        console.error("getRepo failed", error);
    }
}

export const updateRepo = async (id: string, data: object) => {
    try {
        const token = getTokenFromLocalStorage();
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        };
        const response = await axios.put(`${API}/${id}`, data, config);

        return response.data;
    } catch (error) {
        console.error("updateRepo failed", error);
    }
}

export const deleteRepo = async (id: string) => {
    try {
        const token = getTokenFromLocalStorage();
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        };
        const response = await axios.delete(`${API}/${id}`, config);

        return response.data;
    } catch (error) {
        console.error("deleteRepo failed", error);
    }
}

