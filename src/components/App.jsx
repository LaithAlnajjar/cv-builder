import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Preview from './Preview';
import '../styles/App.css';
import Experience from './Experience';

function App() {

  const [personal, setPersonal] = useState({
    name:'Laith Alnajjar', 
    address:'Amman, Jordan',
    phoneNumber:'0994124912', 
    email:'laithalnajjar2004@gmail.com'
  })
  const [education, setEducation] = useState ([{
    school:'The Hashemite University', 
    startDate:'October 2022', 
    graduationDate:'May 2026', 
    degree:'Bachelor of Computer Science',
    key:0
  }])
  const [experience, setExperience] = useState([{
    companyName:'Google',
    job:'Software Engineer',
    startDate:'October 2022', 
    endDate:'May 2026', 
    desc:'Made Websites',
    key:0
  }])

  return (
    <>
      <div className="form-section">
        <div className="card">
          <PersonalInfo
            stateChanger = {setPersonal}
            state = {personal}
          />
        </div>
        <div className="card">
          <Education
            state={education}
            stateChanger={setEducation}
          />
        </div>
        <div className="card">
          <Experience
            state={experience}
            stateChanger={setExperience}
          />
        </div>
      </div>
      <Preview
        name={personal.name}
        address={personal.address}
        phoneNumber={personal.phoneNumber}
        email={personal.email}
        education={education}
        experience={experience}
      
      />
    </>
  )
}

export default App
