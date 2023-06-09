import React, { useContext } from 'react'
import { LoginInfoContext } from '../LoginContext/DataContext'
export default function Search(props) {

  return (
    <>
      <div className='___SearchFiled'>
        <input 
        onChange={(e)=>props.handleSearch(e.target.value)}
        type='text' className='___search' placeholder='Search medicine' />
      </div>
    </>
  )
}
