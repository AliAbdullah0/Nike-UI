import React from 'react';

function Card4() {
  return (
    <>
    <div className='flex-col w-full gap-3 p-2 flex md:flex-row items-center md:items-start'>
      <div className='flex flex-col md:w-2/6 w-10/12'>
        <img src="src\assets\alphafly-2-mens-road-racing-shoes-Bstm8X.png" alt="" className='w-full'/>
        <ul className='flex flex-col items-start justify-start'>
          <li className='font-semibold text-sm text-orange-600'>Available</li>
          <li className='font-semibold'>Air Zoom Victory</li>
          <li className='text-gray-400 text-sm'>Track & Field</li>
          <li className='text-gray-400 text-sm'>1 color</li>
          <li className='font-semibold font-[Roboto] text-xs'>$ 190</li>
        </ul>
      </div>
      <div className='flex flex-col md:w-2/6 w-10/12'>
        <img src="src\assets\pegasus-41-womens-road-running-shoes-tSbZGh.png" alt="" className='w-full'/>
        <ul className='flex flex-col items-start justify-start'>
          <li className='font-semibold text-sm text-orange-600'>Just In</li>
          <li className='font-semibold'>Air Zoom Victory</li>
          <li className='text-gray-400 text-sm'>Track & Field</li>
          <li className='text-gray-400 text-sm'>1 color</li>
          <li className='font-semibold font-[Roboto] text-xs'>$ 150</li>
        </ul>
      </div>
      <div className='flex flex-col md:w-2/6 w-10/12'>
        <img src="src\assets\alphafly-3-mens-road-racing-shoes-5gZBgL.png" alt="" className='w-full'/>
        <ul className='flex flex-col items-start justify-start'>
          <li className='font-semibold text-sm text-orange-600'>Just In</li>
          <li className='font-semibold'>Air Zoom Victory</li>
          <li className='text-gray-400 text-sm'>Track & Field</li>
          <li className='text-gray-400 text-sm'>1 color</li>
          <li className='font-semibold font-[Roboto] text-xs'>$ 200</li>
        </ul>
      </div>
    </div>
  </>
  );
}

export default Card4;
