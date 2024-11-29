import '../styles/Preview.css';

export default function Preview({ name, address, phoneNumber, email, education, experience, skills }) {
    
    return (
        <div className="preview-container">

            <div className="cv-personal-information">
                <h1 className="name">{name}</h1>
                <div className="sub-heading">
                    <h2 className="address">{address}</h2>
                    <div className='dot'>.</div>
                    <h2 className="phoneNumber">{phoneNumber}</h2>
                    <div className='dot'>.</div>
                    <h2 className="email">{email}</h2>
                </div>
            </div>

            <div className="education">
                <span className="section-title">Education</span>
                <hr/>
                {education.map(item => {
                   return (<div className="education-item" key={item.key}>
                        <div className="education-nd">
                            <div className='school-name'> {item.school} </div>
                            <div className="education-date">
                                <div> {item.startDate} </div>
                                -
                                <div> {item.graduationDate} </div>
                            </div>
                        </div>
                        <div className='degree'> {item.degree}</div>
                    </div>)
                } )}
            </div>

            <div className="experience">
                <div className="section-title">Experience</div>
                <hr/>
                {experience.map(item => {
                   return (<div className="experience-item" key={item.key}>
                        <div className="job-section">
                            <div className='job-title'> {item.job} </div>
                            <div className="job-date">
                                <div> {item.startDate} </div>
                                -
                                <div> {item.endDate} </div>
                            </div>
                        </div>
                        <div className='company-name'> {item.companyName} </div>
                        <div> {item.desc}</div>
                    </div>)
                } )}
            </div>

            <div className="skills">
                <div className="section-title">Skills</div>
                <hr/>
                {skills.map(item => {
                   return (<div className="skills-item" key={item.key}>
                        <div className='skill-title'> {item.title}: </div>
                        <div> {item.skillList} </div>
                    </div>)
                } )}
            </div>

        </div>
    )

}