import React from "react";
import "./Patient.css";
import { TaskContractAddress } from "../../config";
import { ethers } from "ethers";
import TaskAbi from "../utils/TaskContract.json";
import { useState,useEffect } from "react";

export const Patient = () => {
    const [medicalMed, setMedicalMed] = useState([]);
    const [quantity,setquantity] = useState(0)
    // SubstractMedicine(address patient_address,uint256 date,uint256 month,uint256 year,uint256 substract,string memory name)
    
    const MedicalMedicines = async (address) => {
        const data =null
        try {
            const {ethereum} = window
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
                  const d = await TaskContract.GetAllMedicine(address)
                  setMedicalMed(d)
          } else {
            return 1;
          }
        } catch (error) {
          return 2;
        }
        return data;
      };
      
      console.log(medicalMed)
      
      useEffect(() => {
        MedicalMedicines("0xc43A619Af76b7AF03f010f1Aa688eeBc050F9f23");
      },[quantity]);

      const SubstractMedic = async (patient_address,date,month,year,substract,name) => {
        const data = null;
        try {
          const { ethereum } = window;
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const TaskContract = new ethers.Contract(
              TaskContractAddress,
              TaskAbi.abi,
              signer
            );
            const chairperson_address = await TaskContract.chairperson();
            if (chairperson_address === patient_address) {
              return "UnAuthorise Access";
            }
            await TaskContract.SubstractMedicine(patient_address,date,month,year,substract,name)
          } else {
            return 1;
          }
        } catch (error) {
          return 2;
        }
        return data;
      };
      const handleSubstract = (date,month,year,substract,name)=>{
        SubstractMedic("0xc43A619Af76b7AF03f010f1Aa688eeBc050F9f23",date,month,year,substract,name)
        // MedicalMedicines("0xc43A619Af76b7AF03f010f1Aa688eeBc050F9f23");
        setMedicalMed(1)
        setquantity(0)
      }
      console.log(medicalMed)

    //   MedicalMedicines("0xc43A619Af76b7AF03f010f1Aa688eeBc050F9f23");
    // useEffect(() => {
    //   MedicalMedicines("0xc43A619Af76b7AF03f010f1Aa688eeBc050F9f23");
    //   console.log("It is executed")
    // },[medicalMed]);
    
  return (
    <div className="____container">
      <div className="____container_first">
        {/* name */}
        <div className="____Name_container">Chetan</div>
        {/* addres */}
        <div className="____Address_container">
          0xe66d125041f0eabc15E0dEe318aBF49f8c864451
        </div>
      </div>
      <div className="____container_second">
        {/* medicines */}
        {
            medicalMed.map((element,index)=>(
  
              <form onSubmit={(e)=>{
                e.preventDefault()
                console.log(parseInt(e.target.elements[0].value))
                handleSubstract(parseInt(element.date),parseInt(element.month),parseInt(element.year),parseInt(e.target.elements[0].value),element[0])}}>
              <div className="____medicine" key = {index}>
          <div className="____medicine_name">
            {element[0]}
            <span className="____date">
            {parseInt(element.date) +
                  "/" +
                  parseInt(element.month) +
                  "/" +
                  parseInt(element.year)}
            </span>
            <span className="____date">Remaining medicine : {element[1].toString()}</span>
          </div>
          <div className="____medicine_quantity">0
            InputQuantity : <input className="____quantity" type="number"/>
            <button className="____add_medicine" name = "myInputName"type="submit">Substract</button>
          </div>
        </div>
        </form>
            ))
        }
{/* 
        <div className="____medicine">
          <div className="____medicine_name">
            XDCS12334Xf
            <span className="____date">26-02-2023</span>
            <span className="____date">Remaining medicine : 5</span>
          </div>
          <div className="____medicine_quantity">
            InputQuantity : <input className="____quantity" type="number" />
            <button className="____add_medicine">Substract</button>
          </div>
        </div>
        <div className="____medicine">
          <div className="____medicine_name">
            XDCS12334Xf
            <span className="____date">26-02-2023</span>
            <span className="____date">Remaining medicine : 5</span>
          </div>
          <div className="____medicine_quantity">
            InputQuantity : <input className="____quantity" type="number" />
            <button className="____add_medicine">Substract</button>
          </div>
        </div>
        <div className="____medicine">
          <div className="____medicine_name">
            XDCS12334Xf
            <span className="____date">26-02-2023</span>
            <span className="____date">Remaining medicine : 5</span>
          </div>
          <div className="____medicine_quantity">
            InputQuantity : <input className="____quantity" type="number" />
            <button className="____add_medicine">Substract</button>
          </div>
        </div>
        <div className="____medicine">
          <div className="____medicine_name">
            XDCS12334Xf
            <span className="____date">26-02-2023</span>
            <span className="____date">Remaining medicine : 5</span>
          </div>
          <div className="____medicine_quantity">
            InputQuantity : <input className="____quantity" type="number" />
            <button className="____add_medicine">Substract</button>
          </div>
        </div>
        <div className="____medicine">
          <div className="____medicine_name">
            XDCS12334Xf
            <span className="____date">26-02-2023</span>
            <span className="____date">Remaining medicine : 5</span>
          </div>
          <div className="____medicine_quantity">
            InputQuantity : <input className="____quantity" type="number" />
            <button className="____add_medicine">Substract</button>
          </div>
        </div>
        <div className="____medicine">
          <div className="____medicine_name">
            XDCS12334Xf
            <span className="____date">26-02-2023</span>
            <span className="____date">Remaining medicine : 5</span>
          </div>
          <div className="____medicine_quantity">
            InputQuantity : <input className="____quantity" type="number" />
            <button className="____add_medicine">Substract</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};
