import axios from 'axios'
import { getTokenFromLocalStorage } from './authApi'

const API = "localhost:8082"

export const createComment = async (data: object) => {
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
        console.error("createComment failed", error);
    }
}

export const getCommentsForRepo = async (repoId) => {
    try {
        const token = getTokenFromLocalStorage();
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        };
        const response = await axios.get(`${API}/${repoId}`, config);

        return response.data;
    } catch (error) {
        console.error("getComments failed", error);
    }
}
