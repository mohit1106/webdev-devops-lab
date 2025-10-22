import './App.css'
import { Button } from './components/Button'
import { Otp } from './components/Otp'

function App() {
  return (
    <div className='h-screen bg-blue-700 flex items-center justify-center'>
      <Otp number={6} />
    </div>
  )
}

export default App
