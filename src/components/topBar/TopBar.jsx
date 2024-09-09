import React from 'react';
import { Link } from 'react-router-dom';
function TopBar() {
  return (
    <div className='w-full h-10 bg-slate-100 hidden items-center p-1 justify-between lg:flex'>
      <div className='flex gap-5 justify-center items-center ml-10'>
        <Link to="/jordan"><img src="src\assets\jordan-logo.png" alt="" className='h-5' /></Link>
        <Link to="https://www.nike.com/w/converse-akmjx"><img src="src\assets\corsair.png" alt="" className='h-5' /></Link>
      </div>
      <div className='mr-4'>
        <ul className='flex gap-2 items-center justify-center ml-auto'>
          <li className='text-xs text-gray-600 font-bold'><Link to=''>Find a Store</Link></li>
          <li className='text-lg font-thin text-gray-600'>|</li>
          <li className='text-xs text-gray-600 font-bold'><Link to=''>Help</Link></li>
          <li className='text-lg font-thin text-gray-600'>|</li>
          <li className='text-xs text-gray-600 font-bold'><Link to=''>Join Us</Link></li>
          <li className='text-lg font-thin text-gray-600'>|</li>
          <li className='text-xs text-gray-600 font-bold'><Link to=''>Sign In</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
