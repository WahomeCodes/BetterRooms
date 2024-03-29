import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';

const Hero001 = () => {
    const images = ["/assets/lights.jpg","/assets/kitchen.jpg","/assets/bed__.jpg","/assets/bed_.jpg","/assets/bed.jpg"]
    const [random,setRandom] = useState(0);
    const [randomText,setRandomText] = useState(0);

    const titles = ["Beyond Listings Beyond Limits: Your Perfect AirBNB Awaits","Your Airbnb soulmate: We'll match you with your dream stay.","Airbnb smarter: Find the perfect fit, faster."]

   
    useEffect(()=>{
        setInterval(() => {
            const randomNumber = Math.floor(Math.random()* 5)
            setRandom( randomNumber)
        }, 10000);

        setInterval(() => {
            const random_Number = Math.floor(Math.random()*3);
            setRandomText(random_Number)

        }, 12000);
    },[])

    return (
    <div className='bg-background h-[calc(100vh-120px)] px-[32px] flex flex-col relative z-[800]'>
        {/* <div className='mt-[32px]'>
            <img src="\assets\logo.png" alt="" />
        </div> */}
        <div>
            <p className='text-2xl text-hero mt-20 font-medium z-[1000] relative'>Adventure awaits.Find your next unforgettable Airbnb.</p>
        </div>
        <div>
            <p className='text-3xl w-1/5 max-md:w-1/2 text-heroTitle leading-[50px] mt-10 font-bold relative'>{titles[randomText]}</p>
        </div>

        <div>
            <p className='mt-6 w-2/5 text-justify font-light text-heroTitle relative'>
                Stop searching.Start Living.Discover hidden gems.charming studios and unforgettable adventures.Find an airbnb that feels like home no matter where you are.
            </p>
        </div>

        <div className='rounded-tl-none rounded-bl-full rounded-br-none rounded-tr-full w-1/2 h-[450px] absolute right-[50px] z-[100] top-0'>
            <img src={images[random]} alt=""  className='rounded-tl-none rounded-bl-full rounded-br-none rounded-tr-full object-cover z-[0] rounded-2xl h-[100%] w-[100%]'/>
        </div>

    </div>
  )
}

export default Hero001
