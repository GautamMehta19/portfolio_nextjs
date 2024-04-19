'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from 'react-icons/fi';

const HomePage = () => {
  const handleDownload = () => {
    // Trigger download
    const downloadUrl = '/Resume-Gautam-Mehta.pdf'; // Update with the correct path
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Resume-Gautam-Mehta.pdf'; // Change the filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-gray-200 to-gray-300 text-gray-800 flex justify-center items-center">
      <div className="  px-4 sm:px-6 lg:px-8 flex items-center ">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-500 lg:mb-8 ml-4">
            HEY, I'm <span className="text-gray-800 font-sans">GAUTAM MEHTA</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-12 text-center text-gray-500">
            Full-Stack Developer
          </p>

          <div className="flex justify-evenly">
            <Link href="#projects" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3  rounded-md text-lg font-semibold">View Projects</Link>
            <button onClick={handleDownload} className="text-gray-500 bg-transparent bg-gray-200 px-3 text-lg font-semibold flex items-center relative group">
              <FiDownload className="h-5 w-5 mr-2" />
              <span>CV</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 transition-all duration-300 origin-left group-hover:w-full"></span>
            </button>
          </div>
        </div>

        <div className="flex-none ml-8 relative overflow-hidden rounded-full w-50 h-50">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full object-cover transition-transform duration-200 transform hover:scale-110"
            layout="responsive"
            sizes="(min-width: 1024px) 200px, (min-width: 768px) 150px, 100px"
          />
        </div>

      </div>
    </div>
  );
};

export default HomePage;
