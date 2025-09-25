import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Selected from './PlayersBox/Selected/Selected'
import Available from './PlayersBox/Available/Available';
import { Suspense } from 'react';
import Body from './Components/Body/Body';

const DBase = fetch("/Database.json")
  .then(res => res.json())
  .then(data => {
    console.log("Loaded data:\n PHT.......");
    return data; 
  });

// console.log(DataBase); 

function App() {
  const DataBase = DBase;
  const [Tgl, setTgl] = useState(true);
  const [avlBlnc, setAvlBlnc] = useState(6000000);
  const [sltPlayer, setSltPlayer] = useState([]);
  // const [countSlt, setCountSlt] = useState(0);
  const removedPayer = (toRemove) => {
    console.log(toRemove);
    const filteredSlt = sltPlayer.filter(playerEach => playerEach.num !== toRemove.num);
    setSltPlayer(filteredSlt);
  }
  const arrLen = sltPlayer.length;
  // console.log(arrLen);
  let tglTitle = <p>Available Players</p>
  // console.log(sltPlayer);
  if (Tgl === true) {
    tglTitle = <p>Available Players</p>
  } else {
    tglTitle = <p>Selected Players (<span>{arrLen}</span>)</p>
  }
  return (
    <>
      {/* HEADER & BODY  */}
      <div className='mx-5 lg:mt-5 lg:max-w-[1200px] lg:mx-auto'>
        <Navbar avlBlnc={avlBlnc}></Navbar>
        <Body></Body>
        <div className='flex justify-between items-center px-4 py-1'>
          <h2 className='font-bold text-sm lg:text-[28px]'>{tglTitle}</h2>
          <div className='flex justify-center items-center'>
            <button onClick={() => setTgl(true)} className={`h-8 ${Tgl === true ? "bg-[#E7FE29]": ""} p-4 flex justify-center items-center text-right rounded-l-xl border-1 border-gray-100`} >Available</button>
            <button onClick={() => setTgl(false)} className={`h-8 ${Tgl === false ? "bg-[#E7FE29]": ""} p-4 flex justify-center items-center text-right rounded-r-xl border-1 border-gray-100`}>Selected (<span>{arrLen}</span>)</button>
          </div>
        </div>
        {/* Data From DB  */}
        {
         Tgl == true ?  <Suspense fallback={<div className='flex justify-center items-center p-24'><span className="loading loading-dots loading-xl"></span></div>
}> <Available DataBase={DataBase} setAvlBlnc={setAvlBlnc} avlBlnc = {avlBlnc} sltPlayer={sltPlayer} setSltPlayer={setSltPlayer} ></Available> </Suspense>  :   <Selected removedPayer={removedPayer} sltPlayer={sltPlayer}></Selected>
        }
      </div>
      {/* FOOTER  */}
    </>
  )
}

export default App
