import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Preview from './Preview';
import '../styles/App.css';
import Experience from './Experience';
import Skills from './Skills.jsx';

function App() {

  const [personal, setPersonal] = useState({
    name:'Laith Alnajjar', 
    address:'Amman, Jordan',
    phoneNumber:'0994124912', 
    email:'laithalnajjar2004@gmail.com'
  })
  const [education, setEducation] = useState ([])
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

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
        <div className="card">
          <Skills
            state={skills}
            stateChanger={setSkills}
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
        skills={skills}
      />
    </>
  )
}

export default App
