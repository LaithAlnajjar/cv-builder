import ExperienceItem from './ExperienceItem';
import { useState } from 'react';

export default function Experience(props) {
    
    const [experienceList, setExperienceList] = useState([]) 
    const [id, setID] = useState(1)

 
    const handleAddEducation = ((e) => {
        e.preventDefault()
        setID(id + 1)
        setExperienceList([...experienceList, 
        <ExperienceItem
            key={id}
            id={id}
            added={false}
            state={props.state}
            stateChanger={props.stateChanger}
        />
        ])
    })

    return (
        
        <div className="experience">
            {experienceList.map(educationItem => {
                return educationItem
            })}
            <button className="add-experience-item" onClick={handleAddEducation}>
                Add
            </button>
        </div>
    
    )
}

