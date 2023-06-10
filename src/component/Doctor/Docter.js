import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './docter.css'
import { useState } from 'react';
// export const otp_number = uuidv4();
import { Alert } from 'react-bootstrap';
import {Patient_detail} from "../patient_detail/Patient_detail"
import { LoginInfoContext } from '../LoginContext/DataContext';
import { useContext } from 'react';
import { logout } from '../ContractMethod';
import Logout from '../Logout/logout';
import { db } from '../Firebase/firebase';
import { onValue, ref } from "firebase/database";

const dataBase = db;
var records = [];

export const Docter = () => {

    const dbRef = ref(dataBase, "Doctor/Patient");
    onValue(dbRef, (snapshot) => {
      records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
    });
    console.log(records)
    const navigate = useNavigate()
    const {data,Access,SetCurrentAccount,SetAccess} = useContext(LoginInfoContext)
    console.log("it is data")
    
    const handleChange = () => {
        logout()
        SetCurrentAccount("Account")
        SetAccess(false)
        navigate("/")
      }

      const handleShow = ()=>{
        navigate("/login/Docter/addPatient/")
      }

    if(!data){
        return (
            <div
            style={{margin:"auto",  
            marginTop:"5rem"    
    }}
            >
                <Alert
                style={{
                    padding:"5rem",
                    color:"red",
                    fontSize:"2rem"
                }}
            variant='danger'>
                No Any Patient is Present
            </Alert>
            </div>            
        )
    }
    return (
        <div className='_container'>
            <div className='_container_first'>
                {/* name */}
                <div className='_Name_container'>
                    Dr.Rokde
                </div>
                <Logout Access = {Access} handleChange={handleChange}/>
                {/* addres */}
                <div className='_Address_container'>
                    0xe66d125041f0eabc15E0dEe318aBF49f8c864451
                </div>
            </div>
            <div 
            style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"flex-end",
                marginBottom:"3rem",
                padding:"30px",
                fontWeight:"bold",
                color:"red",
                fontSize:"20px",
                cursor:"pointer"
            }}
            onClick={handleShow}>
                +AddPatient
            </div>
            
            <div className="_container_second">
                {/* medicines */}
                   {/* < Patient_detail name = {"Chean"} address = {"0xe66d125041f0eabc15E0dEe318aBF49f8c864451"}/> */}
                   <Patient_detail   name = {"0x28E333A6a6fb924fcAcaA5676588168A297c42E7"} address= {"mohitechetan2019@gmail.com"} />
                   {/* {
                    records.map((patient,index)=>(
                        // {console.log(patient.data.Email)}
                        (<Patient_detail key = {index} name = {patient.data.PubKey} address= {patient.data.Email} />)
                    ))
                    } */}
            </div>

        </div>
    )
}
