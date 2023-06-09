import React from 'react'
import { useState } from 'react';
import { createContext} from 'react';
// import { useDisconnect } from 'wagmi';
export const LoginInfoContext = createContext({}); 
const data = {
    name:"Chetan",
    Address:"12121224498409384983759837493874934879384",
    Ether:"23ETh",
    Otp:"1212",
    Assign_medicine:[
        {
            Name:"Cyclone",
            Quantity:12
        },
        {
            Name:"Cyclone",
            Quantity:12
        },{
            Name:"Cyclone",
            Quantity:12
        },
        {
            Name:"Cyclone",
            Quantity:12
        }
    ],
    Medical_Medicine:[
        {
            Name:"Rm-100"
        },
        {
            Name:"MR"
        },
        {
            Name:"Vitamin-D"
        },
        ,
        {
            Name:"MriVitamin-D"
        },
        ,
        {
            Name:"LoVitamin-D"
        },
        ,
        {
            Name:"weaVitamin-D"
        },
        ,
        {
            Name:"ooVitamin-D"
        },
    ]
}

export const LoginContext = ({children})=> {
    const [searchvalue,SetSearchValue] = useState()
    const [CurrentAccount,SetCurrentAccount] = useState({})
    const [Access,SetAccess] = useState(false)
    const [Patient_Account,SetPatient_Account] = useState([])
    // const { disconnect } = useDisconnect()
    // const Disconnect = () =>{
    //     disconnect()
    // }
    const AddMedicineByDocter = (obj)=>{
        const temp = {
            Name:obj.name,
            Quantity:obj.quantity
        }
        data.Assign_medicine.push(temp)
    }
    return (
        <LoginInfoContext.Provider value={{data,AddMedicineByDocter,SetSearchValue,CurrentAccount,SetCurrentAccount,Access,SetAccess,Patient_Account,SetPatient_Account}}>
            {children}
        </LoginInfoContext.Provider>
  )
}
