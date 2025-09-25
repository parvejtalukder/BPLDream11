import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Selected from './PlayersBox/Selected/Selected'
import Available from './PlayersBox/Available/Available';
import { Suspense } from 'react';

const DataBase = fetch("/Database.json")
  .then(res => res.json())
  .then(data => {
    console.log("Loaded data:\n PHT.......");
    return data; 
  });

// console.log(DataBase); 


function App() {
  const [Tgl, setTgl] = useState(true);

  return (
    <>
      {/* HEADER & BODY  */}
      <div className='mx-5 lg:mt-10 lg:max-w-[1200px] lg:mx-auto'>
        <Navbar></Navbar>
        <div className='flex justify-between items-center px-4 py-1'>
          <h2 className='font-bold text-xl lg:text-[28px]'>Available Players</h2>
          <div className='flex justify-center items-center'>
            <button onClick={() => setTgl(true)} className={`h-8 ${Tgl === true ? "bg-[#E7FE29]": ""} p-4 flex justify-center items-center text-right rounded-l-xl border-1 border-gray-100`} >Available</button>
            <button onClick={() => setTgl(false)} className={`h-8 ${Tgl === false ? "bg-[#E7FE29]": ""} p-4 flex justify-center items-center text-right rounded-r-xl border-1 border-gray-100`}>Selected (<span>0</span>)</button>
          </div>
        </div>
        {/* Data From DB  */}
        {
         Tgl == true ?  <Suspense fallback={<div className='flex justify-center items-center p-24'><span className="loading loading-dots loading-xl"></span></div>
}>
          <Available DataBase={DataBase}></Available>
        </Suspense>  :   <Selected></Selected>
        }
      </div>
      {/* FOOTER  */}
    </>
  )
}

export default App
