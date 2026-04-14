import React, { useState } from 'react';


const ControlField = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
        
        if (password.length < 6) {
            setError("password must be 6 characters or longer.")
        }
        else {
            setError("")
        }
    return ''
    }

    const handleEmailChange = e => {
        e.preventDefault()
        setEmail(e.target.value)
        
    }

    const handlePasswordOnChange = e => {
       
        setPassword(e.target.value)

        /*    if(password.length < 6){
               setError("password must be 6 characters or longer.")
           }
           else{
               setError("") 
           } */

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} 
                
                type="email" name="email" id="" placeholder='Email' required />
                <br />
                <input type="password" name="password" id="" onChange={handlePasswordOnChange} placeholder='password' required />
                <br />

                <input type="submit" value="Submit" />

            </form>
            <p style={{ color: "red" }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlField;