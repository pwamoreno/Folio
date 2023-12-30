import React, { useState} from 'react';
import Image from 'next/image';
import logo from '../assets/Logo.png';
import button from '../assets/MenuButton.png';
import cancel from '../assets/CancelMenu.png';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='w-full flex md:px-20 px-7 pt-12  justify-between items-center'>
      <Image src={logo} className='w-[59px] h-[38px]' alt='logo' />
      <div className='flex'>
        <button>
          <a className='hidden md:block mr-[31px] bg-secondary-color text-primary-color hover:bg-accent-color font-poppins font-bold px-4 py-2 rounded-full' href='#contact'>
            Contact
          </a>
        </button>
        {toggleMenu
          ? <a className='w-[40px] h-[40px]' onClick={() => setToggleMenu(false)}
          >
            <Image src={cancel} alt='menu button' />
          </a>
          : <a className='w-[40px] h-[40px]' onClick={() => setToggleMenu(true)}
          >
            <Image src={button} alt='menu button' />
          </a>
        }
        {toggleMenu &&(
          <div className='flex justify-start items-start flex-col text-start bg-shadow-color text-secondary-color rounded-[5px] p-8 mt-4 top-[80px] md:right-4 right-0 min-w-[210px] absolute shadow-2xl animate-scale-up-center'>
            <div>
              <p className='hover:text-accent-color'><a href='#home'>Home</a></p>
              <p className='hover:text-accent-color'><a href='#about'>About</a></p>
              <p className='hover:text-accent-color'><a href='#projects'>Projects</a></p>
              <p className='hover:text-accent-color'><a href='#stack'>Stack</a></p>
              <p className='hover:text-accent-color'><a href='#contact'>Reach Me</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header