import React, { useState } from "react";
import "./login.css";
import { Link, redirect } from "react-router-dom";
import { useNavigate, createSearchParams } from "react-router-dom";
import { LoginInfoContext } from "../LoginContext/DataContext";
import { useContext } from "react";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { db } from "../Firebase/firebase";

const dataBase = db;
const TaskContractAddress = "0xc70C9d808090eD471f56D07E61F363f550A9CaC1"
var records = [];
export const Login = (props) => {
  const {
    CurrentAccount,
    SetCurrentAccount,
    Access,
    SetAccess,
    SetPatient_Account,
  } = useContext(LoginInfoContext);

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [data,setData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigate({
          pathname: `/login/${props.name}/`,
          search: createSearchParams({
            id: userCredential.user.email,
          }).toString(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate("/Register");
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
      SetCurrentAccount(accounts[0])
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };
  return (
    <div className="auth-form-container1">
      <h2>{props.name}</h2>
      <form className="login-form1" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit" onClick={connectWallet}>
          LogIn
        </button>
      </form>
      <button className="link-btn1" onClick={handleClick}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};
