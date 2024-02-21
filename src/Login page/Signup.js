import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../Services/UserService";

function Signup(){
    const navigate = useNavigate();
    const [userValue,setUserValue] = useState(
        {   firstname:"",
            lastname:"",
            username:"",
            emailid:"",
            password:"",
            phone:"",
        })

        const changeFirstName = (e) => {
            setUserValue({...userValue,firstname: e.target.value})
        }
        const changeLastName = (e) => {
            setUserValue({...userValue,lastname: e.target.value})
        }
        const changeUsername = (e) => {
            setUserValue({...userValue,username: e.target.value})
        }
        const changeEmail = (e) => {
            setUserValue({...userValue,emailid: e.target.value})
        }
        const changePassword = (e) => {
            setUserValue({...userValue,password: e.target.value})
        }
        const changePhone = (e) => {
            setUserValue({...userValue,phone: e.target.value})
        }

        const handleSignup = (e) => {
            e.preventDefault();

            UserService.createUser(userValue).then(res=>{
                navigate('/')
            })

        }

    return(
        <> 
            <div className="login-form">
                <h1>Sign Up</h1>
                <form onSubmit={handleSignup}>
                    <div className="input-container">
                        <div className='label'><label>First Name</label></div>
                        <input type="text" name="firstname" value={userValue.firstname} onChange={changeFirstName} />
                    </div>
                    <div className="input-container">
                        <div className='label'><label>Last Name</label></div>
                        <input type="text" name="lastname" value={userValue.lastname} onChange={changeLastName} />
                    </div>
                    <div className="input-container">
                        <div className='label'><label>UserName</label></div>
                        <input type="text" name="username" value={userValue.username} onChange={changeUsername} />
                    </div>
                    <div className="input-container">
                        <div className='label'><label>Email Id</label></div>
                        <input type="text" name="emailid" value={userValue.emailid} onChange={changeEmail} />
                    </div>
                    <div className="input-container">
                        <div className='label'><label>Password</label></div>
                        <input type="password" name="password" value={userValue.password} onChange={changePassword} />
                    </div>
                    <div className="input-container">
                        <div className='label'><label>Phone Number</label></div>
                        <input type="text" name="phone" value={userValue.phone} onChange={changePhone} />
                    </div>
                    <div className="button-container">
                        <button id="login">Sign Up</button>
                    </div>
                </form>
            <div className='signupbtn'>
                <p>Already have an account? <Link to='/login'>Go to Login</Link></p>
            </div>
            </div>
        </>
    );
}

export default Signup;