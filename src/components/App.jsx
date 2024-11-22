import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Preview from './Preview';
import '../styles/App.css';

function App() {

  const [personal, setPersonal] = useState({name:'Laith Alnajjar', address:'Amman, Jordan', phoneNumber:'0994124912', email:'laithalnajjar2004@gmail.com'})


  return (
    <>
      <PersonalInfo
        stateChanger = {setPersonal}
        state = {personal}
      />
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
