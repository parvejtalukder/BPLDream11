import React from 'react';
import ImgOne from '../../assets/bg-shadow.png'
import Logo from '../../assets/banner-main.png'

const Body = () => {
    return (
        <div className='p-4'>
            <div className='h-[450px] w-full bg-black rounded-2xl py-[64px] relative'>
                <img src={ImgOne} alt="bodyImg" className='h-[450px] w-full absolute top-0 rounded-2xl' />
                <div className='flex flex-col justify-center items-center gap-3'>
                    <img src={Logo} alt="Logo" className='w-40 lg:w-50 lg:h-auto'/>
                    <h2 className='text-white font-bold text-xl text-center px-4 lg:p-0 lg:text-3xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className='text-indigo-300 font-bold lg:font-medium lg:text-2xl'>Beyond Boundaries Beyond Limits</p>
                    <div className='p-2 border-1 border-amber-300 rounded-2xl'>
                        <button className='m-2 bg-amber-300 p-3 rounded-xl'>Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;