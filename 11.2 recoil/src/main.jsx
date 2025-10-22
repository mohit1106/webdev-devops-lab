import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SelectorApp from './Selectors.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h3>atoms</h3>
    <App />


    <br></br><br></br><br></br><h3>Selectors</h3>
    <SelectorApp />
    <p>isEven thing doesnt render as long as its own val doesnt change</p>
  </StrictMode>,
)
