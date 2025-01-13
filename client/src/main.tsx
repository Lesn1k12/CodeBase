import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import HomePage from './pages/home_page/HomePage';
import Dashboard from './pages/dashboard/Dashboard';
import AuthPage from './pages/auth_page/AuthPage';
import ErrorPage from './error-page';
import RepoPage from './pages/repo_page/RepoPage';
import UpdateRepoPage from './pages/update_repo/UpdateRepoPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
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
    element: <UpdateRepoPage/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
