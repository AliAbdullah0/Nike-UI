import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Sidebar() {
  const [SideDropDown,setSideDropDown] = useState(false)
  const [SideDropDownGender,setSideDropDownGender] = useState(false)

  const showSideDropDown = ()=>{
    setSideDropDown((prev)=>!prev)
  }
  const showSideDropDownGender = ()=>{
    setSideDropDownGender((prev)=>!prev)
  }
  return (
    <>
    <div className='flex lg:flex-col items-center lg:w-1/6 cursor-pointer' >
        <div className='w-full lg:h-screen flex lg:flex-col flex-col items-center lg:items-start p-2 lg:gap-4 gap-1 sm:text-sm'>
          <div className='w-full ml-3 flex items-center lg:items-start flex-col'>
            <img src="src\assets\nike.png" alt="" className='w-1/5'/>
            <h3 className='font-semibold text-lg font-[Roboto]'>Win on Air (13)</h3>
            <div className='font-semibold text-base font-[Roboto] flex gap-4 mt-3'>Pickup Today<div className='w-10 bg-slate-200 rounded-3xl flex items-center justify-start'><div className='h-4 bg-white rounded-full w-4 ml-1'></div></div></div>
          </div>
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-300 '></div>
          <div>
            <ul className='font-semibold font-[Roboto] ml-3 mb-4'>
              <li><Link to="#">Sprinting</Link></li>
              <li><Link to="#">Distance</Link></li>
              <li><Link to="#">Field</Link></li>
            </ul>
          </div>
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-300 '></div>
          <div className='flex lg:flex-col lg:gap-4 lg:items-start lg:justify-normal justify-center items-center flex-wrap lg:text-sm text-sm font-light font-[Roboto]'>

          <div className='flex flex-col gap-3'>
            <div className='flex gap-2 w-full items-center ml-3 font-medium'><h2>Sales & Offers</h2><svg className='w-3 rotate-180' onClick={showSideDropDown} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg></div>
            { SideDropDown &&<div className='flex-col gap-2 w-full ml-3 font-semibold font-[Roboto] flex'>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" className='rounded-md'/>
                <h3>Extra 25% Off Styles</h3>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" />
                <h3>Sale</h3>
              </div>
            </div>
            }
          </div>
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-300 '></div>
          <div className='ml-3 gap-4'>
            <div className='flex gap-2 font-medium '>Gender<svg onClick={showSideDropDownGender} className='w-3 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg></div>
            { SideDropDownGender &&<div className='flex-col gap-2 mt-2 w-full font-semibold font-[Roboto] flex'>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" className='rounded-md'/>
                <h3>Male</h3>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" />
                <h3>Female</h3>
              </div>
            </div>
            }
            </div>
          
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-300 '></div>
          <div className='ml-3 gap-4'>
            <div className='flex gap-2 font-medium  '>Color<svg className='w-3 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
            </div>
          </div>
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-300 '></div>
          <div className='ml-3 gap-4'>
            <div className='flex gap-2 font-medium  '>Shop By Price<svg className='w-3 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
            </div>
          </div>
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-300 '></div>

          <div className='ml-3 gap-4'>
            <div className='flex gap-2 font-medium  '>Sports & Activeties (1)<svg className='w-3 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
            </div>
          </div>
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-300 '></div>

          <div className='ml-3 gap-4'>
            <div className='flex gap-2 font-medium  '>Collections<svg className='w-3 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
            </div>
          </div>
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-300 '></div>

          <div className='ml-3 gap-4'>
            <div className='flex gap-2 font-medium  '>Shoe Height<svg className='w-3 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
            </div>
          </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default Sidebar;
