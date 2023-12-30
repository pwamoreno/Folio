import React from 'react';
import Image from 'next/image';
import about from '../assets/about.png';
import aboutImage from '../assets/aboutImage.png';

const About = () => {
  return (
    <div className='bg-secondary-color xl:ml-[83px] flex flex-col items-end' id='about'>
      <div className='flex xl:pr-[83px] md:pr-[40px] pr-8'>
        <p className='font-poppins xl:text-2xl text-1xl pt-12 text-primary-color'>
          About Me 
        </p>
        <hr className='bg-primary-color w-[52px] p-[1px] border-none xl:mt-[62px] mt-[58px] ml-1' />
      </div>
      <div className='flex xl:flex-row flex-col px-8 pt-4'>
        <div className='xl:pl-[100px] xl:pt-[130px] xl:pb-[50px]'>
          <Image src={about} alt='about' className='xl:block xl:w-[700px] md:hidden md:w-[500px] w-full'/>
        </div>
        <div className='xl:pl-[5rem] xl:justify-center xl:flex xl:flex-col'>
          <h1 className='font-poppins font-medium xl:text-4xl md:text-2xl text-2xl text-primary-color pt-4'>
            About
          </h1>
          <p className='xl:w-[600px] font-poppins xl:pt-8 xl:leading-normal xl:text-2xl text-primary-color'>
            I am a software engineer having graduated from the University of Lagos with a Bsc in computer science, but I&apos;m 
            also a self taught designer that has found a niche in branding and user interface design. I am currently based 
            in Lagos, Nigeria.
          </p>
        </div>
        <div className='xl:pr-[83px] flex xl:items-end justify-center pb-[50px] pt-4'>
          <Image src={aboutImage} alt='about' className='xl:w-[500px] w-[200px]' />
        </div>
      </div>
    </div>
  )
}

export default About