import React, { useContext, useState } from "react";
import "./Docter.css"
import { child, get, ref, set } from "firebase/database";
import { db } from "../Firebase/firebase";
import { TaskContractAddress } from '../../config';
import { ethers } from "ethers";
import TaskAbi from "../utils/TaskContract.json"
import { LoginInfoContext } from "../LoginContext/DataContext";

export const AddPatientByDoctor = () => {
    const {CurrentAccount}  = useContext(LoginInfoContext)
    const [Sucess,setSuccess] = useState(false)
    const [dbs,setdbs] = useState('');
    const [pub_key,setpub_key] = useState('')
    const[name,setname] = useState('')
    const [phone,setphone] = useState('')
    const [pass,setpass] = useState('')
    const [email,setEmail] = useState('')
    const [data1,setdata1] = useState()
    // AddPatient(address patient,string memory name)

    const AddDocterBypatient = async (name,address) => {
        try {
            const { ethereum } = window
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const TaskContract = new ethers.Contract(
                    TaskContractAddress,
                    TaskAbi.abi,
                    signer
                )
                const data = await TaskContract.AddPatient(address,name)
                setdata1(data)
            } else {
                return 0
            }
        } catch (error) {
            console.log(error)
            return 1
        }
        return 2
    }
    if(Sucess === 0){
        return <div class="alert alert-danger" role="alert">
            Please Install Ethereum
        </div>
    }
    if(Sucess === 1 ){
        return ( <div class="alert alert-danger" role="alert">
        Only Docter Has Can Add the Patients 
    </div>
    )
}
    console.log(data1)
    console.log(CurrentAccount)
    const getAllInputs =() =>{
        return{
            pub_key:pub_key,
            email:email,
            name:name,
            phone:Number(phone),
            pass:pass
        }
    }
        const insertData = async () =>{

        const data= getAllInputs();
        const dd1 = await  AddDocterBypatient(data.name,CurrentAccount)
        setSuccess(dd1)
        if(dd1 !== 1){
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
        }
    }

        return (
            <div className="auth-form-container1">
                <h2>Add Patient</h2>
                <div className="register-form1">
                    <label>Enter Public Key</label>
                    <input type="text" id="pub_key" value={pub_key} onChange={e=>{setpub_key(e.target.value)}}/>
                    <label>Enter Email Address</label>
                    <input type="email" id="email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                    <label>Enter Full Name</label>
                    <input type="text" id="name" value={name} onChange={e=>{setname(e.target.value);}}/>
                    <label>Enter Phone Number</label>
                    <input type="phone" id="phone" value={phone} onChange={e=>{setphone(e.target.value);}}/>
                    <label>Enter Password</label>
                    <input type="password" id="pass" value={pass} onChange={e=>{setpass(e.target.value);}}/>
                    <button id="addBtn" onClick={insertData}>Add Data</button>
                </div>
            </div>
        )
    }