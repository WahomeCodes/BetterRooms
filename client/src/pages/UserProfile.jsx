/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const UserProfile = () => {
    const [showBio,setShowBio] = useState(false);


  return (
    <div className='flex flex-col space-y-10 min-h-screen bg-background px-8'>
        <div className="navbar">
            <div className="relative w-full flex justify-end items-end space-y-6 flex-col">
                <div onClick={()=>setShowBio(!showBio)} className="cursor-pointer flex items-center justify-center bg-hero text-[28px] text-background size-10 font-extrabold rounded-full overflow-clip">
                    SM
                </div>

                {
                    showBio && (
                        <div className="z-50 absolute bg-white top-10 right-0 personalBio shadow-lg rounded-lg p-4 flex flex-col space-y-4">
                            <p className="font-bold text-base">Stephen Mwangi</p>
                            <p className='font-normal text-sm'>Male</p>
                            <p className='font-light text-sm'>mwangiwahome70@gmail.com</p>
                            <p className='font-mono text-sm'>11328900</p>
                            <p className='cursor-pointer text-red font-light text-sm'>Change Password</p>
                            <div className="cursor-pointer flex items-center justify-center space-x-3">
                               <p>Sign Out</p>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
        <div className='grid grid-cols-3 justify-center items-center px-12 gap-8 z-10'>

            {/* To be updates Dynamically */}
            <div className='w-fit rounded-lg shadow-lg flex flex-col space-y-4 p-6'>
                <div className="name flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Place</p>
                    <span className='font-light'>Diani</span>
                </div>
                <div className="pricing flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Price Range</p>
                    <span className='font-light'>$30-$45 per night</span>
                </div>
                <div className="type flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Room Type</p>
                    <span className='font-light'>Shared Room</span>
                </div>
                <div className="type flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Rating</p>
                    <span className='font-light'>4.5</span>
                </div>
                <div className="date flex items-center justify-center space-x-5">
                    <p className='font-light text-base'>5 Months Ago</p>
                </div>
            </div>
            <div className='w-fit rounded-lg shadow-lg flex flex-col space-y-4 p-6'>
                <div className="name flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Place</p>
                    <span className='font-light'>Diani</span>
                </div>
                <div className="pricing flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Price Range</p>
                    <span className='font-light'>$30-$45 per night</span>
                </div>
                <div className="type flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Room Type</p>
                    <span className='font-light'>Shared Room</span>
                </div>
                <div className="type flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Rating</p>
                    <span className='font-light'>4.5</span>
                </div>
                <div className="date flex items-center justify-center space-x-5">
                    <p className='font-light text-base'>5 Months Ago</p>
                </div>
            </div>
            <div className='w-fit rounded-lg shadow-lg flex flex-col space-y-4 p-6'>
                <div className="name flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Place</p>
                    <span className='font-light'>Diani</span>
                </div>
                <div className="pricing flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Price Range</p>
                    <span className='font-light'>$30-$45 per night</span>
                </div>
                <div className="type flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Room Type</p>
                    <span className='font-light'>Shared Room</span>
                </div>
                <div className="type flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Rating</p>
                    <span className='font-light'>4.5</span>
                </div>
                <div className="date flex items-center justify-center space-x-5">
                    <p className='font-light text-base'>5 Months Ago</p>
                </div>
            </div>
            <div className='w-fit rounded-lg shadow-lg flex flex-col space-y-4 p-6'>
                <div className="name flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Place</p>
                    <span className='font-light'>Diani</span>
                </div>
                <div className="pricing flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Price Range</p>
                    <span className='font-light'>$30-$45 per night</span>
                </div>
                <div className="type flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Room Type</p>
                    <span className='font-light'>Shared Room</span>
                </div>
                <div className="type flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Rating</p>
                    <span className='font-light'>4.5</span>
                </div>
                <div className="date flex items-center justify-center space-x-5">
                    <p className='font-light text-base'>5 Months Ago</p>
                </div>
            </div>
            <div className='w-fit rounded-lg shadow-lg flex flex-col space-y-4 p-6'>
                <div className="name flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Place</p>
                    <span className='font-light'>Diani</span>
                </div>
                <div className="pricing flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Price Range</p>
                    <span className='font-light'>$30-$45 per night</span>
                </div>
                <div className="type flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Room Type</p>
                    <span className='font-light'>Shared Room</span>
                </div>
                <div className="type flex items-center justify-start space-x-5">
                    <p className='font-medium text-xl'>Rating</p>
                    <span className='font-light'>4.5</span>
                </div>
                <div className="date flex items-center justify-center space-x-5">
                    <p className='font-light text-base'>5 Months Ago</p>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default UserProfile
