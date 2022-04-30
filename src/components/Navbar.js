import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';

function Navbar() {
  return (
    <div className="bg-black w-full h-24 flex flex-row border-b-300 border-white ">
      <div className=" flex items-center pl-1 sm:pl-3 md:pl-32">
        <h1 className=" pl-1 text-xl  font-Send  text-cyan-300  sm:p-2  md:text-4xl lg:text-5xl xl:text-6xl  ">
          foodcity
        </h1>
      </div>

      <ul className=' md:flex  hidden items-center justify-center sm:pl-10 md:pl-32'>
        <li>
          <Link to="/Home" className=" text-white p-1.5 sm:p-1 md:p-5 lg:p-11 xl:p-14 md:text-xl">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Menu" className="text-white p-1 sm:p-2 md:p-5 lg:p-11 xl:p-14  md:text-xl">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/About" className="text-white p-1 sm:p-2 md:p-5 lg:p-11 xl:p-14  md:text-xl">
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="text-white p-1 sm:p-2 md:p-5 lg:p-11 xl:p-14  md:text-xl">
            Contact
          </Link>
        </li>
      </ul>


      <ul className='md:hidden  flex items-center justify-center sm:pl-10 md:pl-32'>
        <li>
          <Link to="/Home" className=" text-white p-1.5 sm:p-1 md:p-5 lg:p-11 xl:p-14 md:text-xl">
            <HomeIcon/>
          </Link>
        </li>
        <li>
          <Link to="/Menu" className="text-white p-1 sm:p-2 md:p-5 lg:p-11 xl:p-14  md:text-xl">
            <MenuBookIcon/>
          </Link>
        </li>
        <li>
          <Link to="/About" className="text-white p-1 sm:p-2 md:p-5 lg:p-11 xl:p-14  md:text-xl">
            <InfoIcon/>
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="text-white p-1 sm:p-2 md:p-5 lg:p-11 xl:p-14  md:text-xl">
            <ContactsIcon/>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
