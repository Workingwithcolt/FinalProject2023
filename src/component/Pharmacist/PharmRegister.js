import React, { useState } from "react";
import "./login.css";
import { child, get, ref, set } from "firebase/database";
import { db, auth } from "../Firebase/firebase";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ethers } from "ethers";
import { LoginInfoContext } from "../LoginContext/DataContext";
import { useContext } from "react";
import { TaskContractAddress } from "../../config";
import TaskAbi from "../utils/TaskContract.json";

export const PharmRegister = () => {

    async function createBytes(value) {
        const utils = ethers.utils;
        const inBytes = utils.formatBytes32String(value);
        return inBytes;
      }
      
      const connectWallet = async () => {
        try {
          const { ethereum } = window;
      
          if (!ethereum) {
            console.log("Metamask not detected");
            return;
          }
          let chainId = await ethereum.request({ method: "eth_chainId" });
          console.log("Connected to chain:" + chainId);
          const rinkebyChainId = "0x5";
          if (chainId !== rinkebyChainId) {
            alert("You are not connected to the Rinkeby Testnet!");
            return;
          }
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log(accounts[0])
          SetCurrentAccount(accounts[0]);
        } catch (error) {
          console.log("Error connecting to metamask", error);
        }
      };
      
      
      const AddMedical = async (medical_address) => {
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
            if (chairperson_address === CurrentAccount) {
              return "UnAuthorise Access";
            }
            var name_ = createBytes(name);
            var addres_ = createBytes(address);
            const d = await TaskContract.AddMedicals(name, address,medical_address);
          } else {
            return 1;
          }
        } catch (error) {
          return 2;
        }
        return data;
      };
      
  

  const getAllInputs = () => {
    return {
      email: email,
      name: name,
      phone: Number(phone),
      pass: pass,
      pub_key:pub_key
    };
  };

  const insertData = async () => {
    const target = "0x146E84bFcD0921a6B4D309Bf1bD77218E4Ae951C";
    if (CurrentAccount && CurrentAccount.trim().toLowerCase() === target.toLowerCase()) {
      const data = getAllInputs();
      const dd1 = await AddMedical(name, address,pub_key)
        set(ref(db, "Pharmacist/" + data.phone), {
          FullName: data.name,
          PubKey: data.pub_key,
          Email: data.email,
          Password: data.pass,
        })
          .then(() => {
            alert("Data added successfully!");
          })
          .catch((error) => {
            alert("There was an error: " + error);
          });
    } else {
        
    }
  };
  const handleAdd = ()=>{
    connectWallet()
    signUp()
    insertData()
  }
  const signUp = async () =>{
    //e.preventDefault();
    createUserWithEmailAndPassword(auth,email,pass)
    .then((userCredential)=>{
        console.log(userCredential)
    }).catch((error)=>{
        console.log(error);
    })
}
const [pub_key, setpub_key] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [pass, setpass] = useState("");
  const [email, setEmail] = useState("");
  const [address,setaddress] = useState("")
  const {SetCurrentAccount,CurrentAccount} = useContext(LoginInfoContext)
  return (
    <div className="auth-form-container1">
      <h2>Add Pharmasist</h2>
      <div className="register-form1">
        <label>Enter Public Key</label>
        <input
          type="text"
          id="pub_key"
          value={pub_key}
          onChange={(e) => {
            setpub_key(e.target.value);
          }}
        />
        <label>Enter Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Enter the Local Address</label>>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => {
            setaddress(e.target.value);
          }}
        />
        <label>Enter Full Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <label>Enter Phone Number</label>
        <input
          type="phone"
          id="phone"
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />
        <label>Enter Password</label>
        <input
          type="password"
          id="pass"
          value={pass}
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />
        <button id="addBtn" onClick={()=>handleAdd()}>
          Add Data
        </button>
      </div>
    </div>
)
};
