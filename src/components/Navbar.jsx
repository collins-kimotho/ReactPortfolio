import React, { useState } from 'react'
import '../constants'
import { LINKS } from '../constants'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
        <div className='flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg'>
            <div className='text-white font-semibold text-lg uppercase'>
                <a href='/'>Jason Root</a>
            </div>

            <div className="hidden md:flex space-x-8">
                {LINKS.map((link, index) => (
                    <a href={link.href} key={index} className='text-white hover:text-stone-400 transition duration-300'>{link.label}</a>
                ))}
            </div>
            <div className='md:hidden'>
                <button onClick={handleClick} className='text-white focus:outline-none'>
                    {isOpen ? (<IoMdClose/>) : (<GiHamburgerMenu/>) }
                </button>
            </div>
        </div>

        {isOpen && (
            <div className='md:hidden p-2 bg-stone-950.30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6x; mx-auto'>
                {LINKS.map((link, index) => (
                    <a href='link.href' key={index} className='text-white hover:text-stone-400 transition duration-300' onClick={handleClick}>{link.label}</a>
                ))}
            </div>
        )}
    </nav>
  )
}
export default Navbar;