import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { useState } from 'react';
import TopBar from '../topBar/TopBar';
function Header() {

  const [dropDown,setDropDown] = useState(false);
  const [dropDown2,setDropDown2] = useState(false);
  const [dropDown3,setDropDown3] = useState(false);
  const [dropNavbar,setDropNavbar] = useState(false)

  const openDropDown = ()=>{
    setDropDown(true)
    setDropDown2(false)
    setDropDown3(false)

  }
  const closeDropDown = ()=>{
    setDropDown(false)
    
  }
  const openDropDown2 = ()=>{
    setDropDown2(true)
    setDropDown3(false)
    setDropDown(false)
  }
  const closeDropDown2 = ()=>{
    setDropDown2(false)
    
  }
  const openDropDown3 = ()=>{
    setDropDown(false)
    setDropDown2(false)
    setDropDown3(true)
  }
  const closeDropDown3 = ()=>{
    setDropDown3(false)
  }

  const openNavbar = ()=>{
    setDropNavbar((prev)=>!prev)
  }

  return (
    <>
    <TopBar/>
    <div className='w-full shadow-sm flex items-center justify-between p-1 cursor-pointer'>
      <div>
        <NavLink to='/' className="font-bold font-[Roboto]"><img src="src\assets\nike.png" alt="nike-logo" className='h-12 ml-7'/></NavLink>
      </div>
      <div>
        <ul className='hidden w-full md:flex items-center justify-center gap-5 md:text-sm ml-20 lg:text-base'>
          <li>
            <Link to='/' className="font-semibold font-[Roboto] hover:border-b-2 hover:transition duration-200 delay-0 ease-in-out border-black " onMouseEnter={openDropDown}>New & Featured</Link>
          </li>
          <li>
            <Link to='/mens' className="font-semibold font-[Roboto] hover:border-b-2 hover:transition duration-200 delay-0 ease-in-out border-black " onMouseEnter={openDropDown2}>Men</Link>
          </li>
          <li>
          <NavLink to='/womens' className="font-semibold font-[Roboto] hover:border-b-2 hover:transition duration-200 delay-0 ease-in-out border-black"  onMouseEnter={openDropDown3}>Women</NavLink>

          </li>
          <li>
          <NavLink to='/kids' className="font-semibold font-[Roboto] hover:border-b-2 hover:transition duration-200 delay-0 ease-in-out border-black">Kids</NavLink>
          </li>
          <li>
          <NavLink to='/jordan' className="font-semibold font-[Roboto] hover:border-b-2 hover:transition duration-200 delay-0 ease-in-out border-black">Jordans</NavLink>
          </li>
        </ul>
      </div>
    <div className='flex items-center justify-center gap-1' >
        <div className='flex justify-center'>
        <img src="https://cdn-icons-png.flaticon.com/128/16790/16790924.png" alt="" className='h-8 lg:bg-slate-100 p-[3px] lg:-mr-2 lg:rounded-s-full' />
        <input type="search" className='-mr-3 hidden rounded-e-full p-[4px] pl-2 bg-slate-100 w-3/4 outline-none
        lg:block ' placeholder='Search' />
        </div>
        <img src="src\assets\contact icon.png" alt="" className='h-[23px] mr-1 lg:hidden block'/>
        <img src="src\assets\heart.png" alt="" className='h-[22px] mr-1'/>
        <Link to='/mens'><img src="src\assets\cart icon.png" alt="" className='h-6'/></Link>
        <img src="src\assets\menu icon.png" alt="" className='h-[23px] ml-1 lg:hidden flex' onClick={openNavbar} />
      </div>
    </div>
   {dropNavbar && <div>
      <ul className='flex flex-col justify-center items-center p-4 lg:hidden '  >
        <Link to='/'><li className='font-bold font-[Roboto] hover:underline text-slate-600'>New & Featured</li></Link>
        <Link to='/mens'><li className='font-bold font-[Roboto] hover:underline text-slate-600'>Men</li></Link>
        <Link to='/womens'><li className='font-bold font-[Roboto] hover:underline text-slate-600'>Women</li></Link>
        <Link to='/kids'><li className='font-bold font-[Roboto] hover:underline text-slate-600'>Kids</li></Link>
        <Link to='/jordan'><li className='font-bold font-[Roboto] hover:underline text-slate-600'>Jordans</li></Link>
      </ul>
    </div>}
    {dropDown && <div className='w-full flex justify-evenly p-10 shadow-md gap-3 cursor-pointer' onMouseLeave={closeDropDown}>
      <div className='flex flex-col gap-5 justify-center items-center'>
        <div>
        <ul>
          <li className='font-bold font-[Roboto] text-sm'>Limted Time Offer!</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Upto 25% off!</Link></li>
        </ul>
        </div>
        <div>
          <ul>
          <li className='font-bold font-[Roboto] text-sm'>Get set for school!</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Shop the collection</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Bags & Bagpacks</Link></li>
          </ul>
        </div>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>New & Featured</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>New Arrivals</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Upcomings</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Featured</Link></li>
          </ul>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>Trending</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>ACG</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Retro Running</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Armory Navy Shop</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Shop Sport</Link></li>

          </ul>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>Shop Classics</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Dunk</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Air Jordan 1</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Air Force</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Air Max</Link></li>
          </ul>
      </div>
    </div>}
    {dropDown2 && <div className='w-full flex justify-evenly p-10 shadow-md gap-3 cursor-pointer' onMouseLeave={closeDropDown2} >
      <div className='flex flex-col gap-5 items-center'>
        <div>
        <ul>
          <li className='font-bold font-[Roboto] text-sm'>Limted Time Offer!</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Upto 25% off!</Link></li>
        </ul>
        </div>
        <div>
          <ul>
          <li className='font-bold font-[Roboto] text-sm'>Get set for school!</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Shop the collection</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Bags & Bagpacks</Link></li>
          </ul>
        </div>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>New & Featured</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>New Arrivals</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Upcomings</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Featured</Link></li>
          </ul>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>Shoes</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>All Shoes </Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Lifestyle</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Jordan</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Classics</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Sports</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Air Jordan 1</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Air Force 1</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Air Max</Link></li>

          </ul>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>Clothing</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>All Clothing</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Hoodies</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Shirts</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Sweatshirts</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Jackets</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Uppers</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Trousers</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Shorts</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Vests</Link></li>
          </ul>
      </div>
    </div>}
    {dropDown3 && <div className='w-full flex justify-evenly p-10 shadow-md gap-3 cursor-pointer' onMouseLeave={closeDropDown3} >
      <div className='flex flex-col gap-5 items-center'>
        <div>
        <ul>
          <li className='font-bold font-[Roboto] text-sm'>Limted Time Offer!</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Upto 25% off!</Link></li>
        </ul>
        </div>
        <div>
          <ul>
          <li className='font-bold font-[Roboto] text-sm'>Get set for school!</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Shop the collection</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Bags & Bagpacks</Link></li>
          </ul>
        </div>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>New & Featured</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>New Arrivals</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Upcomings</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Featured</Link></li>
          </ul>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>Shoes</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>All Shoes </Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Lifestyle</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Jordan</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Classics</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Sports</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Air Jordan 1</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Air Force 1</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Air Max</Link></li>

          </ul>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>Clothing</li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>All Clothing</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Hoodies</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Shirts</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Sweatshirts</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Jackets</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Uppers</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Trousers</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Shorts</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Plus Size</Link></li>
          <li><Link to='' className='text-xs text-gray-600 font-bold hover:underline'>Matching sets</Link></li>
          </ul>
      </div>
    </div>}
    </>
  );
}

export default Header;
