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
  console.log('Education:', schoolName, major, graduationDate)

  return (
    <div className='min-h-screen w-screen p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-100 text-black grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>      <div className='w-full space-y-6'>
      <div className='bg-white p-6 rounded-lg shadow-lg border border-gray-200'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2'>Personal Information</h2>
        <GeneralInfoForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          address={address}
          setAddress={setAddress}
        />

        <h2 className='text-2xl font-bold text-gray-800 mb-4 mt-8 border-b border-gray-200 pb-2'>Education</h2>
        <EducationForm
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          major={major}
          setMajor={setMajor}
          graduationDate={graduationDate}
          setGraduationDate={setGraduationDate}
        />
      </div>
    </div>
      <div className='w-full'>
        <ResumePreview
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          address={address}
          setAddress={setAddress}
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          major={major}
          setMajor={setMajor}
          graduationDate={graduationDate}
          setGraduationDate={setGraduationDate}
        />
      </div>
    </div>
  )
}

export default App
