import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import { WrapUser } from './components/context/auth.context.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import BookPage from './pages/book.jsx';
import UserPage from './pages/user.jsx';
import TodoApp from './components/todo/todoApp.jsx';
import ErrorPage from './pages/error.jsx';
import PriveRoute from './pages/private.route.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/books",
        element: <PriveRoute><BookPage /></PriveRoute>,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <WrapUser>
    <RouterProvider router={router} />
  </WrapUser>,
)
