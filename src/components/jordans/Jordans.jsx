import React from 'react';
import { Link ,NavLink} from 'react-router-dom';
import { useState,useEffect } from 'react';
import SliderBar from '../sliderBar/SliderBar';

function Jordans() {

 
  return (
    <>
     <SliderBar/>
    <div className='flex flex-col w-full items-center justify-center p-8 mt-5'>
      <div className='w-[6%]'>
        <img src="src\assets\jordan-logo.png" alt="" className=''/>
      </div>
      <div className='w-full flex justify-center items-center p-2 mt-4 -mb-4 sticky z-10 top-0'>
        <ul className='flex flex-col md:flex-row gap-5 justify-center items-center font-semibold '>
          <li className='hover:transition hover:text-slate-500 ease-in-out duration-200'><Link to='/mens'>New Releases</Link></li>
          <li className='hover:transition hover:text-slate-500 ease-in-out duration-200'><Link to='/'>Jordan Basketball</Link></li>
          <li className='hover:transition hover:text-slate-500 ease-in-out duration-200'><Link to='/'>Purpose & Community</Link></li>
          <li className='hover:transition hover:text-slate-500 ease-in-out duration-200'><Link to='/mens'>Men</Link></li>
          <li className='hover:transition hover:text-slate-500 ease-in-out duration-200'><Link to='/womens'>Women</Link></li>
          <li className='hover:transition hover:text-slate-500 ease-in-out duration-200'><Link to='/kids'>Kids</Link></li>
        </ul>  
      </div>     
    </div>
    <div className='w-full flex justify-center items-center'>
      <img src="src\assets\video snapshot.jpg" alt="" className='w-full'/>
    </div>
    <div>
        <ul className='flex flex-col gap-3 items-center'>
          <li className='md:text-[3rem] lg:font-extrabold font-[DM sans] font-semibold tracking-[-0.1rem] leading-[1.2] mt-5'>OUR TURN</li>
          <li className='flex items-center flex-col text-xs text-wrap md:text-base font-[Roboto]'>We Are Not Waiting On. History We're Making It.</li>
          <li>
            <div className='flex gap-5'>
              <Link><button className='bg-black text-white font-[600] font-[Sofia Condensed] rounded-3xl p-2 pl-3 pr-3 lg:text-lg text-base'>Let's Go</button></Link>
              <Link><button className='bg-black text-white font-[600] font-[Sofia Condensed] rounded-3xl p-2 pl-3 pr-3 lg:text-lg text-base'>Watch</button></Link>
            </div>
          </li>
        </ul>
      </div>
  <div className='flex flex-col items-center w-full justify-start mb-10 mt-4'>
  <div className='w-full text-extrabold font-[DM sans] md:text-4xl text-2xl md:tracking-wider mt-5 text-center lg:-ml-[10.1rem]'>
    <h2 className='lg:text-right'>LATEST FROM JORDAN STREETWEAR</h2>
  </div>
  <div className='w-full flex justify-center'>
    <div className='w-[90%] flex justify-evenly items-center p-2 gap-3 lg:flex-row flex-col'>
      <div className='flex flex-col gap-3 md:gap-0'>
        <Link to='/product1'>
          <img src="src/assets/kedqgu1k.png" alt="AIR JORDAN WOMENS KNIT VEST" className='w-full'/>
        </Link>
        <div>
          <h3 className='lg:text-xl md:text-lg text-lg font-[DM sans] font-bold tracking-tight'>AIR JORDAN <br />WOMENS KNIT VEST</h3>
          <button className='mt-2 px-3 py-2 bg-black text-sm font-[Roboto] font-bold hover:transition hover:bg-slate-800 duration-200 ease-linear text-white rounded-3xl'>Shop Now</button>
        </div>
      </div>
      <div className='flex flex-col '>
        <Link to='/product2'>
          <img src="src/assets/9t229bdi.png" alt="AIR JORDAN WOODMARK MENS FLEECE PULLOVER HOODIE" className='w-full'/>
        </Link>
        <div>
          <h3 className='lg:text-xl md:text-xl text-lg font-[DM sans] font-bold tracking-tight'>AIR JORDAN WOODMARK<br />MENS FLEECE PULLOVER HOODIE</h3>
          <button className='mt-2 px-3 py-2 bg-black text-sm font-[Roboto] font-bold hover:transition hover:bg-slate-800 duration-200 ease-linear text-white rounded-3xl'>Shop Now</button>
        </div>
      </div>
      <div className='flex flex-col'>
        <Link to='/product3'>
          <img src="src/assets/dqdz7z6t.png" alt="AIR JORDANS WOMENS DENIM SKIRT" className='w-full'/>
        </Link>
        <div>
          <h3 className='lg:text-xl md:text-xl text-lg font-[DM sans] font-bold tracking-tight'>AIR JORDANS <br />WOMENS DENIM SKIRT</h3>
          <button className='mt-2 px-3 py-2 bg-black text-sm font-[Roboto] font-semibold hover:transition hover:bg-slate-800 duration-200 ease-linear text-white rounded-3xl'>Shop Now</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='w-full flex justify-center items-center'>
      <img src="src\assets\lxtrtkxg.png" alt="" className='w-[95%] mt-10'/>
</div>
<div className='mt-4'>
        <ul className='flex flex-col items-center p-2 gap-1'>
        <li className='flex items-center flex-col text-xs text-wrap md:text-base font-[Roboto]'>All Gas.And Brakes.</li>
          <li className='md:text-[3.3rem] lg:font-bold font-[DM sans] tracking-[0.1rem] leading-[1.1] text-[2rem] font-semibold '>LUKA 3</li>
          <li className='flex items-center flex-col text-xs md:font-semibold text-wrap md:text-base text-gray-800 font-[Roboto] md:tracking-wide text-center md:text-balance font-light'>Leave 'em in your rearview With Luka's latest ride designed To Help You</li>
          <li className='flex items-center flex-col text-xs font-light text-wrap md:font-semibold text-gray-800 md:text-base font-[Roboto] tracking-wide'>Create space and leave the buzzer beater</li>
          <li>
            <div className='flex gap-5'>
              <Link><button className='bg-black text-white font-[600] font-[Sofia Condensed] rounded-3xl p-[0.6rem] md:p-2 md:pl-4 md:pr-4 lg:text-lg text-base hover:transition hover:bg-slate-800 duration-200 ease-linear'>Shop</button></Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Jordans;
