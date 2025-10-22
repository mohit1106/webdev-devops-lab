import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <p>using prop drilling or rolling up state</p>
    <App />

    <br></br><p>context api</p>
    <Context />
  </StrictMode>,
)
