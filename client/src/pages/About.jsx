import React from 'react'

const About = () => {
  return (
    <div className='bg-background h-[calc(100vh-120px)] relative'>
      <div className="bg-hero size-[350px] rounded-br-full absolute left-10 rounded-tr-full rounded-bl-3xl rounded-tl-full ">
        <img src="/assets/bed__.jpg" className='object-cover rounded-br-full w-[100%] h-[100%] rounded-tr-full rounded-bl-3xl rounded-tl-full hue-rotate-90' alt="" />
      </div>
      <div className='w-1/2 absolute right-5 text-right'>
        <p className='text-heroTitle leading-8 tracking-wider'>
          Welcome to <span className='text-hero'>BetterRooms</span>, your personalized gateway to unforgettable travel experiences!At Airbnb Recommender, we believe that every journey should be as unique as you are. That's why we've created a cutting-edge recommender system designed to match you with the perfect accommodations for your next adventure. Whether you're seeking a cozy cabin in the woods, a stylish urban loft, or a charming beachfront villa, we've got you covered.
        </p>
      </div>
      <div className='w-[700px] h-[250px] px-5 absolute bottom-5 border-none rounded-lg shadow-sm right-5 flex space-x-10 overflow-x-auto scrollbar-hide'>
        <div className='h-[240px] w-[200px] min-w-[200px] shadow-inner text-black my-auto rounded-lg flex items-center text-center justify-center bg-[url("/assets/customer.jpg")] bg-cover bg-center bg-no-repeat'>
          <p className='text-[20px] font-bold text-hero drop-shadow-2xl'>Customer Support Integration</p>
        </div>
        <div className='h-[240px] w-[200px] min-w-[200px] shadow-inner text-black my-auto rounded-lg flex items-center text-center justify-center bg-[url("/assets/growth.jpg")] bg-cover bg-center bg-no-repeat'>
          <p className='text-[20px] font-bold text-hero drop-shadow-2xl'>Continuous Improvement</p>
        </div>
        <div className='h-[240px] w-[200px] min-w-[200px] shadow-inner text-black my-auto rounded-lg flex items-center text-center justify-center bg-[url("/assets/dynamicprice.jpg")] bg-cover bg-center bg-no-repeat'>
          <p className='text-[20px] font-bold text-hero drop-shadow-2xl'>Dynamic Pricing Recommendations</p>
        </div>
        <div className='h-[240px] w-[200px] min-w-[200px] shadow-inner text-black my-auto rounded-lg flex items-center text-center justify-center bg-[url("/assets/Dynamic.jpg")] bg-cover bg-center bg-no-repeat'>
          <p className='text-[20px] font-bold text-hero drop-shadow-2xl'>Host Listing Optimization</p>
        </div>
        <div className='h-[240px] w-[200px] min-w-[200px] shadow-inner text-black my-auto rounded-lg flex items-center text-center justify-center bg-[url("/assets/search.jpg")] bg-cover bg-center bg-no-repeat'>
          <p className='text-[20px] font-bold text-hero drop-shadow-2xl'>Enhanced Search Experience</p>
        </div>
        <div className='h-[240px] w-[200px] min-w-[200px] shadow-inner text-black my-auto rounded-lg flex items-center text-center justify-center bg-[url("/assets/relax_.jpg")] bg-cover bg-center bg-no-repeat'>
          <p className='text-[20px] font-bold text-hero drop-shadow-2xl'>Personalized Accommodation Recommendations</p>
        </div>

      </div>
      
    </div>
  )
}

export default About
