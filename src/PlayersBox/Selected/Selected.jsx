import React from 'react';
import Scart from './SelectedCart/Scart';

const Selected = ({sltPlayer, removedPayer}) => {
    return (
        <div className='p-4'>
            {/* <p>Selected...</p> */}
            {/* <Scart sltPlayer={sltPlayer}></Scart> */}
            {
                sltPlayer.map(sltElem => <Scart removedPayer={removedPayer} key={sltElem.num} sltElem={sltElem}></Scart>)
            }
        </div>
    );
};

export default Selected;