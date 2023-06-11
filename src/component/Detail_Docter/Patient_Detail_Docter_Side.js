import React, { useEffect } from "react";
import "./Docter_Detail.css";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import Medicine from "../Medicine/Medicine";
import { useContext } from "react";
import Search from "../Search/Search";
import MedicalMedicine from "../MedicalMedicine/MedicalMedicine";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TaskContractAddress } from "../../config";
import { ethers } from "ethers";
import TaskAbi from "../utils/TaskContract.json";
import { LoginInfoContext } from "../LoginContext/DataContext";

export const medicalmedicine = [
  {
    name: "Thorazine",
  },
  {
    name: "Trilafon",
  },
  {
    name: "Stelazine",
  },
  {
    name: "Serentil",
  },
  {
    name: "Prolixin",
  },
  {
    name: "Navane",
  },
  {
    name: "Moban",
  },
  {
    name: "Mellaril ",
  },
  {
    name: "Haldol",
  },
];

export const Patient_Detail_Docter_Side = (props) => {
  const queryString =window.location.search

  const params = new URLSearchParams(queryString);
  const names = params.get("name");
  const addresss = params.get("address");
  const getAllMedicine = async (address) => {
    var PatientMedicines = [];
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
        const data = await TaskContract.patient_address(address);
        for (let i = 0; i < data.length; i++) {
          PatientMedicines.push({
            medicine_name: data[i].medicine_name,
            quantity: data[i].quantity,
            patient_address: data[i].patient_address,
            date: data[i].date,
            month: data[i].month,
            year: data[i].year,
          });
        }
      } else {
        return 1;
      }
    } catch (error) {
      return 2;
    }
    return PatientMedicines;
  };
  // "Please Install Ethereum" 1
  // error 2
  const [searchvalue, setSearchValue] = useState("");
  const i = require("../../img/logo.png");
  const [searchparams] = useSearchParams();
  const name = searchparams.get("name");
  const address = searchparams.get("address");
  const [medicine, setmedicines] = useState(null);
  const [medicalMed, setMedicalMed] = useState([]);
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
    MedicalMedicines(addresss);
  });
  console.log(medicalMed);
  console.log(medicine);
  if (medicalMed === 1) {
    return (
      <div class="alert alert-danger" role="alert">
        Please Install Ethereum
      </div>
    );
  }
  if (medicalMed === 2) {
    return (
      <div class="alert alert-danger" role="alert">
        Pxlease Connect to Internet
      </div>
    );
  }
  const filterItems = (arr, query) => {
    if (arr.length > 1) {
      return arr.filter(
        (element) =>
          element.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
  };
//   if (medicalMed.length < 1) {
//     return (
//       <>
//         <div>Data is Not present</div>
//       </>
//     );
//   }
  console.log(medicalMed);
  return (
    <div className="___container_docter_detail">
      <div className="___container_first">
        {/* name */}
        <div className="___Name_container">{name}</div>
        {/* addres */}
        <div className="___Address_container">{address}</div>
      </div>
      <div className="___detail">
        <div className="___mid">
          <div className="___medicine_detail">
            <Search handleSearch={(e) => setSearchValue(e)} />
            {filterItems(medicalmedicine, searchvalue).map((e) => (
              <MedicalMedicine pub_key={addresss} name={e.name} />
            ))}
          </div>
          <div className="___current_medicine">
            {medicalMed && (
              <Medicine data={medicalMed} />
            ) 
            // : (
            //   <>
            //     <div class="alert mx-auto my-4 alert-danger" role="alert">
            //       There is No Any Medicine
            //     </div>
            //   </>
            // )
            }
          </div>
        </div>
      </div>
    </div>
  );
};
