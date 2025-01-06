import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Social from './pages/Social.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Login />,
  },
  {
    path:"/home",
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      }, 
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
