import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import userService from '../Services/UserService';

function LoginBody() {
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    const [users,setUsers] = useState([]);

    const errors = {
        username: "Username does not exist",
        password: "Invalid password",
    };
    
    userService.getUsers().then(res => {
        setUsers(res.data)
    }) 

    const handleSubmit = (event) => {
        event.preventDefault();
        var { username, password } = document.forms[0];

        const userData = users.find((user) => user.username === username.value);

        localStorage.setItem("loguser", JSON.stringify(userData));

        userData ? ((userData.password !== password.value) ?
            (setError({ name: "password", message: errors.password })) :
            ((setIsLoggedIn(true)))) :
            (setError({ name: "username", message: errors.username }))
    };


    const renderErrorMessage = (name) =>
        name === error.name && (
            <div className="error">{error.message}</div>
        );



    const renderForm = (
        <>
        <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <div className='label'><label>Username</label></div>
                    <input type="text" name="username" />
                    {renderErrorMessage("username")}
                </div>
                <div className="input-container">
                    <div className='label'><label>Password</label></div>
                    <input type="password" name="password" />
                    {renderErrorMessage("password")}
                </div>
                <div className="button-container">
                    <button id="login">Login</button>
                </div>
            </form>
            <div className='signupbtn'>
                <p>Don't have an accout? <Link to='/signup'>Create an account</Link></p>
            </div>
        </div>
        </>
    );
    if (IsLoggedIn) {
        localStorage.setItem('login', 'loggedin');
    }

    return (
        <>
            {IsLoggedIn ? navigate(-1) : renderForm}
        </>
    );



}

export default LoginBody;