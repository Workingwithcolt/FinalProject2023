import React from 'react'
import './Patient.css'
export const PharmPrescription = () => {
  return (
    <div className='container2'>
        <div className='container_first'>
            {/* name */}
            <div className='Name_container'>
                Chetan 
            </div>
            {/* addres */}
            <div className='Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
        </div>
        <div className="container_second">
            {/* medicines */}
            <div className='medicine'>
                <div className='medicine_name'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                    <span className='date'>Remaining medicine :  5</span>
                </div>
                <div className='medicine_quantity'>
                InputQuantity : <input  className="quantity" type='number'/>
                    <button className='add_medicine'>Substract</button>
                </div>
            </div>

            <div className='medicine'>
                <div className='medicine_name'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                    <span className='date'>Remaining medicine :  5</span>
                </div>
                <div className='medicine_quantity'>
                InputQuantity : <input  className="quantity" type='number'/>
                    <button className='add_medicine'>Substract</button>
                </div>
            </div>

            <div className='medicine'>
                <div className='medicine_name'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                    <span className='date'>Remaining medicine :  5</span>
                </div>
                <div className='medicine_quantity'>
                InputQuantity : <input  className="quantity" type='number'/>
                    <button className='add_medicine'>Substract</button>
                </div>
            </div>

            <div className='medicine'>
                <div className='medicine_name'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                    <span className='date'>Remaining medicine :  5</span>
                </div>
                <div className='medicine_quantity'>
                InputQuantity : <input  className="quantity" type='number'/>
                    <button className='add_medicine'>Substract</button>
                </div>
            </div>

            <div className='medicine'>
                <div className='medicine_name'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                    <span className='date'>Remaining medicine :  5</span>
                </div>
                <div className='medicine_quantity'>
                InputQuantity : <input  className="quantity" type='number'/>
                    <button className='add_medicine'>Substract</button>
                </div>
            </div>

        </div>
    </div>
  )
}
