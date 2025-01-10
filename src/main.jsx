import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Social from './pages/Social.jsx'
import BeatDetails from './pages/BeatDetails.jsx'


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
      {
        path: "beat/:name", //Rota dinamica para cada beat
        element: <BeatDetails />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
