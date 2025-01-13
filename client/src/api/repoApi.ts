import axios from "axios";
import { getTokenFromLocalStorage } from "./authApi";

const API = "http://localhost:8080";

export const createRepo = async (data: object) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.post(`${API}/api/file`, data, config);

    if (response.data && response.data.access) {
      localStorage.setItem("token", response.data.access);
      console.log("Token saved successfully");
    }

    return response.data;
  } catch (error) {
    console.error("createRepo failed", error);
  }
};

export const getRepos = async () => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.get(`${API}/api/repository`, config); 

    return response.data;
  } catch (error) {
    console.log("obnowa");
    const mockRepos = [
      { id: 1, title: "Test Repo 1" },
      { id: 2, title: "Test Repo 2" },
      { id: 3, title: "Test Repo 3" },
      { id: 4, title: "Test Repo 4" },
      { id: 5, title: "Test Repo 5" },
      { id: 6, title: "Test Repo 6" },
      { id: 7, title: "Test Repo 7" },
      { id: 8, title: "Test Repo 8" },
      { id: 9, title: "Test Repo 9" },
      { id: 10, title: "Test Repo 10" },
    ];
    return mockRepos;
  }
};

export const getRepo = async (id: number) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.get(`${API}/api/repository/${id}`, config);

    return response.data;
  } catch (error) {
    console.error("getRepo failed", error);
    const mockRepo = {
      id: 1,
      title: "Test Repo 1",
      description: "This is a test repo",
      created_at: "2020-01-01",
      directories: [
        {
          directory_id: 1,
          directory_title: "Test directory 1",
          files: [
            {
              file_id: 1,
              file_title: "hello_world.py",
              created_at: "2020-01-01",
              content:
                'print("Hello, World!")\nfor i in range(10):\n    print(i)',
            },
          ],
        },
        {
          directory_id: 2,
          directory_title: "Test directory 2", // Corrected key
          files: [
            {
              file_id: 2,
              file_title: "index.html",
              created_at: "2020-01-01",
              content:
                "<html>\n<body>\n<h1>Hello, World!</h1>\n</body>\n</html>",
            },
          ],
        },
        {
          directory_id: 3,
          directory_title: "Test directory 3",
          files: [
            {
              file_id: 3,
              file_title: "app.js",
              created_at: "2020-01-01",
              content: 'console.log("Hello, World!");',
            },
          ],
        },
        {
          directory_id: 4,
          directory_title: "Test directory 4",
          files: [
            {
              file_id: 4,
              file_title: "style.css",
              created_at: "2020-01-01",
              content: "body { font-family: Arial, sans-serif; }",
            },
          ],
        },
        {
          directory_id: 5,
          directory_title: "Test directory 5",
          files: [
            {
              file_id: 5,
              file_title: "main.go",
              created_at: "2020-01-01",
              content:
                'package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
            },
          ],
        },
        {
          directory_id: 6,
          directory_title: "Test directory 6",
          files: [
            {
              file_id: 6,
              file_title: "README.md",
              created_at: "2020-01-01",
              content: "# Test Repo\nThis is a test repository.",
            },
          ],
        },
        {
          directory_id: 7,
          directory_title: "Test directory 7",
          files: [
            {
              file_id: 7,
              file_title: "Dockerfile",
              created_at: "2020-01-01",
              content:
                'FROM node:14\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD ["node", "app.js"]',
            },
          ],
        },
        {
          directory_id: 8,
          directory_title: "Test directory 8",
          files: [
            {
              file_id: 8,
              file_title: "Makefile",
              created_at: "2020-01-01",
              content: "all:\n\tgcc -o main main.c",
            },
          ],
        },
        {
          directory_id: 9,
          directory_title: "Test directory 9",
          files: [
            {
              file_id: 9,
              file_title: "script.sh",
              created_at: "2020-01-01",
              content: '#!/bin/bash\necho "Hello, World!"',
            },
          ],
        },
        {
          directory_id: 10,
          directory_title: "Test directory 10",
          files: [
            {
              file_id: 10,
              file_title: "config.json",
              created_at: "2020-01-01",
              content: '{\n    "name": "test-repo",\n    "version": "1.0.0"\n}',
            },
          ],
        },
      ],
    };
    return mockRepo;
  }
};

export const updateRepo = async (id: number, data: object) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.put(`${API}/api/file/${id}`, data, config);

    return response.data;
  } catch (error) {
    console.error("updateRepo failed", data);
  }
};

export const deleteRepo = async (id: number) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.delete(`${API}/api/file/${id}`, config);

    return response.data;
  } catch (error) {
    console.error("deleteRepo failed", error);
  }
};
