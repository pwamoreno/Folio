import React from 'react';
import Image from 'next/image';
import stackImage from '../assets/stackImage.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';

const Stack = () => {
  return (
    <div className='bg-shadow-color w-full flex flex-col xl:mt-[150px] mt-[75px]' id='stack'>
      <div className='flex flex-col items-end'>
        <div className='flex xl:pr-[83px] md:pr-[40px] pr-8'>
          <p className='font-poppins xl:text-2xl text-1xl pt-12 text-secondary-color'>
            Tech Stack
          </p>
          <hr className='bg-secondary-color w-[52px] p-[1px] border-none xl:mt-[62px] mt-[58px] ml-1' />
        </div>
      </div>
      <div className='flex justify-between px-12'>
        <div className='xl:pl-[83px]'>
          <Image src={stackImage} alt='stack' className='xl:w-[328px] w-[228px]' />
        </div>
        <div className='xl:w-6/12 flex xl:flex-row flex-col justify-between items-center xl:pr-[83px] xl:pt-0 pt-6 pb-6'>
          <Image src={html} alt='html' className='xl:w-[61px] w-[31px]' />
          <Image src={css} alt='css' className='xl:w-[62px] w-[32px]' />
          <Image src={js} alt='javascript' className='xl:w-[69px] w-[39px]' />
          <Image src={react} alt='react' className='xl:w-[78px] w-[48px]' />
        </div>
      </div>
    </div>
  )
}

export default Stack

