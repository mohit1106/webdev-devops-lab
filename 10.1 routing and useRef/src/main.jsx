import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseRef, { Stopwatch } from './UseRef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <br></br>
    <h3>useRef Hook - focusing on input box</h3>
    <UseRef />

    <Stopwatch />
  </StrictMode>,
)
