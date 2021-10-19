import React from 'react';
import './Login.css';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile  } from "firebase/auth";

import { useState } from 'react';

// initialize authentication 
initializeAuthentication();
// declare google provider 
const googleProvider = new GoogleAuthProvider();

const Login = () => {
    // User state for google and github auth
    const [user , setUser] = useState({});
    // Set user name state 
    const [userName, setUserName] = useState('');
    // User email state
    const [userEmail, setUserEmail] = useState('');
    // Password state
    const [password, setPassword] = useState('');
    // Error state 
    const [error, setError] = useState('');
    // Checkbox toggle state
    const [isLogIn, setIsLogIn] = useState(false);

    
    // Declare auth 
    const auth = getAuth();
      // google signin button handler
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
        // const user = result.user;
        const {displayName, email, photoURL} = result.user;
        const loggedInUser = {
            uName : displayName,
            uEmail : email,
            uImage : photoURL
        };
        setUser(loggedInUser);
        })
        .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
        })
    };

      // sign out handler 
    const handleSignOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        setUser({});
        }).catch((error) => {
        // An error happened.
        });
    };

       // Handle registration 
   const handleRegistration = e => {
        e.preventDefault();
        console.log(userEmail, password);
        if (password.length < 6) {
            setError('The password should be at least 6 characters long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        if (isLogIn) {
            processLogin(userEmail, password);
        } else {
            registerNewUser(userEmail, password);
        } 
    };

     // Process login
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    };

      // Register new user 
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, userEmail, password)
        .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setDisplayName();
        })
        .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage);
        });
    };

      // Set User Name 
    const setDisplayName = () => {
        updateProfile(auth.currentUser, {
        displayName: userName
        })
        .then(result => {});
    };
    // Email verification 
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => { })
    };

    // Handle reset password 
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, userEmail)
        .then(result => { })
    };
    // Handle Name Change 
    const handleNameChange = e => {
        setUserName(e.target.value)
    }
    // Handle Email Change 
    const handleEmailChange = e => {
        setUserEmail(e.target.value);
    }
    // Handle Password Change 
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const toggleLogin = e => {
        setIsLogIn(e.target.checked);
    }

    return (
        <div id="login-page" className="container mx-auto"> 
            <h2 className="text-5xl text-center m-10">
                {isLogIn ? 'Login' : 'Registration'} Page
            </h2>

            <div className="grid grid-cols-2 gap-40 text-justify">
                <div>
                    { 
                        !user.uName ? (
                            <button onClick={handleGoogleSignIn} className="bg-gray-700 px-5 py-2 text-white">
                                Google Sign-in
                            </button>

                        ) : (
                            <button onClick={handleSignOut} className="bg-gray-700 px-5 py-2 text-white">
                                Sign-out
                            </button>
                        )
                    }
                    <br />
                    <br />
                    <hr />

                    {
                        user.uEmail && <div>
                            <img src={user.uImage} alt="" />
                            <h2>Welcome {user.uName}</h2>
                            <p>Your email address : {user.uEmail}</p>
                        </div>
                    }

                </div>
                <div>

                    <form onSubmit={handleRegistration} id="login-form">

                        <h2 className="text-4xl pb-10">Please {isLogIn ? 'Login' : 'Register'}</h2>

                        { !isLogIn && ( 
                            <div>
                                <label htmlFor="userName">Name: </label>
                                <input onBlur={handleNameChange} type="text" name="userName" id="userName" className="mb-4" />
                            </div>
                            )                     
                        }
                        
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input onBlur={handleEmailChange} type="email" name="email" id="email" required />
                        </div>

                        <div>
                            <label htmlFor="password">Password: </label>
                            <input nBlur={handlePasswordChange} type="password" name="password" id="password" className="mb-4" required />
                        </div>

                        <div>
                            <button type="submit" className="bg-gray-700 px-5 py-2 text-white">
                            {isLogIn ? 'Login' : 'Register'}
                            </button>
                        </div>
                        
                        <br />

                        <div className="text-left">
                            <input onChange={toggleLogin} type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">
                                    Already Registered?
                            </label>
                        </div>

                        <div className="error-message">
                            <p>{error}</p>
                        </div>

                        <button type="submit" className="bg-gray-700 px-5 py-2 text-white">
                            Login
                        </button>

                        <button onClick={handleResetPassword} type="button" className="bg-gray-700 ml-4 px-5 py-2 text-white">
                            Reset Password
                        </button>

                    </form>

                </div>
            </div>

        </div>
    );
};

export default Login;