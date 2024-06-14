import { useState } from 'react'
import GeneralInfo from './generalInfo'
import Education from './education'

import '../styles/App.css'

function App() {
  //General Info
  const[generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const handleGeneralInfo = (info) => {
    setGeneralInfo(info);
  }
  //Experience
  const[experience, setExperience] = useState({
    title: "",
    schoolName : "",
    studyDate : ""
  })
  const handleExperienceChange = (info) => {
    setExperience(info);
  }
  return(
    <div className = 'app'>
      <h1>CV Builder</h1>
      <GeneralInfo generalInfo = {generalInfo} onGeneralInfoChange = {handleGeneralInfo}/>
      <Education experience = {experience} onExperienceChange = {handleExperienceChange}/>
    </div>
  )
}

export default App
