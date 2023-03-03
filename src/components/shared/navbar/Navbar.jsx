import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white sticky top-0 z-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Link to='/'><span className='text-xl font-bold'><span className="text-sky-400">News</span><span className="text-sky-600">line</span></span></Link>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link to='/' className='text-base font-medium text-blak-300 hover:text-sky-600 '>
                Home
              </Link>
              <Link to='/blog'  className='text-base font-medium text-blak-300 hover:text-sky-600'>
                Bolg
              </Link>
              <Link to='/about'  className='text-base font-medium text-blak-300 hover:text-sky-600'>
                About Us
              </Link>
            </div>
          </div>
          <div className='hidden md:block'>
            <Link
              to='/'
              className='inline-flex items-center px-4 py-2 bg-sky-400 border border-transparent rounded-md font-semibold text-white hover:bg-sky-600'
            >
              Subscribe
            </Link>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2  rounded-md text-sky-600  hover:text-white hover:bg-sky-600 focus:outline-none focus:bg-sky-600 focus:text-white transition duration-150 ease-in-out'
              aria-label='Main menu'
              aria-expanded={isOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <svg
                className='h-6 w-6 '
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className='px-2 pt-2 pb-3'>
          <Link
            to='/'
            className='block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-sky-600'
          >
            Home
          </Link>
          <Link
            to='/blog'
            className='block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-sky-600'
          >
            Blog
          </Link>
          <Link
            to='/about'
            className='block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-sky-600'
          >
            About Us
          </Link>
        </div>
        <div className='px-5 pt-2 pb-3'>
          <Link
            to='/'
            className=' px-3 py-2 rounded-md text-base font-medium text-white bg-sky-400 hover:bg-sky-600'
          >
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;