import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import relish from '../assets/relish.png';
import avenir from '../assets/avenir.png';
import crownBank from '../assets/crownBank.png';
import three from '../assets/thethree.png';
import sideArrow from '../assets/sideArrow.png';

const Projects = () => {
  return (
    <div className='xl:pl-[83px] pt-[70px] px-8' id='projects'>
      <div className='flex xl:pr-[83px] md:pr-[40px] pr-8'>
        <p className='font-poppins xl:text-2xl text-1xl pt-12 text-secondary-color'>
          Folio Projects
        </p>
        <hr className='bg-secondary-color w-[52px] p-[1px] border-none xl:mt-[62px] mt-[58px] ml-1' />
      </div>
      <div className='flex flex-col items-center xl:pt-16'>
        <Image src={relish} alt='relish' className='w-[983px]' />
        <h1 className='font-poppins text-secondary-color xl:text-5xl text-2xl font-bold xl:py-10 text-center'>
          RELISH
        </h1>
        <p className='font-poppins text-secondary-color xl:w-[740px] text-center xl:text-2xl text-1xl xl:pt-0 py-4'>
          RELISH is a high end restaurant that has deep roots in asian cooking. They mesh the diversity of asian cuisine with more
          contemporary dishes to give a unique blend of the best of both worlds. The web interfaces was made with react.  
        </p>
        <button className='py-8 xl:w-[200px] '>
          <Link className='md:block xl:mr-[31px] bg-secondary-color text-primary-color hover:border-tertiary-color font-poppins font-bold px-5 xl:py-4 md:py-1 py-4 rounded-full' href='#contact'>
            Live Demo
          </Link>
        </button>
      </div>
      <div className='xl:flex xl:flex-row  justify-center items-center pt-24'>
        <div className='xl:pr-4 flex flex-col items-center'>
          <Image src={avenir} alt='avenir' className='w-[600px]'/>
          <h1 className='pt-6 font-popins text-secondary-color xl:text-3xl xl:font-bold'>Avenir</h1>
          <p className='font-poppins text-secondary-color xl:w-[600px] pt-4 text-center'>
            Avenir is an AI tech startup that hopes to one day put themselves as a pioneer in AI development. The web interface was made with react.  
          </p>
          <button className='py-4 pt-6'>
            <Link className='md:block mr-[31px] bg-secondary-color text-primary-color hover:border-tertiary-color font-poppins font-bold px-5 md:py-1 py-2 rounded-full' href='#contact'>
              Live Demo
            </Link>
          </button>
        </div>
        <div className='xl:pl-4 xl:pr-[83px] xl:pt-0 pt-6 flex flex-col items-center'>
          <Image src={crownBank} alt='crownbank' className='w-[600px]' />
          <h1 className='pt-6 font-poppins text-secondary-color xl:text-3xl xl:font-bold'>Crown Bank</h1>
          <p className='font-poppins text-secondary-color xl:w-[600px] pt-4 text-center'>
            Crown Bank is a bank web app that emphasizes good and flexible card payments. The web interface was made with react.  
          </p>
          <button className='py-4 pt-6'>
            <Link className='md:block mr-[31px] bg-secondary-color text-primary-color hover:border-tertiary-color font-poppins font-bold px-5 md:py-1 py-2 rounded-full' href='#contact'>
              Live Demo
            </Link>
          </button>
        </div>
      </div>
      <div className='xl:mr-[55px] xl:mt-[150px] mt-[70px]'>
        <div className='w-full xl:h-[246px] h-[400px] bg-shadow-color flex xl:flex-row flex-col items-center justify-between xl:px-[120px]'>
          <Image src={three} alt='the three' className='xl:w-[166px] w-[120px] xl:pt-0 pt-6' />
          <p className='font-poppins text-secondary-color font-bold xl:text-2xl'>Check out my design projects here</p>
          <Link href='https://www.behance.net/pwamoreno/' className='cursor-pointer'><Image src={sideArrow} alt='arrow button' className='xl:w-[60px] w-[40px] xl:py-0 py-6' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Projects