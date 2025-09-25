import React from 'react';

const Player = ({player}) => {
    return (
        <div className='max-w-full w-auto border-1 border-gray-300 h-auto rounded-2xl p-6 flex flex-col gap'>

                <div className='mb-2'>
                    <img className='w-full h-[240px] rounded-xl object-cover' src={player.image} alt={player.name} />
                </div>
                <div className='flex gap-2 p-2 text-left items-start'>
                    <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28.000000" height="28.000000" fill="none">
	<rect id="user 1" width="28.000000" height="28.000000" x="0.000000" y="0.000000" fill="rgb(255,255,255)" fill-opacity="0" />
	<g id="Group">
		<g id="Group">
			<g id="Group">
				<path id="Vector" d="M14.002 14.5397C18.002 14.5397 21.2718 11.2699 21.2718 7.26985C21.2718 3.26983 18.002 0 14.002 0C10.0019 0 6.73218 3.26983 6.73218 7.26985C6.73218 11.2699 10.002 14.5397 14.002 14.5397Z" fill="rgb(19,19,19)" fill-opacity="0.800000012" fill-rule="nonzero" />
				<path id="Vector" d="M26.4781 20.3493C26.2876 19.8731 26.0337 19.4286 25.7479 19.0159C24.2876 16.8572 22.0337 15.4286 19.494 15.0794C19.1766 15.0477 18.8274 15.1111 18.5734 15.3016C17.24 16.2858 15.6528 16.7937 14.0019 16.7937C12.3511 16.7937 10.7638 16.2858 9.43048 15.3016C9.17648 15.1111 8.82727 15.0159 8.50984 15.0794C5.97015 15.4286 3.68446 16.8572 2.2559 19.0159C1.97019 19.4286 1.7162 19.9049 1.52576 20.3493C1.43054 20.5398 1.46226 20.762 1.55748 20.9525C1.81147 21.3969 2.1289 21.8414 2.41462 22.2223C2.85904 22.8255 3.33525 23.3652 3.87495 23.8731C4.31938 24.3175 4.82731 24.7302 5.33529 25.1429C7.8432 27.016 10.8591 28.0001 13.9702 28.0001C17.0813 28.0001 20.0972 27.0159 22.6051 25.1429C23.113 24.762 23.621 24.3175 24.0655 23.8731C24.5734 23.3652 25.0813 22.8255 25.5258 22.2223C25.8432 21.8096 26.129 21.3969 26.3829 20.9525C26.5416 20.762 26.5733 20.5397 26.4781 20.3493Z" fill="rgb(19,19,19)" fill-opacity="0.800000012" fill-rule="nonzero" />
			</g>
		</g>
	</g>
</svg>

                <h2 className='font-bold text-2xl'>{player.name}</h2></div>
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
                    <button className='border-1 border-gray-100 rounded-2xl px-2 py-1'>Choose Player</button>
                </div>
                </div>
            </div>
    );
};

export default Player;