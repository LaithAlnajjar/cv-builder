import { useState } from 'react';

export default function EducationItem(props) {
    const [education, setEducation] = useState({
        collegeName:'', 
        startDate:'', 
        graduationDate:'', 
        degree:''
    })

    const[added, setAdded] = useState(false)

    const handleName = (e => {
        setEducation({...education, school:e.target.value})
    })

    const handleStartDate = (e => {
        setEducation({...education, startDate:e.target.value})
    })

    const handleGraduationDate = (e => {
        setEducation({...education, graduationDate:e.target.value})
    })

    const handleDegree = (e => {
        setEducation({...education, degree:e.target.value})
    })

    const handleAdd = (e => {
        e.preventDefault()
        setAdded(true)
        props.stateChanger([...props.state, {...education, key:props.id}])
    })

    const handleDelete = (e => {
        e.preventDefault();
        props.stateChanger(props.state.filter(item => {
            if (item.key != education.key)
                return item;
        }))
        props.setParentState(props.parentState.filter(item => {
            if(item.key != education.key)
                return item;
        }))
    })
    

    if (!added) {
    return (
        <form className='education-item' action="post">
            <label htmlFor="school-name"> School Name </label>
            <input type="text" name="school-name" id="school-name" onChange={handleName} />

            <label htmlFor="start-date"> Start Date </label>
            <input type="text" name="start-date" id="start-date" onChange={handleStartDate} />

            <label htmlFor="graduation-date"> Graduation Date </label>
            <input type="text" name="graduation-date" id="graduation-date" onChange={handleGraduationDate} />

            <label htmlFor="degree"> Degree </label>
            <input type="text" name="degree" id="degree" onChange={handleDegree} />

            <button type="submit" onClick={handleAdd}>Add</button>
        </form>
    )
    } else {
        return (
            <div className='education-item-added'>
                {education.school}
                <button onClick={handleDelete}>
                    Delete
                </button>
            </div>
        )
    }

}