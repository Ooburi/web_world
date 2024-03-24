import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './routes/error-page.jsx';
import App from './App.jsx'
import Info from './routes/Info.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "info",
    element: <Info />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
     <RouterProvider router={router} />
  ,
)
