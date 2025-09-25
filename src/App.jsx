import React from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Selected from './PlayersBox/Selected/Selected'

const DataBase = fetch("https://parvejhusentalukder.com/Database.json").then(res => res).then(data => data.json);
console.log(DataBase);

function App() {

  return (
    <>
      {/* HEADER & BODY  */}
      <div className='lg:mt-12 lg:max-w-[1200px] lg:mx-auto'>
        <Navbar></Navbar>
        <Selected></Selected>
      </div>
      {/* FOOTER  */}
    </>
  )
}

export default App
