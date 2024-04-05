import React from 'react';
import { FaBars } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import Live from '../assets/icons/Live.png';
import Play from '../assets/icons/Play.png';
import Search from '../assets/icons/Search.png';

const NavBar = () => {
    return (
<nav className="bg-black  fixed w-full z-50 top-0 start-0  ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
      <FaBars color='white'/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Pluto</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <RxAvatar color='white' size={25}/>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
      <li className='flex'>
        <img src={Live} alt="Live" className="5-8 h-8 pt-2"/>
        <a href="#" className="block py-2 px-3 text-white rounded " aria-current="page">Live TV</a>
      </li>
      <li className='flex'>
        <img src={Play} alt="Play" className="5-8 h-8 pt-2"/>
        <a href="#" className="block py-2 px-3 text-white ">On Demand</a>
      </li>
      <li className='flex'>
        <img src={Search} alt="Search" className="5-8 h-8 pt-2"/>
        <a href="#" className="block py-2 px-3 text-white  ">Search</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    );
}

export default NavBar;