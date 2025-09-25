import React from 'react';
import Delete from '../../../assets/delete.png'

const Scart = ({sltElem, removedPayer}) => {
    const removeCart = () => {
        removedPayer(sltElem);
    }
    return (
        <div className='flex justify-between items-center w-auto h-auto p-6 border-1 border-gray-400 rounded-2xl mb-3'>
                <div className='flex justify-between items-center gap-4'>
                    <img src={sltElem.image} alt="IMG" className='w-20 h-20 object-cover rounded-xl' />
                    <div className='flex flex-col justify-center gap-4'>
                        <h2>{sltElem.name}</h2>
                        <p>{sltElem.role}</p>
                    </div>
                </div>
                <div onClick={removeCart}>
                    <img src={Delete} alt="Delete" />
                </div>
            </div>
    );
};

export default Scart;