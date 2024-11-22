import '../styles/Preview.css';

export default function Preview({ name, address, phoneNumber, email }) {
    

    return (
        <div className="preview">

            <h1 className="name">{name}</h1>
            <h2 className="address">{address}</h2>
            <h2 className="phoneNumber">{phoneNumber}</h2>
            <h2 className="email">{email}</h2>

        </div>
    )

}