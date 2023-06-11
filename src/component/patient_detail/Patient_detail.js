import React from 'react'
import '../Doctor/docter.css'
import { useNavigate } from 'react-router-dom'
import { createSearchParams } from 'react-router-dom'
export const Patient_detail = (props) => {
    const navigate = useNavigate()
    console.log(props)
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
            <div className='patient'>
                <button className="doctor" onClick={handleClick}>
                    {/* //initialy i store  the publlic key to the database when i map through that data 
                    //i pass the key to the component in the component i call  */}

                    <div className='patient_name'>
                        {props.name}
                    </div>
                    <div className='Address_container'>
                        {props.address}
                    </div>


                </button>

            </div>
        </>
    )
}
