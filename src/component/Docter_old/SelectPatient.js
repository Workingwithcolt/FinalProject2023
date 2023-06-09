import React from 'react'
import './docter.css'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

export const SelectPatient = () => {
    const i = require('./doctor1.png')
    const [searchparams]=useSearchParams();
  return (
    
    <div className='container1'>
        <div className='container_first'>
            {/* name */}
            {/* <div className='Name_container'>
                Dr.Rokde
            </div> */}
           
            <div className="our-team">
                <div className="picture">
                <img src={i}/>
                </div>
                <div className="team-content">
                    <h3 className="name">Dr. Bhosale</h3>
                    <h4 className="title">Doctor</h4>
                </div>
            </div>
            {/* addres */}
           {/*  <div className='header'> */}
                <div className='Address_container1'>
                    0xe66d125041f0eabc15E0dEe318aBF49f8c864451
                </div>
                <button className='add'>
                        <Link to={`/doctor/addpatientbydoctor`}>+ Add New Patient</Link>
                </button>
            
           
        </div>
        <div className="container_second">
            {/* medicines */}
            <div className='patient'>
                <button className='doctor'>
                    <Link to={"/doctor/prescription/"}>
                        <div className='patient_name'>
                            Aditi
                        </div>
                        <div className='Address_container'>
                            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
                        </div>
                    </Link>
                </button>
            </div>

            <div className='patient'>
                <button className='doctor'>
                    <Link to={"/doctor/prescription/"}>
                        <div className='patient_name'>
                            Tejaswini
                        </div>
                        <div className='Address_container'>
                            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
                        </div>
                    </Link>
                </button>
            </div>

            <div className='patient'>
            <button className='doctor'>
                    <Link to={"/doctor/prescription/"}>
                        <div className='patient_name'>
                            Harshal
                        </div>
                        <div className='Address_container'>
                            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
                        </div>
                    </Link>
                </button>
            </div>
            <div className='patient'>
            <button className='doctor'>
                    <Link to={"/doctor/prescription/"}>
                        <div className='patient_name'>
                            Apurva
                        </div>
                        <div className='Address_container'>
                            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
                        </div>
                    </Link>
                </button>
            </div>
            <div className='patient'>
            <button className='doctor'>
                    <Link to={"/doctor/prescription/"}>
                        <div className='patient_name'>
                            Chetan
                        </div>
                        <div className='Address_container'>
                            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
                        </div>
                    </Link>
                </button>
            </div>
        </div>
        </div>
  )
}
