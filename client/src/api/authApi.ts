import axios from 'axios'

const API = "http://localhost:8081/auth"

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem("token");
}

export const login = async (data: object) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        };

        const response = await axios.post(`${API}/login`, data, config);

        console.log("Full response object:", response);

        if (response.data && response.data) {
            localStorage.setItem("token", response.data);
            console.log("Token saved successfully");
        }

        return response.data;
    } catch (error) {
        console.error("Login failed", error);
    }
}

export const register = async (data: object) => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        };

        const response = await axios.post(`${API}/register`, data, config);

        console.log("Full response object:", response);

        if (response.data && response.data.access) {
            localStorage.setItem("token", response.data.access);
            console.log("Token saved successfully");
        }

        return response.data;
    } catch (error) {
        console.error("register failed", error);
    }
}