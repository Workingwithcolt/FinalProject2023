import React, { useEffect } from 'react'
import './Docter_Detail.css'
import '../../css/bootstrap.min.css';
import '../../css/style.css';
import Medicine from '../Medicine/Medicine';
import { useContext } from 'react';
import Search from '../Search/Search';
import MedicalMedicine from '../MedicalMedicine/MedicalMedicine';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TaskContractAddress } from '../../config';
import { ethers } from "ethers";
import TaskAbi from "../utils/TaskContract.json"
import { LoginInfoContext } from '../LoginContext/DataContext';

export const Patient_Detail_Docter_Side = (props) => {
    const {CurrentAccount} = useContext(LoginInfoContext)
    
    const getAllMedicine = async (address) => {
        var PatientMedicines = []
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
                const data = await TaskContract.patient_address(address);
                for (let i = 0; i < data.length; i++) {
                    PatientMedicines.push({
                        medicine_name: data[i].medicine_name,
                        quantity: data[i].quantity,
                        patient_address: data[i].patient_address,
                        date: data[i].date,
                        month: data[i].month,
                        year: data[i].year,
                    })
                }
            } else {
                return 1
            }
        } catch (error) {
            return 2
        }
        return PatientMedicines;
    } 
    // "Please Install Ethereum" 1
    // error 2 
    const MedicalMedicines = async () => {
        const data  = []
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
                data  = await TaskContract.getAllmedicine();
            } else {
                return 1
            }
        } catch (error) {
            return 2
        }
        return data;
    }
    

    const [searchvalue,setSearchValue] = useState("")
    const i = require('../../img/logo.png')
    const [searchparams] = useSearchParams()
    const  name  = searchparams.get("name")
    const address = searchparams.get("address")
    const [medicine,setmedicines] = useState(null)
    const [medicalMed,setMedicalMed] = useState([])

    useEffect( async ()=>{
        const data1 = await getAllMedicine(CurrentAccount)
        setmedicines(data1)
        const data2  =await  MedicalMedicines()
        setMedicalMed(data2)
    },[])
    if(medicine === 1 || medicalMed === 1){
        return <div class="alert alert-danger" role="alert">
            Please Install Ethereum
        </div>
    }
    if(medicine === 2 || medicalMed === 2 ){
        return <div class="alert alert-danger" role="alert">
        Please Connect to Internet
    </div>
    }
    const filterItems = (arr, query) => {
        console.log(arr)
        if(arr.length > 1){
            return arr.filter(element => 
                element.Name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        }
    }   
    if(medicalMed.length < 1){
        return <>
        <div>Data is Not present</div>
        </>
    }
    console.log(medicalMed)
    return (
        <div className='___container_docter_detail'>
            <div className='___container_first'>
                {/* name */}
                <div className='___Name_container'>
                    {name}
                </div>
                {/* addres */}
                <div className='___Address_container'>
                    {address}
                </div>
            </div>
            <div className='___detail'>
                <div className='___mid'>
                    <div className='___medicine_detail'>
                        <Search handleSearch = {(e)=>setSearchValue(e)}/>
                        {(medicalMed.length >1) && filterItems(medicalMed,searchvalue).map((e)=>(<MedicalMedicine name = {e.Name}/>))}
                    </div>
                    <div className="___current_medicine">
                        {
                            (medicine.length >1)
                            ?
                            <Medicine data = { medicine}/>
                            :<>
                                    <div class="alert mx-auto my-4 alert-danger" role="alert">
                                        There is No Any Medicine
                                    </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
