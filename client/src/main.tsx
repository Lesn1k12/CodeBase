import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Dashboard from './pages/dashboard/Dashboard';
import AuthPage from './pages/auth_page/AuthPage';
import ErrorPage from './error-page';
import RepoPage from './pages/repo_page/RepoPage';
import CodeEditor from './components/code_editor/CodeEditor';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage/>
  },
  {
    path: "/repos/:repoId",
    element: <RepoPage/>
  },
  {
    path: "/edit/:repoId",
    element: <CodeEditor/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
