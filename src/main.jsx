import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/css/index.css'
import App from './components/js/App.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
