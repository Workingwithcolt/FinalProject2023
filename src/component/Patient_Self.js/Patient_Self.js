import React, { useContext, useState, useEffect } from "react";
import "./Patient_Self.css";
import { LoginInfoContext } from "../LoginContext/DataContext";
import { Button } from "react-bootstrap";
import { TaskContractAddress } from "../../config";
import { ethers } from "ethers";
import TaskAbi from "../utils/TaskContract.json";

export const Patient_Self = ({ addresss }) => {
  const { Access, setAccess,CurrentAccount} = useContext(LoginInfoContext);
  const [medicalMed, setMedicalMed] = useState([]);
  const MedicalMedicines = async (address) => {
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
        if (chairperson_address === address) {
          return "UnAuthorise Access";
        }
        const d = await TaskContract.GetAllMedicine(address);
        setMedicalMed(d);
      } else {
        return 1;
      }
    } catch (error) {
      return 2;
    }
    return data;
  };

  useEffect(() => {
    MedicalMedicines(CurrentAccount);
  });
  console.log(medicalMed);

  const handleChange = () => {
    setAccess({});
  };

  return (
    <div className="__container">
      <div className="__container_first">
        {/* name */}
        <div className="__Name_container">Chetan</div>
        {/* addres */}
        <div className="__Address_container">
          0xe66d125041f0eabc15E0dEe318aBF49f8c864451
        </div>
        <div className="access">
          {Access.access === true && (
            <Button onClick={handleChange}>LogOutAccess</Button>
          )}
        </div>
      </div>
      <div className="__container_second">
        {/* medicines */}

        {medicalMed.map((element) => (
          <div className="__medicine">
            <div className="__medicine_name">
              {element[0]}
              <span className="__date">
                {parseInt(element.date) +
                  "/" +
                  parseInt(element.month) +
                  "/" +
                  parseInt(element.year)}
              </span>
              <span className="__date">
                Remaining medicine : {element[1].toString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
