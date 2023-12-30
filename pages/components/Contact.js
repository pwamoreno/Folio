import React from 'react';
import { AiFillTwitterCircle, AiFillInstagram, AiFillDribbbleCircle, AiFillCrown } from 'react-icons/ai';
import Image from 'next/image';
import upArrow from '../assets/upArrow.png';

const Contact = () => {
  return (
    <div className='bg-shadow-color xl:px-[83px] px-12' id='contact'>
      <div className='pt-[100px] xl:block flex flex-col items-center'>
        <h1 className='text-secondary-color text-4xl font-bold font-poppins '>Let's talk!</h1>
        <button className='py-8 xl:w-[200px] '>
          <a className='md:block xl:mr-[31px] bg-secondary-color text-primary-color hover:border-tertiary-color font-poppins font-bold px-5 xl:py-4 md:py-1 py-4 rounded-full' href='#contact'>
            Get in touch
          </a>
        </button>
      </div>
      <div className='flex xl:flex-row flex-col items-center '>
        <div className='xl:pt-[100px]'>
          <p className='text-secondary-color font-poppins text-1xl font-bold xl:py-3 py-5'>Reach out @ +234 8104832511</p>
          <p className='text-secondary-color font-poppins text-1xl font-bold xl:py-3 py-5'>morenoallimbi@yahoo.com</p>
          <div className='flex gap-8 pt-5 text-3xl'>
            <a href='https://twitter.com/pwa_moreno'><AiFillTwitterCircle className='text-secondary-color cursor-pointer'/></a>
            <a href='https://www.instagram.com/pwamoreno/'><AiFillInstagram className='text-secondary-color cursor-pointer'/></a>
            <a href='https://dribbble.com/SP4CE'><AiFillDribbbleCircle className='text-secondary-color cursor-pointer'/></a>
            <a href='/'><AiFillCrown className='text-secondary-color' /></a>
          </div>
        </div>
        <div className='xl:pt-[100px] pt-5 xl:pl-[500px]'>
          <a href='/#projects'><p className='text-secondary-color font-poppins text-1xl font-bold py-5'>Work</p></a>
          <a href='/#about'><p className='text-secondary-color font-poppins text-1xl font-bold py-5'>About</p></a>
          <a href='/#stack'><p className='text-secondary-color font-poppins text-1xl font-bold py-5'>Stack</p></a>
        </div>
        <div className='xl:pt-[100px] xl:pl-[250px]'>
          <a href='https://github.com/pwamoreno' className='cursor-pointer'><p className='text-secondary-color font-poppins text-1xl font-bold py-5'>Github</p></a>
          <a href='https://www.linkedin.com/in/pwamoreno/' className='cursor-pointer'><p className='text-secondary-color font-poppins text-1xl font-bold py-5'>LinkedIn</p></a>
          <a href='https://www.behance.net/pwamoreno' className='cursor-pointer'><p className='text-secondary-color font-poppins text-1xl font-bold py-5'>Behance</p></a>
        </div>
      </div>
      <div className='flex xl:justify-end xl:py-[50px] py-[20px]'>
        <a href='/#home' className='cursor-pointer'><Image src={upArrow} alt='up button' className='xl:w-[56px] w-[40px]'/></a>
      </div>
    </div>
  )
}

export default Contact