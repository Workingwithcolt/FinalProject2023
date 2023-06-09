import React, { useState } from "react";
import './docter.css';
import { child, get, ref, set } from "firebase/database";
import { Link } from "react-router-dom";
import { db } from "../Firebase/firebase";

export class AddPatientByDoctor extends React.Component {
    constructor(props){
        super(props);
        this.state={
            db:'',
            pub_key:'',
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
    render(){
        return (
            <div className="auth-form-container1">
                <h2>Add Patient</h2>
                <div className="register-form1">
                    <label>Enter Public Key</label>
                    <input type="text" id="pub_key" value={this.state.pub_key} onChange={e=>{this.setState({pub_key:e.target.value});}}/>
                    <label>Enter Email Address</label>
                    <input type="email" id="email" value={this.state.email} onChange={e=>{this.setState({email:e.target.value});}}/>
                    <label>Enter Full Name</label>
                    <input type="text" id="name" value={this.state.name} onChange={e=>{this.setState({name:e.target.value});}}/>
                    <label>Enter Phone Number</label>
                    <input type="phone" id="phone" value={this.state.phone} onChange={e=>{this.setState({phone:e.target.value});}}/>
                    <label>Enter Password</label>
                    <input type="password" id="pass" value={this.state.pass} onChange={e=>{this.setState({pass:e.target.value});}}/>
                    <button id="addBtn" onClick={this.interface}>Add Data</button>
                </div>
            </div>
        )
    }
    interface(event){
        const id=event.target.id;
        if(id==='addBtn'){
            this.insertData();
        }else if(id==='selectBtn'){
            this.selectData();
        }
    }
    getAllInputs(){
        return{
            pub_key:this.state.pub_key,
            email:this.state.email,
            name:this.state.name,
            phone:Number(this.state.phone),
            pass:this.state.pass
        }
    }
    insertData(){
        const db=this.state.db;
        const data=this.getAllInputs();

        set(ref(db,'Doctor/Patient/'+data.phone),
        {
            FullName:data.name,
            PubKey:data.pub_key,
            Email:data.email,
            Password:data.pass
        })
        .then
        (()=>{alert("Data added successfully!");})
        .catch((error)=>{alert("There was an error: "+error)})
        ;
    }
}

