import { useState } from 'react'
import GeneralInfo from './generalInfo'

import '../styles/App.css'

function App() {
  const[generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const handleGeneralInfo = (info) => {
    setGeneralInfo(info);
  }

  return(
    <div className = 'app'>
      <h1>CV Builder</h1>
      <GeneralInfo generalInfo = {generalInfo} onGeneralInfoChange = {handleGeneralInfo}/>
    </div>
  )
}

export default App
