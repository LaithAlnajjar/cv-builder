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
            parentState={skillList}
            setParentState={setSkillList}
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
            <div className="add-button-container">
                <button className="add-item" onClick={handleAddSkill}>
                    Add Skill
                </button>
            </div>
        </div>
    )

}