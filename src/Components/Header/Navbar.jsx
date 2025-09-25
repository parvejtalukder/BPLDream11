import React from 'react';
import './Header.css'

const Navbar = () => {
    return (
        <div className='max-w-full mx-auto'>
        <div className="navbar lg:bg-base-100 pt-5">
                <div className="flex-1">
                    <img src="/public/logo.png" className='w-16 p-1' alt="" />
                </div>
            <div className="main-right">
                <div className='flex justify-between items-center gap-4'>
                    <ul className='hidden lg:flex lg:justify-around lg:items-center lg:gap-3 lg:font-color'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <button className="btn border-1 lg:px-4 lg:py-5 rounded-3xl w-auto"><span>100000</span> BDT</button>
                    <div className='lg:hidden'>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;