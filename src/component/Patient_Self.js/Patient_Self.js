import React, { useContext } from 'react'
import './Patient_Self.css'
import { LoginInfoContext } from '../LoginContext/DataContext'
import { Button } from 'react-bootstrap'
export const Patient_Self = () => {
    const { Access ,setAccess} = useContext(LoginInfoContext)
    const handleChange = () =>{
        setAccess({})
    }
    console.log(Access)
  return (
        <div className='__container'>
        <div className='__container_first'>
            {/* name */}
            <div className='__Name_container'>
                Chetan
            </div>
            {/* addres */}
            <div className='__Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
            <div className="access">
                {(Access.access === true) && (<Button onClick = {handleChange}>LogOutAccess</Button>)}
            </div>
        </div>
        <div className="__container_second">
            {/* medicines */}
            <div className='__medicine'>
                <div className='__medicine_name'>
                    XDCS12334Xf
                    <span className='__date'>26-02-2023</span>
                    <span className='__date'>Remaining medicine :  5</span>
                </div>
            </div>

            <div className='__medicine'>
                <div className='__medicine_name'>
                    XDCS12334Xf
                    <span className='__date'>26-02-2023</span>
                    <span className='__date'>Remaining medicine :  5</span>
                </div>
            </div>

            <div className='__medicine'>
                <div className='__medicine_name'>
                    XDCS12334Xf
                    <span className='__date'>26-02-2023</span>
                    <span className='__date'>Remaining medicine :  5</span>
                </div>
            </div>

            <div className='__medicine'>
                <div className='__medicine_name'>
                    XDCS12334Xf
                    <span className='__date'>26-02-2023</span>
                    <span className='__date'>Remaining medicine :  5</span>
                </div>
            </div>
            <div className='__medicine'>
                <div className='__medicine_name'>
                    XDCS12334Xf
                    <span className='__date'>26-02-2023</span>
                    <span className='__date'>Remaining medicine :  5</span>
                </div>
            </div>
            <div className='__medicine'>
                <div className='__medicine_name'>
                    XDCS12334Xf
                    <span className='__date'>26-02-2023</span>
                    <span className='__date'>Remaining medicine :  5</span>
                </div>
            </div>
            <div className='__medicine'>
                <div className='__medicine_name'>
                    XDCS12334Xf
                    <span className='__date'>26-02-2023</span>
                    <span className='__date'>Remaining medicine :  5</span>
                </div>
            </div>
            <div className='__medicine'>
                <div className='__medicine_name'>
                    XDCS12334Xf
                    <span className='__date'>26-02-2023</span>
                    <span className='__date'>Remaining medicine :  5</span>
                </div>
            </div>

            <div className='__medicine'>
                <div className='__medicine_name'>
                    XDCS12334Xf
                    <span className='__date'>26-02-2023</span>
                    <span className='__date'>Remaining medicine :  5</span>
                </div>
            </div>

            <div className='__medicine'>
                <div className='__medicine_name'>
                    XDCS12334Xf
                    <span className='__date'>26-02-2023</span>
                    <span className='__date'>Remaining medicine :  5</span>
                </div>
            </div>

            <div className='__medicine'>
                <div className='__medicine_name'>
                    XDCS12334Xf
                    <span className='__date'>26-02-2023</span>
                    <span className='__date'>Remaining medicine :  5</span>
                </div>
            </div>


        </div>
    </div>
  )
}
