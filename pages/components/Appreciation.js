import React from 'react';
import Image from 'next/image';
import thanks from '../assets/Thanks.png';

const Appreciation = () => {
  return (
    <div className='flex xl:flex-row md:flex-row flex-col xl:justify-between xl:px-[83px]'>
        <div>
            <h1 className='font-poppins text-secondary-color font-bold xl:text-5xl text-3xl xl:pt-[150px] pt-8 xl:px-0 px-12'>...And that&apos;s it!</h1>
            <p className='font-poppins text-secondary-color xl:text-2xl xl:w-[850px] xl:pt-[55px] pt-6 xl:px-0 px-12'>
                Thank you for taking the time out to go through my portfolio. Hopefully,
                you saw some things you like, and if you did you can hit me up for work.
                You&apos;ll find my details below. Pick whatever works for you. Thank you once again!
            </p>
        </div>
        <div className='xl:flex xl:justify-center items-center'>
            <Image src={thanks} alt='thanks'  className='xl:w-[288px] xl:pt-[250px] pt-6 xl:px-0 px-12'/>
        </div>
    </div>
  )
}

export default Appreciation