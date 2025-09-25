// import React, { useState } from 'react';
import React from "react";

const Player = ({player, setAvlBlnc, avlBlnc, sltPlayer, setSltPlayer}) => {
    const alreadySelected = sltPlayer.some(p => p.num === player.num);
    return (
        <div className='max-w-full w-auto border-1 border-gray-300 h-auto rounded-2xl p-6 flex flex-col gap'>

                <div className='mb-2'>
                    <img className='w-full h-[240px] rounded-xl object-cover' src={player.image} alt={player.name} />
                </div>
                <div className='flex gap-2 p-2 justify-start items-center'>
                    <i className="fa-solid fa-circle-user"></i>
                    <h2 className='font-bold text-2xl'>{player.name}</h2>
                </div>
                <div className='flex justify-between items-center gap-3'>
                    <div className='flex justify-center items-center gap-2'>
                        {/* flag icon */}
                    <span><i className="fa-solid fa-flag"></i></span>
                    <p>{player.country}</p>
                    </div>
                    <button className='px-2 py-1.5 bg-gray-100 rounded-2xl'>{player.role}</button>
                </div>
                <div className='pt-4 w-full'>
                    <hr />
                </div>
                <div className='py-2'>
                    {/* rating  */}
                <div className='flex justify-between items-center py-0.5'>
                    <p className='font-bold'>Rating</p>
                    <p>{player.rating}</p>
                </div>
                {/* type  */}
                <div className='flex justify-between items-center py-0.5'>
                    <p className='font-bold'>Style</p>
                    <p>{player.battingStyle}</p>
                </div>
                <div className='flex justify-between items-center pt-0.5'>
                    <p className='font-bold'>Price: <span className='font-normal'>{player.price}</span></p>
                    <button
  disabled={alreadySelected}
  onClick={() => {
    if (avlBlnc >= player.price) {
      setAvlBlnc(avlBlnc - parseInt(player.price));
      setSltPlayer([...sltPlayer, player]); 
    } else {
      alert("Balance Low...");
    }
  }}
  className={`border-1 ${alreadySelected ? "bg-gray-400" : "bg-gray-100"} border-gray-100 rounded-2xl px-2 py-1`}
>
  {alreadySelected ? "Selected" : "Choose Player"}
</button>

                </div>
                </div>
            </div>
    );
};

export default Player;