import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Preview from './Preview';
import '../styles/App.css';
import Experience from './Experience';
import Skills from './Skills.jsx';

function App() {

  const [personal, setPersonal] = useState({})
  const [education, setEducation] = useState ([
  ])
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  return (
    <>
      <div className="form-section">
        <div className="card">
          <div className="card-title">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            <div className="card-title-text">
            Personal Information
            </div>
          </div>
          <PersonalInfo
            stateChanger = {setPersonal}
            state = {personal}
          />
        </div>
        <div className="card">
          <div className="card-title">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>            
              <div className="card-title-text">
                Education
              </div>
          </div>
          <Education
            state={education}
            stateChanger={setEducation}
          />
        </div>
        <div className="card">
        <div className="card-title">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg>              <div className="card-title-text">
                Experience
              </div>
          </div>
          <Experience
            state={experience}
            stateChanger={setExperience}
          />
        </div>
        <div className="card">
        <div className="card-title">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-54 80h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm40-100q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460Z"/></svg> 
            <div className='card-title-text'>
                           Skills
              </div>
          </div>
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
