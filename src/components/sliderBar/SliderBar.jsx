import React from 'react';
import { useState,useEffect } from 'react';
function SliderBar() {
  const [currentIndex,setCurrentIndex] = useState(0)

  const titlesArray = ['Look for Store Pickup on Checkout','Members:Free Shipping on Orders Above $50+','Gear Up Mid-Season:USE EXTRA 25']

  const nextTitle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % titlesArray.length);
  };

  const prevTitle = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + titlesArray.length) % titlesArray.length);
  };
  const myList = titlesArray.map((item)=>{
    return item
  })
  useEffect(() => {
    const intervalId = setInterval(nextTitle, 3000); // Change title every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);
  return (
  <>
   <div className='w-full p-4 bg-slate-100 flex items-center justify-center lg:text-[13px] text-[10px] text-gray-600 font-[Roboto] font-semibold' onLoad={prevTitle}>{myList[currentIndex]}</div>
  </>
  );
}

export default SliderBar;
