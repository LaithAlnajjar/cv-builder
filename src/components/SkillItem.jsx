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

    const handleDelete = (e => {
        e.preventDefault();
        props.stateChanger(props.state.filter(item => {
            if (item.key != skill.key)
                return item;
        }))
        props.setParentState(props.parentState.filter(item => {
            if(item.key != skill.key)
                return item;
        }))
    })

    const handleEdit = (e => {
        e.preventDefault();
        setAdded(false);
    })
    

    if (!added) {
    return (
        <form className='skill-item' action="">
            <label htmlFor="skill-title"> </label>
            <input type="text" name="skill-title" id="skill-title"  placeholder='Skills Title Section' value={skill.title} onChange={handleTitle} />

            <label htmlFor="skill-list"></label>
            <input type="text" name="skill-list" id="skill-list" value={skill.skillList} placeholder='Skill List' onChange={handleSkillList} />

            <div className="confirm-container">
                <button className='confirm' type="submit" onClick={handleAdd}>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                    Confirm
                </button>
            </div>

        </form>
    )
    } else {
        return (
            <div className='item-added'>
                <div className="added-item-text">{skill.title}</div>
                <div className="item-button-container">
                    <svg className='delete' xmlns="http://www.w3.org/2000/svg" onClick={handleDelete} viewBox="0 -960 960 960"  fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    <svg className='edit' xmlns="http://www.w3.org/2000/svg" onClick={handleEdit} viewBox="0 -960 960 960" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                </div>
            </div>
        )
    }

}