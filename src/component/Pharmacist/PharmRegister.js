import React, { useState } from "react";
import './login.css';
import { child, get, ref, set } from "firebase/database";
import { db,auth } from "../Firebase/firebase";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth"

export class PharmRegister extends React.Component {
    constructor(props){
        super(props);
        this.state={
            db:'',
            name:'',
            phone:'',
            pass:'',
            email:''
        }
        this.interface=this.interface.bind(this);
    }
    componentDidMount(){
        this.setState({
            db: db
        });
    }
    signUp(){
        //e.preventDefault();
        createUserWithEmailAndPassword(auth,this.state.email,this.state.pass)
        .then((userCredential)=>{
            console.log(userCredential)
            nav
        }).catch((error)=>{
            console.log(error);
        })
    }
    render(){
        return (
            <div className="auth-form-container1">
                <h2>Register</h2>
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" placeholder="Full Name" value={this.state.name} onChange={e=>{this.setState({name:e.target.value});}}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="youremail@gmail.com" value={this.state.email} onChange={e=>{this.setState({email:e.target.value});}}/>
                <label htmlFor="email">Phone Number</label>
                <input type="phone" id="phone" placeholder="+91xxxxxxxxxx" value={this.state.phone} onChange={e=>{this.setState({phone:e.target.value});}}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="pass" placeholder="********" value={this.state.pass} onChange={e=>{this.setState({pass:e.target.value});}}/>
                <button id="addBtn" onClick={this.interface}>Add Data</button>
                <button className="link-btn1">
                <Link to={`/pharmacist/login/`}>
                    Already have an account?Login
                </Link></button>
        </div>
        )
    }
    interface(event){
        const id=event.target.id;

        if(id==='addBtn'){
            this.insertData();
            this.signUp();
        }else if(id==='selectBtn'){
            this.selectData();
        }
    }
    getAllInputs(){
        return{
            email:this.state.email,
            name:this.state.name,
            phone:Number(this.state.phone),
            pass:this.state.pass
        }
    }
    insertData(){
        const db=this.state.db;
        const data=this.getAllInputs();

        set(ref(db,'Pharmacist/'),
        {
            FullName:data.name,
            PhoneNumber:data.phone,
            Email:data.email,
            Password:data.pass
        })
        .then
        (()=>{alert("Data added successfully!")})
        .catch((error)=>{alert("There was an error: "+error)})
        ;
    }
    
}

