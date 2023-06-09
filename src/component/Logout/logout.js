import React, { useContext } from 'react'
export default function Logout({handleChange,Access}) {
    console.log(Access)
  return (
    <>
    {(Access) && <button className='btn btn-primary' onClick={handleChange}>LogOut</button>}
    </>
  )
}
