import { useState } from 'react';

export default function ExperienceItem(props) {
    const [experience, setExperience] = useState({
        companyName:'', 
        job:'', 
        startDate:'', 
        endDate:'',
        desc:''
    })

    const[added, setAdded] = useState(false)

    const handleCompany = (e => {
        setExperience({...experience, companyName:e.target.value})
    })

    const handleJob = (e => {
        setExperience({...experience, job:e.target.value})
    })

    const handleStartDate = (e => {
        setExperience({...experience, startDate:e.target.value})
    })

    const handleendDate = (e => {
        setExperience({...experience, endDate:e.target.value})
    })

    const handleDesc = (e => {
        setExperience({...experience, desc:e.target.value})
    })


    const handleAdd = (e => {
        e.preventDefault()
        setAdded(true)
        props.stateChanger([...props.state, {...experience, key:props.id}])
    })

    const handleDelete = (e => {
        e.preventDefault();
        props.stateChanger(props.state.filter(item => {
            if (item.key != experience.key)
                return item;
        }))
        props.setParentState(props.parentState.filter(item => {
            if(item.key != experience.key)
                return item;
        }))
    })

    

    if (!added) {
    return (
        <form className='job-item' action="">
            <label htmlFor="company-name"> Company </label>
            <input type="text" name="company-name" id="company-name" onChange={handleCompany} />

            <label htmlFor="job-title"> Job Title </label>
            <input type="text" name="job-title" id="job-title" onChange={handleJob} />

            <label htmlFor="start-date"> Start Date </label>
            <input type="text" name="start-date" id="start-date" onChange={handleStartDate} />

            <label htmlFor="end-date"> End Date </label>
            <input type="text" name="end-date" id="end-date" onChange={handleendDate} />

            <label htmlFor="job-description">Job Description</label>
            <input type="text" name="job-description" id="job-description" onChange={handleDesc}/>

            <button type="submit" onClick={handleAdd}>Add</button>
        </form>
    )
    } else {
        return (
            <div className='experience-item-added'>
                {experience.companyName}
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
    }

}