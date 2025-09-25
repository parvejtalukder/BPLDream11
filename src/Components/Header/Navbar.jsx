import React from 'react';
import './Header.css'

const Navbar = () => {
    return (
        <div className='max-w-full mx-auto'>
        <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="/public/logo.png" className='w-16 p-1' alt="" />
                </div>
            <div className="main-right">
                <div className='flex justify-between items-center gap-4'>
                    <ul className='flex justify-around items-center gap-3 font-color'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <button className="btn border-1 px-4 py-5 rounded-3xl w-auto"><span>0</span> BDT</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;