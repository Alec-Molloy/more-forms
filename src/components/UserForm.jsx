import React, { useState } from 'react'

const UserForm = (props) =>{

    const [formState, setFormState] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirm:""
    })
    

    const handleUser = (e) =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const firstValid = (firstName) => {
        if(firstName.length <= 5 && firstName.length !=0){
            return false;
        }
        return true;
    }

    const lastValid = (lastName) => {
        if(lastName.length <= 5 && lastName.length !=0){
            return false;
        }
        return true;
    }

    const emailValid = (email) => {
        if(email.length <= 2 && email.length !=0){
            return false;
        }
        return true;
    }

    const passwordValid = (password) => {
        if(password.length <= 8 && password.length !=0){
            return false;
        }
        return true;
    }

    const confirmValid = (confirm, password) => {
        if(confirm != password){
            return false;
        }
        return true;
    }

    return(
        <div>
            <form>
                <div>
                    <h1>User Form</h1>
                    <label>First Name:</label>
                    <input 
                        type="text"
                        name="firstName"
                        onChange={handleUser}
                        />
                        {!firstValid(formState.firstName) && <p>First Name must be 5 characters long</p>}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input 
                        type="text"
                        name="lastName"
                        onChange={handleUser}
                    />
                    {!lastValid(formState.lastName) && <p>Last Name must be 5 characters long</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="text"
                        name="email"
                        onChange={handleUser}
                    />
                    {!emailValid(formState.email) && <p>Email must be at least 2 characters long</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password"
                        name="password"
                        onChange={handleUser}
                    />
                    {!passwordValid(formState.password) && <p>Password must be at least 8 characters long</p>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input 
                        type="password"
                        name="confirm"
                        onChange={handleUser}
                    />
                    {confirmValid(formState.confirm) && <p>Passwords must match</p>}
                </div>
            </form>
            <div>
                <h1>Form Data</h1>
                <p>{formState.firstName}</p>
                <p>{formState.lastName}</p>
                <p>{formState.email}</p>
                <p>{formState.password}</p>
                <p>{formState.confirm}</p>
            </div>
        </div>
    )
}

export default UserForm;