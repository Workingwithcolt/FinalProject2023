import React, { useContext } from 'react'
import { LoginInfoContext } from '../LoginContext/DataContext'
import { useState } from 'react'
import { ethers } from "ethers";
import TaskAbi from "../utils/TaskContract.json"
import { TaskContractAddress } from '../../config';
import { useEffect } from 'react';

export default function MedicalMedicine(props) {
  const [value, setValue] = useState(0)
  const [datalist,setdatalist] = useState()
  var date;
  const AddMedicineByDocter = async (medicine_name
    , quantity, address, date, year, month) => {
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
        const chairperson_address = await TaskContract.chairperson()
        if (chairperson_address === address) {
          return "UnAuthorise Access"
        }
        const data = await TaskContract.AddMedicineByDocter(medicine_name,
          quantity, address, date, year, month);
      } else {
        return "Please Install Ethereum"
      }
    } catch (error) {
      return error + "this error Occur"
    }
    return "Success";
  }
  useEffect(()=>{
    date = new Date()
  })
  console.log(props.pub_key)  
  const HandleAdd =  (e) => {
    e.preventDefault()
    if (parseInt(value) > 1) {
      const data=  AddMedicineByDocter(props.name,value, props.pub_key, date.getDate(), date.getFullYear(), date.getMonth()+1)
      console.log(data)
    }
    setValue(0)
  }
  console.log(value)
  return (
    <>
      <form onSubmit={HandleAdd}>
        <div className='___medicine_'>
          <div className='___medicine_name_'>
            {props.name}
          </div>
          <div className='___medicine_quantity_'>
            InputQuantity:<input
              style={{
                height: "10px",
                width: "140px",
                margin: "auto"
              }}
              value={value}
              onChange={(e) => { setValue(e.target.value) }}
              className="___quantity_" type='number' />
            <button
              style={{
                padding: "10px"
              }}
              type='submit'
              className='___add_medicine_'
            >Add</button>
          </div>
        </div>
      </form>
    </>
  )
}
