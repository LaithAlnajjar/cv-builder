import { useState } from 'react';
import SkillItem from './SkillItem.jsx';

export default function Skills(props) {

    const [skillList, setSkillList] = useState([])
    const [id, setID] = useState(1)

    const handleAddSkill = (e => {
        e.preventDefault()
        setID(id + 1)
        setSkillList([...skillList, 
        <SkillItem
            key={id}
            id={id}
            added={false}
            state={props.state}
            stateChanger={props.stateChanger}
        />
        ])
    })


    return (
    
        <div className='skills'>
            {skillList.map(skillItem => {
                return skillItem;
            })}
            <button className="add-experience-item" onClick={handleAddSkill}>
                Add
            </button>
        </div>
    )

}