import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
<footer className='mt-5 border-t-2 font-[Roboto]'>
   
    {/* end part */}
    <div className='w-full flex md:flex-row flex-col justify-evenly p-10 gap-3' >
      <div className='flex flex-col gap-6'>
        <ul className='flex flex-col gap-4 '>
          <li className='font-bold font-[Roboto] text-sm'>Resources</li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Gift Card</Link></li>
          <li className='text-sm text-gray-500 font-bold hover:underline'><Link>Find a Source</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Become a Member</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Site Feedback</Link></li>
        </ul>
      </div>
      <div>
      <ul className='flex flex-col gap-4 '>
          <li className='font-bold font-[Roboto] text-sm'>Help</li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Get Help</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Order Status</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Shipping & Delivery</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Returns</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Order Cancellation</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Payments</Link></li>
          </ul>
      </div>
      <div>
      <ul className='flex flex-col gap-4 '>
          <li className='font-bold font-[Roboto] text-sm'>Company</li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>About Nike </Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>News</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Careers</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Investors</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Purpose</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Sustaiability</Link></li>
          </ul>
      </div>
      <div>
      <ul className='flex flex-col gap-4 '>
          <li className='font-bold font-[Roboto] text-sm'>Promotions & Discounts</li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Student</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>MIlitary</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Teacher</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>First Responder & Medical Proffesionals</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Birthday</Link></li>
          </ul>
      </div>
      
    </div>
    <div>
        <ul className='flex gap-4 md:ml-[12rem] ml-9 mb-10 md:flex-row flex-col'>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>&copy;2024 Nike All Rights Reserved</Link></li>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>Guides</Link></li>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>Terms of Sales</Link></li>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>Terms of Use</Link></li>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>Nike Privacy Policy</Link></li>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>Your Privacy Choices</Link></li>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>CA Supply Chain Act</Link></li>

        </ul>
      </div>
</footer>
  );
}

export default Footer;
