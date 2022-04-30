import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function contact() {
  return (
    <div className=' bg-black text-center text-white'>
     <h1 className=' text-4xl font-Send'> Contact Us</h1>
     <p className=' mt-10'> <LocationOnIcon/>Location </p>
     <p className='mt-5'><CallIcon/> Call +234 9038225936</p>
     <p className='text-green-500 mt-5'><EmailIcon/> Temialamutu7@gmail.com</p>
     <h1 className='text-6xl font-Send text-cyan-500 mt-10 mb-5'>foodcity</h1>
     <p>Ready to serve and satify your cravings.</p>
     <ul className='flex justify-center'>
       <li><TwitterIcon/></li>
       <li><FacebookIcon/></li>
       <li><InstagramIcon/></li>
       <li><LinkedInIcon/></li>
     </ul>
     <p className='font-Send mt-5 mb-5 text-3xl'>Opening Hours</p>
     <p>Everyday</p>
     <p>10:00 Am-10:00Pm</p>
      </div>

  )
}

export default contact