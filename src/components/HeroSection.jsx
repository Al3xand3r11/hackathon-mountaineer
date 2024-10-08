import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const HeroSection = () => {

    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/questions');
    }
    return (
        <div className=" bg-black w-full h-screen bg-cover bg-center justify-center items-center flex">
            <div className="">
            <div className='justify-center flex'>
                <img src={Logo} alt="Logo" className="w-96 h-80"/>
            </div>
            <div>
            <p className='text-white pt-8 pr-12'> Would you like to be guided by a mountaineer on your content journey?</p>
            </div>
            <div className='flex justify-center items-center pt-10 pr-8'>
            <button type="button" className='text-yellow hover:text-white border border-yellow hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium 
            rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 w-36' onClick={routeChange}>
                Yes
            </button>
            <button className='text-yellow hover:text-white border border-yellow hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl'>
                No
            </button>
            </div>
            </div>
        </div>
    );
    }

export default HeroSection;