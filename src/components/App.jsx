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
  const [education, setEducation] = useState ([
    {
      school:'The Hashemite University',
      startDate:'26/10/2022',
      graduationDate:'9/5/2026',
      degree:'Bachelors of Computer Science',
      key:0
    },
    {
      school:'The Hashemite University',
      startDate:'26/10/2022',
      graduationDate:'9/5/2026',
      degree:'Bachelors of Computer Science',
      key:0
    }
  ])
  const [experience, setExperience] = useState([
    {
      companyName:' Tech Innovators Inc.',
      job:'Software Develoepr',
      startDate:'January 2022',
      endDate:'October 2024',
      desc:`Designed and implemented scalable web applications, improving user engagement by 25%. \n
            Collaborated with cross-functional teams to deliver projects on time and within budget. \n
            Optimized backend APIs, reducing response times by 40%. \n
            Mentored junior developers and conducted code reviews to ensure high-quality standards. \n
            Led the integration of modern frameworks, enhancing overall system performance.`

    },
    {
      job: "Project Manager",
      companyName: "Visionary Solutions Ltd.",
      startDate: "March 2020",
      endDate: "August 2023",
      desc: [
        "Led a team of 10 in delivering software solutions, achieving a 95% client satisfaction rate.",
        "Managed project timelines, budgets, and resources, ensuring on-time and within-budget delivery.",
        "Implemented Agile methodologies to improve team collaboration and productivity by 30%.",
        "Coordinated with stakeholders to define project requirements and deliverables.",
        "Developed detailed project documentation and presented progress reports to senior management.",
      ],
      key:-1
    }
  ])
  const [skills, setSkills] = useState([
    {
      title:'Technical',
      skillList:'Python, Javascript, Databases'
    }
  ])

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
