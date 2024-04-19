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



// import React from 'react';
// import { AiFillHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import social media icons
// import Link from 'next/link';
// import { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="bg-gray-500 text-white fixed top-0 left-0 w-full px-4 py-2 flex justify-between items-center z-50">
//       {/* Logo */}
//       <Link href='#' className="text-xl font-bold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">Portfolio</Link>

//       {/* Social Media Icons */}
//       <div className="flex space-x-4">
//         <a href="https://www.facebook.com/" className="text-white hover:text-black"><FaFacebook /></a>
//         <a href="https://www.instagram.com/" className="text-white hover:text-black"><FaInstagram /></a>
//         <a href="https://github.com/" className="text-white hover:text-black"><FaGithub /></a>
//         <a href="https://www.linkedin.com/" className="text-white hover:text-black"><FaLinkedin /></a>
//       </div>

//       {/* Toggle Button (Mobile) */}
//       <button onClick={toggleNav} className="md:hidden" style={{ fontSize: '20px'}}>
//         {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//       </button>

//       {/* Navigation Links (Mobile) */}
//       <nav
//         className={`absolute top-full left-0 bg-gray-800 w-full md:hidden p-4 transition duration-300 ease-in-out text-center ${
//           isOpen ? 'block' : 'hidden'
//         }`}
//       >
//         <Link href="/" className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Home</Link>
//         <Link href="#about"  className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">About</Link>
//         <Link href="#skill"  className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Skills</Link>
//         <Link href="#projects"  className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Projects</Link>
//         <Link href="#contact"  className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Contact</Link>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;







// import React, { useState } from 'react';
// import Link from 'next/link';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-500 text-white fixed top-0 left-0 w-full px-4 py-2 flex justify-around items-center z-50">
//       {/* Logo */}
//       <Link href="/" passHref
//         className="text-xl font-bold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">Portfolio
//       </Link>

//       {/* Navigation Links (Desktop) */}
//       <div className="hidden md:flex space-x-6">
//         <Link href="#home"
//           className="font-semibold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">Home
//         </Link>
//         <Link href="#about"
//           className="font-semibold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">About
//         </Link>
//         <Link href="#skill"
//           className="font-semibold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">Skills
//         </Link>
//         <Link href="#projects"
//           className="font-semibold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">Projects
//         </Link>
//         <Link href="#contact"
//           className="font-semibold text-white hover:bg-white hover:text-black px-4 py-1 rounded-md">Contact
//         </Link>
//       </div>

//       {/* Toggle Button (Mobile) */}
//       <button onClick={toggleNav} className="md:hidden" style={{ fontSize: '20px' }}>
//         {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//       </button>

//       {/* Navigation Links (Mobile) */}
//       <div
//         className={`absolute top-full left-0 bg-gray-800 w-full md:hidden p-4 transition duration-300 ease-in-out text-center ${
//           isOpen ? 'block' : 'hidden'
//         }`}
//       >
//         <Link href="#home"
//           className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Home
//         </Link>
//         <Link href="#about"
//           className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">About
//         </Link>
//         <Link href="#skill"
//           className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Skills
//         </Link>
//         <Link href="#projects"
//           className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Projects
//         </Link>
//         <Link href="#contact"
//           className="block py-2 text-white hover:bg-white hover:text-black px-2 rounded-md">Contact
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






// 'use client'
// // import Link from 'next/link';
// import { FiMenu, FiCrosshair } from 'react-icons/fi'
// // import { useState } from 'react';


// import Link from "next/link";
// import React, { useState } from "react";
// import NavLink from "./NavbarLink";
// // import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverPlay";

// const navLinks = [
//   {
//     title: "About",
//     path: "#about",
//   },
//   {
//     title: "Skills",
//     path: "#skill",
//   },
//   {
//     title: "Projects",
//     path: "#projects",
//   },
//   {
//     title: "Contact",
//     path: "#contact",
//   },
  
// ];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
//       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
//         <Link
//           href={"/"}
//           className="text-2xl md:text-5xl text-white font-semibold"
//         >
//           <h1 className="text-white">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
//               <span className="text-white">Gautam's</span> Portfolio
//             </span>
//           </h1>
//         </Link>

//         <div className="mobile-menu block md:hidden">
//           {!navbarOpen ? (
//             <button
//               onClick={() => setNavbarOpen(true)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >

//               <FiMenu className="h-5 w-5" />
//             </button>
//           ) : (
//             <button
//               onClick={() => setNavbarOpen(false)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//                 {/* <i class="fa-solid fa-circle-xmark h-5 w-5"></i> */}
//               <FiCrosshair className="h-5 w-5" />
//             </button>
//           )}
//         </div>
//         <div className="menu hidden md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <NavLink href={link.path} title={link.title} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
//     </nav>
//   );
// };

// export default Navbar;

// // const Navbar = () => {
// //     return (
// //         <header >
// //             <div className='flex justify-around items-center text-center font-bold py-2 bg-gray-800'>
// //                 <div>
// //                     Gautam's Portfolio
// //                 </div>
// //                 <div className='hidden md:flex justify-around gap-6 '>
// //                     <Link href='/' className="text-white hover:bg-white hover:text-black px-2 rounded-md">Home</Link>
// //                     <Link href='/about' className="text-white hover:bg-white hover:text-black px-2 rounded-md">About</Link>
// //                     <Link href='skill' className="text-white hover:bg-white hover:text-black px-2 rounded-md">Skills</Link>
// //                     <Link href='project' className="text-white hover:bg-white hover:text-black px-2 rounded-md">Projects</Link>
// //                     <Link href='contact' className="text-white hover:bg-white hover:text-black px-2 rounded-md">Contact</Link>
// //                 </div>

