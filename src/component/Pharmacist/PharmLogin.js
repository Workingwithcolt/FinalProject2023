import React, { useState } from "react";
import './login.css';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";

export const PharmLogin = ({name}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential.user)
            navigate(`/${name}/patotp/`)
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    function handleClick(){
        navigate("/pharmacist/signup/")
    }

    return (
        <div className="auth-form-container1">
            <h2>Pharmacist</h2>
            <form className="login-form1" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button >Log In</button>
            </form>
            <button className="link-btn1" onClick={handleClick}>Don't have an account? Register here.</button>
        </div>
    )
}

