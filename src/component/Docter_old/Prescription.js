import React from 'react'
import './Docter_Detail.css'
import '../../css/bootstrap.min.css'
import '../../css/style.css'
export const Prescription = () => {
    const i = require('../../img/logo.png')
  return (
    <div className='container_docter_detail'>
        <div className='container_first'>
            {/* name */}
            <div className='Name_container'>
                XYZ
            </div>
            {/* addres */}
            <div className='Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
        </div>
        <div className='detail'>
            <div className='mid'>
        <div className='medicine_detail'>        
        <div className='SearchFiled'>
                <input type='text' className='search' placeholder='Search medicine'/>
        </div>
        <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
        </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
            </div>      
        </div>
        <div className="current_medicine">
            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                </div>
                <div className='medicine_quantity_'>
                    Quantity:12
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                </div>
                <div className='medicine_quantity_'>
                    Quantity:12
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                </div>
                <div className='medicine_quantity_'>
                    Quantity:12
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                </div>
                <div className='medicine_quantity_'>
                    Quantity:12
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                </div>
                <div className='medicine_quantity_'>
                    Quantity:12
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    
  )
}
