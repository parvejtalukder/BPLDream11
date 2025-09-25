import React from 'react';
import { use } from 'react';
import Player from '../Player/Player';

const Available = ({DataBase, setAvlBlnc, avlBlnc, sltPlayer, setSltPlayer}) => {
    const Players = use(DataBase);
    // console.log(Players);
    return (
        <div className='p-4 grid grid-cols-1 lg:p-4 lg:grid-cols-3 gap-5'>
         {
            Players.map(player => <Player key={player.num} player={player} setAvlBlnc={setAvlBlnc} avlBlnc={avlBlnc} sltPlayer={sltPlayer} setSltPlayer={setSltPlayer}></Player>)
         }
        </div>
    );
};

export default Available;