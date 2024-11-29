import ExperienceItem from './ExperienceItem';
import { useState } from 'react';

export default function Experience(props) {
    
    const [experienceList, setExperienceList] = useState([]) 
    const [id, setID] = useState(1)

 
    const handleAddExperience = ((e) => {
        e.preventDefault()
        setID(id + 1)
        setExperienceList([...experienceList, 
        <ExperienceItem
            key={id}
            id={id}
            added={false}
            parentState={experienceList}
            setParentState={setExperienceList}
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
            <div className="add-button-container">
                <button className="add-item" onClick={handleAddExperience}>
                    Add Experience
                </button>
            </div>
        </div>
    
    )
}

