
import '../styles/Card.css'

export default function PersonalInfo(props) {
    
    const handleName = (e => {
        props.stateChanger({...props.state, name:e.target.value})
    });

    const handleAddress = (e => {
        props.stateChanger({...props.state, address:e.target.value})
    });

    const handlePhoneNumber = (e => {
        props.stateChanger({...props.state, phoneNumber:e.target.value})
    });

    const handleEmail = (e => {
        props.stateChanger({...props.state, email:e.target.value})
    });

    return (
        
            <form action="" className="personal-info">
            <div className="form-group">
                <label htmlFor="name"> Name </label>
                <input 
                type='text' 
                id="name" 
                name="name"
                onChange={handleName}
                />
            </div>

            <div className="form-group">
                <label htmlFor="address"> Address </label>
                <input 
                type='text' 
                id="address" 
                name="address"
                onChange={handleAddress}
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone-no"> Phone Number </label>
                <input 
                type='tel' 
                id="phone-no" 
                name="phone-no"
                onChange={handlePhoneNumber}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email"> Email </label>
                <input 
                type='email' 
                id="email" 
                name="email"
                onChange={handleEmail}
                />
            </div>
                
            </form>
    )
}