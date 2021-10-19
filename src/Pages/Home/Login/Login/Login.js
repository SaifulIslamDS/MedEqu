import React from 'react';
import './Login.css';
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();


const Login = () => {
    return (
        <div id="login-page" className="container mx-auto"> 
            <h2 className="text-2xl text-center">Login</h2>

            <div className="grid grid-cols-2 gap-40 text-justify">
                <div>
                    <button className="bg-gray-700 px-5 py-2 text-white">
                        Google Sign-in
                    </button>
                </div>
                <div>
                    <form id="login-form">
                        <label htmlFor="userName">Name: </label>
                        <input type="text" name="userName" id="userName" />
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" />
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;