import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GeneralInfoForm/>
    </>
  )
}

export default App
