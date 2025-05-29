import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   {/* This is the browser router and we have to wrap App inside it to use routing of pages */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
