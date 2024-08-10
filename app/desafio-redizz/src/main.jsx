import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes></MainRoutes>
    </BrowserRouter>
  </React.StrictMode>)

