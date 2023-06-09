import React from 'react'
import "./Medicine.css"
export default function Medicine(props) {
  return (
    <>
    {
      props.data.map(element=>(
        <div className='___medicine_'>
        <div className='___medicine_name_'>
          XDCS12334Xf
          <span className='___date'>26-02-2023</span>
        </div>
        <div className='___medicine_quantity_'>
          Quantity:12
        </div>
      </div>
      ))
      }
    </>
  )
}
