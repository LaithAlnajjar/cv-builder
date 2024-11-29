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
        
        <div className="education-form">
            {educationList.map(educationItem => {
                return educationItem
            })}
            <div className="add-button-container">
                <button className="add-item" onClick={handleAddEducation}>
                    Add Edducation
                </button>
            </div>
        </div>
    
    )
}

