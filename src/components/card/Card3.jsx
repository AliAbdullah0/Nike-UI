import React from 'react';

function Card3() {
  return (
    <>
      <div className='flex-col w-full gap-3 p-2 flex md:flex-row items-center md:items-start'>
        <div className='flex flex-col md:w-2/6 w-10/12'>
          <img src="src\assets\air-jordan-1-low-og-wolf-grey-shoes-WcxvLP.webp" alt="" className='w-full'/>
          <ul className='flex flex-col items-start justify-start'>
            <li className='font-semibold text-sm text-orange-600'>Available</li>
            <li className='font-semibold'>Air Zoom Victory</li>
            <li className='text-gray-400 text-sm'>Track & Field</li>
            <li className='text-gray-400 text-sm'>1 color</li>
            <li className='font-semibold font-[Roboto] text-xs'>$ 210</li>
          </ul>
        </div>
        <div className='flex flex-col md:w-2/6 w-10/12'>
          <img src="src\assets\air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0.webp" alt="" className='w-full'/>
          <ul className='flex flex-col items-start justify-start'>
            <li className='font-semibold text-sm text-orange-600'>Available</li>
            <li className='font-semibold'>Air Zoom Victory</li>
            <li className='text-gray-400 text-sm'>Track & Field</li>
            <li className='text-gray-400 text-sm'>1 color</li>
            <li className='font-semibold font-[Roboto] text-xs'>$ 230</li>
          </ul>
        </div>
        <div className='flex flex-col md:w-2/6 w-10/12'>
          <img src="src\assets\air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp.webp" alt="" className='w-full'/>
          <ul className='flex flex-col items-start justify-start'>
            <li className='font-semibold text-sm text-orange-600'>Available</li>
            <li className='font-semibold'>Air Zoom Victory</li>
            <li className='text-gray-400 text-sm'>Track & Field</li>
            <li className='text-gray-400 text-sm'>1 color</li>
            <li className='font-semibold font-[Roboto] text-xs'>$ 240</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card3;
