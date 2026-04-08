import React, { useState } from 'react';


const ControlField = () => {
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" placeholder='Email' required />
                <br />
                <input type="password" name="password" id="" onChange={handlePasswordOnChange} defaultValue={password}  placeholder='password' required/>
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default ControlField;