import { useState } from 'react';

export default function SkillItem(props) {
    const [skill, setSkill] = useState({
        title:'', 
        skillList:''
    })

    const[added, setAdded] = useState(false)

    const handleTitle = (e => {
        setSkill({...skill, title:e.target.value})
    })

    const handleSkillList = (e => {
        setSkill({...skill, skillList:e.target.value})
    })

    const handleAdd = (e => {
        e.preventDefault()
        setAdded(true)
        props.stateChanger([...props.state, {...skill, key:props.id}])
    })

    

    if (!added) {
    return (
        <form className='skill-item' action="">
            <label htmlFor="skill-title"> Skills Section Title </label>
            <input type="text" name="skill-title" id="skill-title" onChange={handleTitle} />

            <label htmlFor="skill-list"> Skill List </label>
            <input type="text" name="skill-list" id="skill-list" onChange={handleSkillList} />

            <button type="submit" onClick={handleAdd}>Add</button>
        </form>
    )
    } else {
        return (
            <div className='experience-item-added'>
                {skill.title}
            </div>
        )
    }

}