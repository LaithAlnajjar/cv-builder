import '../styles/Preview.css';

export default function Preview({ name, address, phoneNumber, email, education, experience }) {
    
    return (
        <div className="preview">

            <div className="personal-information">
                <h1 className="name">{name}</h1>
                <h2 className="address">{address}</h2>
                <h2 className="phoneNumber">{phoneNumber}</h2>
                <h2 className="email">{email}</h2>
            </div>

            <div className="education">
                {education.map(item => {
                   return (<div className="education-item" key={item.key}>
                        <div> {item.school} </div>
                        <div> {item.startDate} </div>
                        <div> {item.graduationDate} </div>
                        <div> {item.degree}</div>
                    </div>)
                } )}
            </div>

            <div className="experience">
                {experience.map(item => {
                   return (<div className="experience-item" key={item.key}>
                        <div> {item.companyName} </div>
                        <div> {item.job} </div>
                        <div> {item.startDate} </div>
                        <div> {item.endDate} </div>
                        <div> {item.desc}</div>
                    </div>)
                } )}
            </div>

        </div>
    )

}