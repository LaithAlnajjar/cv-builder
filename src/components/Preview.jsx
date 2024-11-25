import '../styles/Preview.css';

export default function Preview({ name, address, phoneNumber, email, education }) {
    
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

        </div>
    )

}