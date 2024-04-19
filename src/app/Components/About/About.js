import React from "react";

const AboutPage = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-l from-white via-gray-200 to-gray-300 flex justify-center">
      <div className="max-w-screen-xl px-4 sm:px-8 py-20 relative">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-8 relative">About Me</h1>
        <h1 className="text-lg text-gray-800 sm:text-center mb-10 px-6 relative">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 px-6 gap-10">

          <div>
            <h2 className="text-lg font-semibold mb-5 p-2 bg-gray-700 text-white rounded-lg text-center">Get to know me!</h2>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate full-stack developer with experience in building web applications using modern technologies.
              My expertise includes frontend technologies.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              In my portfolio, you'll find a showcase of projects that demonstrate my expertise and creativity. I believe in clean code, intuitive design, and delivering results that exceed expectations.

            </p>
          </div>

          <div className="flex flex-col mb-8">
            <h2 className="text-lg font-semibold mb-5 p-2 bg-gray-700 text-white rounded-lg text-center">Hobbies!</h2>
            <div className="flex space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-300 text-gray-700 rounded-lg p-2">
                  <h3 className="text-lg font-bold mb-2">Playing Cricket</h3>
                </div>
                <div className="bg-gray-300 text-gray-700 rounded-lg p-2">
                  <h3 className="text-lg font-bold mb-2">Listening Podcasts</h3>
                </div>

                <div className="bg-gray-300 text-gray-700 rounded-lg p-2">
                  <h3 className="text-lg font-bold mb-2">Discuss about technologies</h3>
                </div>

                <div className="bg-gray-300 text-gray-700 rounded-lg p-2">
                  <h3 className="text-lg font-bold mb-2">Interest in space</h3>
                </div>

                <div className="bg-gray-300 text-gray-700 rounded-lg p-2">
                  <h3 className="text-lg font-bold mb-2">Interest in Mythology</h3>
                </div>

                <div className="bg-gray-300 text-gray-700 rounded-lg p-2">
                  <h3 className="text-lg font-bold mb-2">Discuss in Indian scriptures</h3>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;








// const AboutPage = () => {
//     return (
//         <div className="min-h-screen flex flex-col justify-center items-center">
//             <h1 className="text-3xl font-bold mb-4">About Me</h1>
//             <p className="text-lg text-center">
//                 Welcome to my About page! I am passionate about web development and enjoy creating awesome projects.
//             </p>
//         </div>
//     );
// };

// export default AboutPage;


// 'use client' // Assuming you're using Next.js client-side components

// import React, { useState } from 'react';
// import { Link } from 'next/link'; // Assuming you're using Next.js
// import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from 'react-icons/ai'; // Icons from React Icons

// const NavigationBar = () => { // Ensure the component name matches the export
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className={`bg-gradient-to-r from-white via-gray-200 to-gray-400 fixed top-0 left-0 w-full z-50 md:h-12 p-2`}>
//             <div className="grid lg:grid-cols-2 text-black">
//                 <div className="text-center font-bold">
//                     <h3>Portfolio</h3>
//                 </div>
//                 <div className={`flex justify-around md:flex md:justify-end}`}>
//                     {/* Menu Button for Mobile */}
//                     <button
//                         id="menuBtn"
//                         className={`md:hidden focus:outline-none cursor-pointer ${isOpen ? 'active' : '' // Add active class for hover effect (optional)
//                             }`}
//                         onClick={toggleMenu}
//                     >
//                         {isOpen ? <AiOutlineCloseCircle /> : <AiOutlineMenuUnfold />}
//                     </button>

//                     {/* Navigation Links (Hidden on Mobile Initially) */}
//                     <div
//                         id="menuContent"
//                         className={`hidden md:flex flex-col space-y-2 transition duration-300 ease-in-out ${isOpen ? 'block' : '' // Show links only when menu is open
//                             }`}
//                     >
//                         <Link href="/" className="text-black hover:bg-cyan-600 hover:text-white px-2 py-1 rounded-md">
//                             Home
//                         </Link>
//                         <Link href="/#about" className="text-black hover:bg-cyan-600 hover:text-white px-2 py-1 rounded-md">
//                             About
//                         </Link>
//                         <Link href="/#skills" className="text-black hover:bg-cyan-600 hover:text-white px-2 py-1 rounded-md">
//                             Skills
//                         </Link>
//                         <Link href="/#projects" className="text-black hover:bg-cyan-600 hover:text-white px-2 py-1 rounded-md">
//                             Projects
//                         </Link>
//                         <Link href="/#contact" className="text-black hover:bg-cyan-600 hover:text-white px-2 py-1 rounded-md">
//                             Contact
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default NavigationBar; // Ensure the export matches the component name
