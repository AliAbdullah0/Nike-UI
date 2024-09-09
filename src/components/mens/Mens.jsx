import React, { useState } from 'react';
import Card from '../card/Card';
import Card2 from '../card/Card2';
import SliderBar from '../sliderBar/SliderBar';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Card3 from '../card/Card3';
import Card4 from '../card/Card4';
function Mens() {

  return (
    <>
      <SliderBar/>
      <div className='w-full lg:flex'>
        <Sidebar/>
        <div className='flex flex-col items-center justify-center lg:w-5/6 w-full'>
        <Card4/>
        <Card/>
        <Card3/>
        <Card2/>
        </div>    
      </div>
    </>
  );
}

export default Mens;
