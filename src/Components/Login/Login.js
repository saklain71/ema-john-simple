import React, { useState } from 'react';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,

    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, {replace : true});
       
    }
    console.log(user);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePassBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }
    return (
        <div className="form-container">
            <div>
                <form onSubmit={handleUserSignIn}  >
                    <h1 className="form-title">Login</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur}  type="email" name="email" id="" required />

                    </div>
                    <div className="input-group">
                        <label  htmlFor="password">Password</label>
                        <input onBlur={handlePassBlur}  type="password" name="password" id="" required />

                    </div>
                    <p style={{ color: "red" }}>{error?.message}</p>
                    {
                        loading && <p>Loading ...</p>
                    }
                    <input className="form-submit" type="submit" value="login" />

                </form>
                <p>
                    New to Ema-John? <Link className="form-link" to="/signup">Create An Account</Link>
                </p>


            </div>

        </div>
    );
};

export default Login;