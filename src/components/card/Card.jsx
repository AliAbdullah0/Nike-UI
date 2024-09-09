import React from 'react';

function Card() {
  return (
    <>
      <div className='flex-col w-full gap-3 p-2 flex md:flex-row items-center md:items-start'>
        <div className='flex flex-col md:w-2/6 w-10/12'>
          <img src="src\assets\air-zoom-victory-track-field-distance-spikes-MsLPjj.png" alt="" className='w-full'/>
          <ul className='flex flex-col items-start justify-start'>
            <li className='font-semibold text-sm text-orange-600'>Sold Out</li>
            <li className='font-semibold'>Air Zoom Victory</li>
            <li className='text-gray-400 text-sm'>Track & Field</li>
            <li className='text-gray-400 text-sm'>1 color</li>
            <li className='font-semibold font-[Roboto] text-xs'>$ 190</li>
          </ul>
        </div>
        <div className='flex flex-col md:w-2/6 w-10/12'>
          <img src="src\assets\pegasus-41-mens-road-running-shoes-7S90QB.png" alt="" className='w-full'/>
          <ul className='flex flex-col items-start justify-start'>
            <li className='font-semibold text-sm text-orange-600'>Just In</li>
            <li className='font-semibold'>Air Zoom Victory</li>
            <li className='text-gray-400 text-sm'>Track & Field</li>
            <li className='text-gray-400 text-sm'>1 color</li>
            <li className='font-semibold font-[Roboto] text-xs'>$ 190</li>
          </ul>
        </div>
        <div className='flex flex-col md:w-2/6 w-10/12'>
          <img src="src\assets\air-zoom-maxfly-track-field-sprinting-spikes-C2ZBRP.png" alt="" className='w-full'/>
          <ul className='flex flex-col items-start justify-start'>
            <li className='font-semibold text-sm text-orange-600'>Sold Out</li>
            <li className='font-semibold'>Air Zoom Victory</li>
            <li className='text-gray-400 text-sm'>Track & Field</li>
            <li className='text-gray-400 text-sm'>1 color</li>
            <li className='font-semibold font-[Roboto] text-xs'>$ 190</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
