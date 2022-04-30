import React from 'react'
import HandshakeIcon from '@mui/icons-material/Handshake';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

function About() {
  return (
    <div className='text-white bg-black text-center h-full'>
      <h1 className='pt-20'>Food city is a food hub constantly in the business of satisfying cravings 
          leaving your tastebud feeling blessed.Our meals are painstakinly prepared by well trained,experience and 
          qualified chef.
          Not just about the taste,our food hub is located at the center of the town where you
           can smell and appreciate nature.
      </h1>
      <p className='pt-20'>We are so delighted to have you</p>
      <p className='pt-20 pb-10'>The <span className='font-Send text-cyan-500 text-5xl'>foodcity</span> team</p>
      <p className='text-cyan-500 pb-40 sm:pb-60'><HandshakeIcon/></p>
      <p className='text-cyan-500 sm:pb-20'><RestaurantMenuIcon/></p>
    </div>
  )
}

export default About
