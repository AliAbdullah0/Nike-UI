import React from 'react';
import Hero from '../heroLanding/Hero';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    {/* 1st part */}
    <Hero/>
    {/* 2nd part */}
    <div className='flex w-full flex-col items-center gap-9 cursor-pointer'>
      <div>
        <ul className='flex flex-col gap-3 items-center'>
          <li className='md:text-[3rem] lg:font-extrabold font-[Anton] font-bold text-[2rem] leading-[1.2] mt-4 '>WIN ON AIR</li>
          <div className='flex items-center flex-col text-xs text-wrap md:text-base font-[Roboto]'>
          <li>Meet the next genration of Nike Air.</li>
          <li>Engineered to the exact specifications of championship athletes.</li>
          </div>
          <li>
            <div className='flex gap-5 font-[Roboto]'>
              <Link><button className='bg-black text-white font-semibold rounded-3xl p-2 pl-3 pr-3 lg:text-lg text-base'>Experience Air</button></Link>
              <Link><button className='bg-black text-white font-semibold rounded-3xl p-2 pl-3 pr-3 lg:text-lg text-base'>Shop Air</button></Link>
            </div>
          </li>
        </ul>
      </div>
      {/* 3rd part */}
      <div className='flex flex-col w-full'>
        <div className='flex w-full md:flex-row flex-col'>
          <div className='md:w-1/2 w-full flex flex-col justify-end'>
            <img src="src\assets\75zzl617.png" alt="" className='w-full'/>
            <ul className='absolute ml-9 mb-6 flex flex-col gap-2 font-[Roboto] tracking-wide'>
              <li className='text-white text-base md:text-xl'>Summer-Hoops Essential</li>
              <li className='text-white text-xl md:text-3xl'>Sabrina 2 'Conductor'</li>
              <li className='bg-white rounded-3xl flex items-center justify-center p-1 w-1/4 pt-1 pb-1 mt-2 font-semibold font-[Roboto] hover:bg-slate-300'><Link>Shop</Link></li>
            </ul>
          </div> 
          <div className='md:w-1/2 w-full flex flex-col justify-end'>
          <img src="src\assets\k51svzc2.png" alt="" className='w-full'/>
            <ul className='absolute ml-9 mb-6 flex flex-col gap-2 font-[Roboto] tracking-wide'>
              <li className='text-white text-base md:text-xl'>Back To School</li>
              <li className='text-white text-xl md:text-3xl'>A Great Year Starts Here</li>
              <li className='bg-white rounded-3xl flex items-center justify-center p-1 w-1/4 pt-1 pb-1 mt-2 font-semibold font-[Roboto] hover:bg-slate-300'><Link>Shop</Link></li>
            </ul>
            
          </div>
        </div>
        <div className='flex-col md:flex-row flex'>
        <div className='md:w-1/2 w-full flex flex-col justify-end'>
          <img src="src/assets/Nikebrand.jpg" alt="" className='w-full h-full'/>
            <ul className='absolute ml-9 mb-6 flex flex-col gap-2 font-[Roboto] tracking-wide'>
              <li className='text-white text-base md:text-xl'>Nike</li>
              <li className='text-white text-xl md:text-3xl'>Just Do It</li>
              <li className='bg-white rounded-3xl flex items-center justify-center p-1 md:w-1/2 w-[65%] pt-1 pb-1 mt-2 font-semibold font-[Roboto] hover:bg-slate-300'><Link to='/home'>Shop</Link></li>
            </ul>
            
          </div>
          <div className='md:w-1/2 w-full flex flex-col justify-end'>
          <img src="src/assets/jgyjypu6.png" alt="" className='w-full'/>
            <ul className='absolute ml-9 mb-6 flex flex-col gap-2 font-[Roboto] tracking-wide'>
              <li className='text-white text-base md:text-xl'>MLB All-Star Week 24</li>
              <li className='text-white text-xl md:text-3xl'>Gear Up With The Kid</li>
              <li className='bg-white rounded-3xl flex items-center justify-center p-1 md:w-1/4 w-[32%] pt-1 pb-1 mt-2 font-semibold font-[Roboto] hover:bg-slate-300'><Link to='/kids'>Shop</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* 4rt Part */}
      <div>
        <ul className='flex flex-col gap-3 items-center'>
          <li className='md:text-[3rem] lg:font-extrabold font-[Anton] font-bold text-[2rem] leading-[1.2]'>NEW THIS WEEK</li>
          <li>
            <div className='flex gap-5'>
              <Link><button className='bg-black text-white font-semibold font=[Roboto] rounded-3xl p-2 pl-3 pr-3 lg:text-lg text-base'>Shop New Arrivals</button></Link>
            </div>
          </li>
        </ul>
      </div>
      {/* 5th part */}
      <div>
        <img src="src\assets\3rgn9rbj.png" alt=""/>
      </div>
      {/* 6th part */}
      <div className='flex items-center w-[96%] flex-col '>
        <div className='w-full flex ml-6 justify-between items-center p-1'>
          <h2 className=' lg:font-extrabold font-[Anton] tracking-wide font-bold md:text-[2rem] text-[1.5rem] leading-[1.2] '>SHOP BY CLASSICS</h2>
          <h3 className='mr-7'><Link to='/mens' className='font-light md:text-base text-sm border-b-2 hover:border-b-4 border-b-black hover:transition duration-200 ease-in-out'>View More</Link></h3>
        </div>
        <div className='flex w-full flex-col md:flex-row gap-[5px] justify-center mt-3 overflow-hidden'>
          <div className='overflow-hidden  font-semibold font-[Anton] tracking-wider text-2xl'>
          <Link to='/mens' className='flex items-center flex-col'><img src="src\assets\air-zoom-lj-elite-track-field-jumping-spikes-pSDffB.png" alt="" className='md:w-full sm:w-5/6 w-3/4 hover:transition hover:scale-[1.1] duration-100 ease-in-out z-0 relative'/>
          <h3 className='z-10 relative'>AIR ZOOM</h3></Link>
          </div>
          <div className='overflow-hidden font-semibold font-[Anton] tracking-wider md:text-2xl text-xl'>
          <Link to='/mens' className='flex items-center flex-col'><img src="src\assets\alphafly-2-mens-road-racing-shoes-Bstm8X.png" alt="" className='md:w-full hover:transition  sm:w-5/6 w-3/4 hover:scale-[1.1] duration-100 ease-in-out '/>
          <h3 className='z-10 relative'>ALPHAFLY</h3></Link>
       
          </div>
          <div className='overflow-hidden  font-semibold font-[Anton] tracking-wider md:text-2xl text-xl'>
          <Link to='/mens' className='flex items-center flex-col'> <img src="src\assets\air-zoom-victory-track-field-distance-spikes-MsLPjj.png" alt="" className='md:w-full sm:w-5/6 w-3/4 hover:transition hover:scale-[1.1] duration-100 ease-in-out '/>
          <h3 className='z-10 relative'>AIR ZOOM VICTORY</h3></Link>
       
          </div>
          <div className='overflow-hidden  font-semibold font-[Anton] tracking-wider md:text-2xl text-xl'>
          <Link to='/mens' className='flex items-center flex-col'><img src="src\assets\air-zoom-maxfly-track-field-sprinting-spikes-C2ZBRP.png" alt="" className='md:w-full sm:w-5/6 w-3/4 hover:transition hover:scale-[1.1] duration-100 ease-in-out '/>
          <h3 className='z-10 relative'>AIR ZOOM MAXFLY</h3></Link>
          </div>
          <div className='overflow-hidden  font-semibold font-[Anton] tracking-wider md:text-2xl text-xl'>
          <Link to='/mens' className='flex items-center flex-col'><img src="src\assets\pegasus-41-big-kids-road-running-shoes-fctJhk.png" alt="" className='md:w-[99%] hover:transition sm:w-5/6 w-3/4 hover:scale-[1.1] duration-100 ease-in-out '/>
          <h3 className='z-10 relative'>PEGASUS</h3></Link>
          </div>
        </div>
          
      </div>
    </div>
    <div className='w-full flex md:flex-row flex-col justify-evenly p-10 font-[Roboto] border-t-2 mt-6 cursor-pointer' >
      <div className='flex flex-col gap-5 '>
        <div>
        <ul>
          <li className='font-bold font-[Roboto] text-sm'>Limted Time Offer!</li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Upto 25% off!</Link></li>
        </ul>
        </div>
        <div>
          <ul>
          <li className='font-bold font-[Roboto] text-sm'>Get set for school!</li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Shop the collection</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Bags & Bagpacks</Link></li>
          </ul>
        </div>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>New & Featured</li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>New Arrivals</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Upcomings</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Featured</Link></li>
          </ul>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>Shoes</li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>All Shoes </Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Lifestyle</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Jordan</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Classics</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Sports</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Air Jordan 1</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Air Force 1</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Air Max</Link></li>
          </ul>
      </div>
      <div>
      <ul>
          <li className='font-bold font-[Roboto] text-sm'>Clothing</li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>All Clothing</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Hoodies</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Shirts</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Sweatshirts</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Jackets</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Uppers</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Trousers</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Shorts</Link></li>
          <li><Link to='' className='md:text-base text-sm text-gray-500 font-bold hover:underline'>Vests</Link></li>
          </ul>
      </div>
    </div>
    </>
  );
}

export default Home;
