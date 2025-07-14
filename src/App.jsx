import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfoForm'

function App() {
  // App.jsx will own the state and then will pass props to the components
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  console.log(name, email, address)

  return (
    <>
    <GeneralInfoForm 
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      address={address}
      setAddress={setAddress}
    />
    </>
  )
}

export default App
