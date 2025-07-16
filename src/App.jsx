import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfoForm'
import EducationForm from './components/EducationForm'
import ResumePreview from './components/ResumePreview'

function App() {
  // App.jsx will own the state and then will pass props to the components
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [schoolName, setSchoolName] = useState('');
  const [major, setMajor] = useState('');
  const [graduationDate, setGraduationDate] = useState('');

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
        <br />
        <h5>Education Section</h5>
        <EducationForm
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          major={major}
          setMajor={setMajor}
          graduationDate={graduationDate}
          setGraduationDate={setGraduationDate}
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
