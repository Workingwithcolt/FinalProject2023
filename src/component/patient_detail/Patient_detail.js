import React from 'react'
import "./patient_detail.css"
import { useNavigate } from 'react-router-dom'
import { createSearchParams } from 'react-router-dom'
export const Patient_detail = (props) => {
    const navigate = useNavigate()
    const handleClick = async () => {
        navigate({
            pathname: "/login/Docter/patient/",
            search: createSearchParams({
                name: props.name,
                address: props.address
            }).toString()
        })
    }
    return (
        <>
            <div className='_patient'>
                <button onClick={handleClick}>
                    {/* //initialy i store  the publlic key to the database when i map through that data 
                    //i pass the key to the component in the component i call  */}

                    <div className='_patient_name'>
                        {props.name}
                    </div>
                    <div className='_Address_container'>
                        {props.address}
                    </div>


                </button>

            </div>
        </>
    )
}
