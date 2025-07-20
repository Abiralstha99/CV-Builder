import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfoForm'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'
import ResumePreview from './components/ResumePreview'

function App() {
  // App.jsx will own the state and then will pass props to the components
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [linkedin, setLinkedin] = useState('')

  // Education as an array of objects
  const [educationEntries, setEducationEntries] = useState([
    { id: 1, schoolName: '', major: '', graduationDate: '' }
  ]);

  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [details, setDetails] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Helper functions for education management
  const addEducationEntry = () => {
    const newEntry = {
      id: Date.now(),
      schoolName: '',
      major: '',
      graduationDate: ''
    };
    setEducationEntries([...educationEntries, newEntry]);
  };

  const updateEducationEntry = (id, field, value) => {
    const updatedEntries = [];
    for (let i = 0; i < educationEntries.length; i++) {
      const entry = educationEntries[i];
      if (entry.id === id) {
        // - `field` is the key (the property name like 'schoolName', 'major', or 'graduationDate')
        // - `value` is the value being assigned to that property
        const updatedEntry = { ...entry };
        updatedEntry[field] = value;
        updatedEntries.push(updatedEntry)
      }
      else {
        // keep it unchanged so that we can directly pass the array at once and use useState 
        updatedEntries.push(entry)
      }
    }
    setEducationEntries(updatedEntries);
  };

  const removeEducationEntry = (id) => {
    if (educationEntries.length > 1) {
      setEducationEntries(educationEntries.filter(entry => entry.id !== id));
    }
  };

  console.log(name, email, address)
  console.log('Education:', educationEntries)

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
          linkedin={linkedin}
          setLinkedin={setLinkedin}
        />

        <h2 className='text-2xl font-bold text-gray-800 mb-4 mt-8 border-b border-gray-200 pb-2'>Education</h2>
        <EducationForm
          educationEntries={educationEntries}
          addEducationEntry={addEducationEntry}
          updateEducationEntry={updateEducationEntry}
          removeEducationEntry={removeEducationEntry}
        />

        <h2 className='text-2xl font-bold text-gray-800 mb-4 mt-8 border-b border-gray-200 pb-2'>Experience</h2>
        <ExperienceForm
          companyName={companyName}
          setCompanyName={setCompanyName}
          positionTitle={positionTitle}
          setPositionTitle={setPositionTitle}
          details={details}
          setDetails={setDetails}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
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
          linkedin={linkedin}
          setLinkedin={setLinkedin}
          educationEntries={educationEntries}
          companyName={companyName}
          setCompanyName={setCompanyName}
          positionTitle={positionTitle}
          setPositionTitle={setPositionTitle}
          details={details}
          setDetails={setDetails}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </div>
    </div>
  )
}

export default App
