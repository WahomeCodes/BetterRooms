/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FaFaceGrinBeam } from 'react-icons/fa6';
import { useState } from 'react';


const ConfirmRegister = ({formData,setFormData}) => {

  const [ confirmRegistation, setConfirm ] = useState();
  return (
    <div className='bg-background h-fit pt-5 flex justify-center'>
            <form className='w-[338px] h-fit rounded-[10px] flex flex-col space-y-6 shadow-2xl justify-center items-center py-[32px] px-[10px] max-sm:w-[300px]'>
              <p className='text-hero'>You are just one step from registering </p>
              <div className='rounded-lg w-56'>
                <img src="./public/assets/step.png" alt="" className='rounded-lg w-56'/>
              </div>
              <p className='text-black font-light'>I confirm that I am ready to create an account with Better Rooms</p>
              <input type="checkbox" name="confirm" id="" value={formData.confirmRegistation} onChange={()=>setFormData({...formData,confirmRegistation:!confirmRegistation})} />
            </form>
        </div>
  )
}

export default ConfirmRegister
