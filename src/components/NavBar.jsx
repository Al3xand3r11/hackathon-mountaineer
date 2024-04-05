import React from 'react';
import { FaBars } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';

const NavBar = () => {
    return (
        <nav className="fixed bg-black w-full">
            <div>
                <div className="flex justify-between items-center h-16">
                    <div>
                        <FaBars className="text-white" />
                    </div>
                    <span className="text-2xl text-white font-semibold"> pluto </span>
                    <div className="text-white">
                        <button>Live</button>
                        <button>On Demand</button>
                        <button>Search</button>
                    </div>
                    <div> 
                        <RxAvatar className="text-white" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;