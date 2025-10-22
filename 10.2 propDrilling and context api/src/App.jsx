// rolling up the state

import { useState } from 'react'
import './App.css'

function App() {
  return <div>
    <Light />
  </div>
}

function Light() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>
    <LightBulb bulbOn={bulbOn} />
    <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function LightBulb({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function LightSwitch({bulbOn, setBulbOn}) {

  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
    
  }

  return <div>
    <button onClick={toggle}>Toggle bulb</button>
  </div>
}

export default App
