import React from 'react';
import Logo from '../assets/images/Logo.png';

const HeroSection = () => {
    return (
        <div className=" bg-black w-full h-screen bg-cover bg-center">
            <div className="flex flex-column pt-60 pl-8">
            <div>
                <img src={Logo} alt="Logo" className="w-20 h-20"/>
            </div>
            <div>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
            <button className='text-white'>Yes</button>
            <button className='text-white'>No</button>
            </div>
            </div>
        </div>
    );
    }

export default HeroSection;