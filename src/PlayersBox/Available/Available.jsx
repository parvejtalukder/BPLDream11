import React from 'react';
import { use } from 'react';
import Player from '../Player/Player';

const Available = ({DataBase}) => {
    const Players = use(DataBase);
    console.log(Players);
    return (
        <div className='p-4 grid grid-cols-1 lg:p-4 lg:grid-cols-3 gap-5'>
         {
            Players.map(player => <Player player={player}></Player>)
         }
        </div>
    );
};

export default Available;