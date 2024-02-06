import React from 'react'
import "../Style/Maincon1.css";
import Maincon2 from './Maincon2';

function Maincon1() {
  return (
    <>
    <div className='maincon1_container'>
        <div className='maincon1_container_sub1'>
        <button className='btn btn-sm btn-danger ml-1'>Dinings</button>
        </div>
        <div className='maincon1_container_sub2'>
        <button className='btn btn-sm btn-danger ml-1'>Rooms</button>
        </div>
        <div className='maincon1_container_sub3'>
        <button className='btn btn-sm btn-danger ml-1'>Awards</button>
        </div>
        <div className='maincon1_container_sub4'>
        <button className='btn btn-sm btn-danger ml-1'>Gallery</button>
        </div>
    </div>
    <Maincon2 />
    </>
  )
}

export default Maincon1