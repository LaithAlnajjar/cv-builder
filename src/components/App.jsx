import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education'
import Preview from './Preview';
import '../styles/App.css';

function App() {

  const [personal, setPersonal] = useState({name:'Laith Alnajjar', address:'Amman, Jordan', phoneNumber:'0994124912', email:'laithalnajjar2004@gmail.com'})


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
          <Education/>
        </div>
      </div>
      <Preview
        name={personal.name}
        address={personal.address}
        phoneNumber={personal.phoneNumber}
        email={personal.email}
      
      />
    </>
  )
}

export default App
