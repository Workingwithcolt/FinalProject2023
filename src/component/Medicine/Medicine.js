import React from 'react'
import "./Medicine.css"
export default function Medicine(props) {
  // console.log(props[0])x
  return (
    <>
    {
      props.data.map(element=>(
        <div className='___medicine_'>
        <div className='___medicine_name_'>
          {element[0]}
          <span className='___date'>{parseInt(element.date)+"/"+parseInt(element.month)+"/"+parseInt(element.year)}</span>
        </div>
        <div className='___medicine_quantity_'>
          Quantity:{element[1].toString()}
        </div>
      </div>
      ))
      }
    </>
  )
}
