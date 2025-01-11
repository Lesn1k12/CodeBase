import axios from 'axios';
import { getTokenFromLocalStorage } from './authApi';

const API = "http://localhost:8081"; 

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
        const response = await axios.get(`${API}/repos`, config); // Ensure the correct endpoint is used

        return response.data;
    } catch (error) {
        console.error("getRepos failed", error);
        const mockRepos = [
            { id: 1, title: 'Test Repo 1' },
            { id: 2, title: 'Test Repo 2' },
            { id: 3, title: 'Test Repo 3' }
        ];
        return mockRepos;
    }
}

export const getRepo = async (id: number) => {
    try {
        const token = getTokenFromLocalStorage();
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        };
        const response = await axios.get(`${API}/repos/${id}`, config);

        return response.data;
    } catch (error) {
        console.error("getRepo failed", error);
        const mockRepo = {
            id: 1,
            title: 'Test Repo 1',
            description: 'This is a test repo',
            created_at: '2020-01-01',
            directories: [
                {
                    directory_id: 1,
                    directory_title: 'Test directory 1',
                    files: [
                        {
                            file_id: 1,
                            file_title: 'hello_world.py',
                            created_at: '2020-01-01',
                            content: 'print("Hello, World!")',
                        }
                    ]
                },
                {
                    directory_id: 2,
                    title: 'Test directory 2',
                    created_at: '2020-01-01',
                    files: [
                        {
                            file_id: 2,
                            file_title: 'index.html',
                            created_at: '2020-01-01',
                            content: '<html><body><h1>Hello, World!</h1></body></html>',
                        }
                    ]
                }
            ]
        };
        return mockRepo;
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
        const response = await axios.put(`${API}/repos/${id}`, data, config);

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
        const response = await axios.delete(`${API}/repos/${id}`, config);

        return response.data;
    } catch (error) {
        console.error("deleteRepo failed", error);
    }
}