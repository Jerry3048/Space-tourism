import { useState } from 'react';
import { useNavigate, useLocation } from "react-router";


function Nav() {
  const[menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  


  return (
    <nav className= "flex justify-between items-center  text-white lg:ml-[100px] ml-[40px] lg:pt-[60px] pr-10 md:pr-0">
        <div className='flex items-center justify-between space-x-10 z-10 relative xl:w-[50%] w-[47%]'>
          <img src="../assets/shared/logo.svg" alt="Logo" className="w-15 h-15 mt-5 lg:mt-0" />
          <div className='border border-gray-700 w-[90%] hidden lg:block '></div>
        </div>
       <ul className='absolute font-BarlowCondensed lg:w-[50%] md:w-[80%] space-x-[15%] sm:space-x-[12%] text-[100%] p-8 pr-10 lg:pr-20 bg-gray-500/20 backdrop-blur-md right-0 z-0 justify-end items-center md:flex hidden'>
        <li
          onClick={() => navigate('/')}
          className={`cursor-pointer hover:underline hover:underline-offset-35 hover:decoration-2 hover:decoration-gray-500 ${
            isActive('/') ? 'underline underline-offset-35 decoration-2' : ''
          }`}
        >
          <span className='font-bold'>00</span> Home
        </li>

        <li
          onClick={() => navigate('/destination')}
          className={`cursor-pointer hover:underline hover:underline-offset-35 hover:decoration-3 hover:decoration-gray-500 ${
            isActive('/destination') ? 'underline underline-offset-35 decoration-3' : ''
          }`}
        >
          <span className='font-bold'>01</span> Destination
        </li>

        <li
          onClick={() => navigate('/crew')}
          className={`cursor-pointer hover:underline hover:underline-offset-35 hover:decoration-3 hover:decoration-gray-500 ${
            isActive('/crew') ? 'underline underline-offset-35 decoration-3' : ''
          }`}
        >
          <span className='font-bold'>03</span> Crew
        </li>

        <li
          onClick={() => navigate('/technology')}
          className={`cursor-pointer hover:underline hover:underline-offset-35 hover:decoration-3 hover:decoration-gray-500 ${
            isActive('/technology') ? 'underline underline-offset-35 decoration-3' : ''
          }`}
        >
          <span className='font-bold'>03</span> Technology
        </li>
      </ul>

        <img 
        src="src/assets/shared/icon-hamburger.svg" 
        alt="Menu" 
        className="w-9 h-6 cursor-pointer block sm:hidden"
        onClick={() => setMenuOpen(true)} />

        <div className={`fixed top-0 right-0 z-50 flex flex-col items-start w-[70%] md:hidden h-full backdrop-blur-md bg-gray-500/30 p-8  space-y-[30%] transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}>
          <img
            src="src/assets/shared/icon-close.svg"
            alt="Close"
            className="w-8 h-8  cursor-pointer self-end"
            onClick={() => setMenuOpen(false)}
          />
          <ul className="text-white space-y-8 text-left w-full font-BarlowCondensed">
            <li onClick={() => { navigate('/') }}><span className='font-bold'>00</span> Home</li>
            <li onClick={() => { navigate('/destination') }}><span className='font-bold'>01</span> Destination</li>
            <li onClick={() => { navigate('/crew') }}><span className='font-bold'>02</span> Crew</li>
            <li onClick={() => { navigate('/technology') }}><span className='font-bold'>03</span> Technology</li>
          </ul>
        </div>
 </nav>
  )

}

export default Nav
