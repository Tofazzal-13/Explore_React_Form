import React from 'react';
import useInputFeild from '../../Hooks/UseInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputFeild('')
    const [email, emailOnChange] = useInputFeild('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='name'
                    defaultValue={name}
                    type="text"
                    onChange={nameOnChange} />

                <br />
                <input
                    placeholder=''
                    type="email"
                    onChange={emailOnChange}
                    name=""
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;