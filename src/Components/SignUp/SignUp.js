import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    
    if(user){
        navigate("/shop");

    }

    const [error, setError] = useState('');

    const handlerEmailBlur = event=>{
        setEmail(event.target.value);
    }
    const handlerPassWordBlur = event=>{
        setPassword(event.target.value);
    }
    const handlerConPassWordBlur = event=>{
        setConfirmPassword(event.target.value);
    }
   
    const handleCreateUser = (event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("password didn't match");
            return;
        }
        if(password.length < 6){
            setError("password must be 6 character");
        }
        createUserWithEmailAndPassword(email, password);
        
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
 

    return (
    
            <div className="form-container">
                <div>
                    <form onSubmit={handleCreateUser} >
                        <h1 className="form-title">SignUp</h1>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handlerEmailBlur} type="email" name="email" id=""  required/>

                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlerPassWordBlur} type="password" name="password" id="" required/>

                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input onBlur={handlerConPassWordBlur} type="password" name="password" id=""  required/>

                        </div>
                        <h3 style={{color:"red"}}>{error}</h3>
                        <input  className="form-submit" type="submit" value="signup" />

                    </form>
                    <p>
                        Already Have an Account? <Link className="form-link" to="/login">login</Link>
                    </p>
                  

                </div>

            </div>
        );
    };


export default SignUp;