// //                 <div className='md:hidden'>
// //                     Menu
// //                     <div class="block md:justify-around gap-6">
// //                         <Link href="/" class="text-white hover:bg-white hover:text-black px-2 rounded-md">Home</Link>
// //                         <Link href="/about" class="text-white hover:bg-white hover:text-black px-2 rounded-md">About</Link>
// //                         <Link href="/skill" class="text-white hover:bg-white hover:text-black px-2 rounded-md">Skills</Link>
// //                         <Link href="/project" class="text-white hover:bg-white hover:text-black px-2 rounded-md">Projects</Link>
// //                         <Link href="/contact" class="text-white hover:bg-white hover:text-black px-2 rounded-md">Contact</Link>
// //                     </div>
// //                 </div>
// //             </div>
// //         </header>
// //     )
// // }



// // export default Navbar;





// // const navbar = () => {
// //     const [showLinks, setShowLinks] = useState(false);

// //     const toggleLinks = () => {
// //         console.log(showLinks)
// //         setShowLinks(!showLinks);
// //         console.log(showLinks)
// //     };

// //     return (
// //         <nav className='bg-gradient-to-r from-white via-gray-200 to-gray-400 fixed top-0 left-0 w-full z-50 md:h-20 p-2'>
// //             <div className='grid lg:grid-cols-2 text-black '>
// //                 <div className='text-center font-bold py-1'>
// //                     <h3>Portfolio</h3>
// //                 </div>
// //                 <div className='flex justify-around font-bold items-center'>
// //                     {/* Links for small screens */}
// //                     <div className="lg:hidden">
// //                         <FiMenu onClick={toggleLinks} className="text-2xl cursor-pointer" />
// //                     </div>
// //                     {/* Links for larger screens */}
// //                     <div className={`hidden lg:flex justify-around w-full ${showLinks ? 'flex-col items-center mt-2' : 'items-center'}`}>
// //                         <div>
// //                             <Link href='/' className='hover:bg-cyan-600 hover:text-white px-2 py-1 rounded-md block'>Home</Link>
// //                         </div>
// //                         <div>
// //                             <Link href='/#about' className='hover:bg-cyan-600 hover:text-white px-2 py-1 rounded-md block'>About</Link>
// //                         </div>
// //                         <div>
// //                             <Link href='/#skills' className='hover:bg-cyan-600 hover:text-white px-2 py-1 rounded-md block'>Skills</Link>
// //                         </div>
// //                         <div>
// //                             <Link href='/#projects' className='hover:bg-cyan-600 hover:text-white px-2 py-1 rounded-md block'>Projects</Link>
// //                         </div>
// //                         <div>
// //                             <Link href='/#contact' className='hover:bg-cyan-600 hover:text-white px-2 py-1 rounded-md block'>Contact</Link>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </nav>
// //     );
// // }

// // const navbar = () => {
// //     return (
// //         <nav className='bg-gradient-to-r from-white via-gray-200 to-gray-400 fixed top-0 left-0 w-full z-50 md:h-12 p-2'>
// //             <div className='grid lg:grid-cols-2 text-black '>
// //                 <div className='text-center font-bold'>
// //                     <h3>Portfolio</h3>
// //                 </div>
// //                 <div className='flex justify-around font-bold'>
// //                     <div>
// //                         <Link href='/' className='hover:bg-cyan-600 hover:text-white px-2 py-1.5 rounded-md'>Home</Link>
// //                     </div>
// //                     <div>
// //                         <Link href='/#about' className='hover:bg-cyan-600 hover:text-white px-2 py-1.5 rounded-md'>About</Link>
// //                     </div>
// //                     <div>
// //                         <Link href='/#skills' className='hover:bg-cyan-600 hover:text-white px-2 py-1.5 rounded-md'>Skills</Link>
// //                     </div>
// //                     <div>
// //                         <Link href='/#projects' className='hover:bg-cyan-600 hover:text-white px-2 py-1.5 rounded-md'>Projects</Link>
// //                     </div>
// //                     <div>
// //                         <Link href='/#contact' className='hover:bg-cyan-600 hover:text-white px-2 py-1.5 rounded-md'>Contact</Link>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// //                 <div className="flex justify-end h-16">
// //                     <div className="flex items-center text-black">
// //                         <div className="flex-shrink-0">
// //                             <Link href="/">
// //                                 <span className="text-xl font-bold cursor-pointer">Home</span>
// //                             </Link>
// //                         </div>

// //                         <div className="hidden md:block">
// //                             <div className="ml-10 flex items-baseline space-x-4">
// //                                 <Link href="/about">
// //                                     <span className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
// //                                         About
// //                                     </span>
// //                                 </Link>

// //                                 <Link href="/skills">
// //                                     <span className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
// //                                         Skills
// //                                     </span>
// //                                 </Link>

// //                                 <Link href="/projects">
// //                                     <span className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
// //                                         Projects
// //                                     </span>
// //                                 </Link>

// //                                 <Link href="/contact">
// //                                     <span className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
// //                                         Contact
// //                                     </span>
// //                                 </Link>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div> */}
// //         </nav>
// //     );
// // }

// // export default navbar