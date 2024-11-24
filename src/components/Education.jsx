import EducationItem from './EducationItem';
import { useState } from 'react';

export default function Education() {

    const [educationList, setEducationList] = useState ([
        <EducationItem
            key = {0}
        />
    ])

    const[id, setID] = useState(1)


    const handleAddEduation = ((e) => {
        e.preventDefault()
        setID(id + 1)
        setEducationList([...educationList, 
        <EducationItem
        key={id}
        added={false}
        />
        ])
    })

    return (
        
        <div className="education">
            {educationList.map(educationItem => {
                return educationItem
            })}
            <button className="add-education-item" onClick={handleAddEduation}>
                Add
            </button>
        </div>
    
    )
}

