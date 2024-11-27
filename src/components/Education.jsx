import EducationItem from './EducationItem';
import { useState } from 'react';

export default function Education(props) {
    
    const [educationList, setEducationList] = useState([]) 
    const [id, setID] = useState(1)

 
    const handleAddEducation = ((e) => {
        e.preventDefault()
        setID(id + 1)
        setEducationList([...educationList, 
        <EducationItem
            key={id}
            id={id}
            added={false}
            parentState={educationList}
            setParentState={setEducationList}
            state={props.state}
            stateChanger={props.stateChanger}
        />
        ])
    })

    return (
        
        <div className="education">
            {educationList.map(educationItem => {
                return educationItem
            })}
            <button className="add-education-item" onClick={handleAddEducation}>
                Add
            </button>
        </div>
    
    )
}

