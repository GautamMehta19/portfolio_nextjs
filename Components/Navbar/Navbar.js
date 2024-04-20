'use client'
import React from 'react';
import { AiFillHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed left-0 top-0 h-screen flex flex-col justify-center items-center bg-gray-50 bg-opacity-0 text-white px-4 py-2 z-50">
      {/* Social Media Icons */}
      {/* mobile screen */}
      <div className="fixed bottom-0 left-0 flex justify-evenly items-center bg-gray-50 bg-opacity-50 text-white px-4 py-2 z-50 w-full sm:hidden">
  <a href="https://www.facebook.com/gulati.gautam.9/" className="text-black hover:text-white hover:bg-black px-2 py-2 rounded-md mr-2"><FaFacebook size={24} /></a>
  <a href="https://www.instagram.com/gautii_19/" className="text-black hover:text-white hover:bg-black px-2 py-2 rounded-md mr-2"><FaInstagram size={24} /></a>
  <a href="https://github.com/GautamMehta19" className="text-black hover:text-white hover:bg-black px-2 py-2 rounded-md mr-2"><FaGithub size={24} /></a>
  <a href="https://www.linkedin.com/in/gautam-mehta-516052215/" className="text-black hover:text-white hover:bg-black px-2 py-2 rounded-md mr-2"><FaLinkedin size={24} /></a>
</div>

{/* large screen */}
<div className="hidden sm:flex flex-col justify-evenly items-center space-y-10">
  <a href="https://www.facebook.com/gulati.gautam.9/" target="_blank" rel="noreferrer" className="text-black hover:text-white hover:bg-black px-2 py-2 rounded-md"><FaFacebook size={24} /></a>
  <a href="https://www.instagram.com/gautii_19/" target="_blank" rel="noreferrer" className="text-black hover:text-white hover:bg-black px-2 py-2 rounded-md"><FaInstagram size={24} /></a>
  <a href="https://github.com/GautamMehta19" target="_blank" rel="noreferrer" className="text-black hover:text-white hover:bg-black px-2 py-2 rounded-md"><FaGithub size={24} /></a>
  <a href="https://www.linkedin.com/in/gautam-mehta-516052215/" target="_blank" rel="noreferrer" className="text-black hover:text-white hover:bg-black px-2 py-2 rounded-md"><FaLinkedin size={24} /></a>
</div>



      {/* Logo */}
      {/* <Link href='#' className="text-xl font-bold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md mt-auto">Portfolio</Link> */}
      </div>

      <div className="bg-gray-500 text-white fixed top-0 left-0 w-full px-4 py-2 flex justify-around items-center z-50">
        {/* Logo */}
        <Link href='#' className="text-xl font-bold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">Portfolio</Link>
      
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 ">
        <Link href="/" className="font-semibold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">Home</Link>
        <Link href="#about" className="font-semibold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">About</Link>
        <Link href="#skill" className="font-semibold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">Skills</Link>
        <Link href="#projects" className="font-semibold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">Projects</Link>
        <Link href="#contact" className="font-semibold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">Contact</Link>
        </nav>

        {/* Toggle Button (Mobile) */}
        <button onClick={toggleNav} className="md:hidden" style={{ fontSize: '20px'}}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Navigation Links (Mobile) */}
        <nav
          className={`absolute top-full left-0 bg-gray-800 w-full md:hidden p-4 transition duration-300 ease-in-out text-center ${
            isOpen ? 'block' : 'hidden'
           }`}
        >
          <Link href="/" className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Home</Link>
          <Link href="#about"  className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">About</Link>
          <Link href="#skill"  className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Skills</Link>
          <Link href="#projects"  className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Projects</Link>
          <Link href="#contact"  className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Contact</Link>
        </nav>
      </div>
    </div>
    
  );
};

export default Navbar;

