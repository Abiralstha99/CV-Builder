import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfoForm'
import ResumePreview from './components/ResumePreview'

function App() {
  // App.jsx will own the state and then will pass props to the components
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  console.log(name, email, address)

  return (
    <div className='min-h-screen w-screen p-4 sm:p-6 bg-white text-black grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
      <div className='w-full'>
        <GeneralInfoForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          address={address}
          setAddress={setAddress}
        />
      </div>
      <div className='w-full'>
        <ResumePreview
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          address={address}
          setAddress={setAddress}
        />
      </div>
    </div>
  )
}

export default App
