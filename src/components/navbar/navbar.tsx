'use client'

import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { FiFolder, FiLinkedin, FiMail } from 'react-icons/fi';

interface NavbarProps {
    isVisible: boolean;
}

function NavItem({ icon, label, onClick }: { icon: React.ReactNode; label: string, onClick: () => void }) {
  return (
    <div 
    onClick={onClick}
    className="group relative flex items-center cursor-pointer rounded p-2 hover:bg-gray-300 transition-colors duration-300 text-gray-600 hover:text-blue-800">
      <div className="text-xl ">{icon}</div>
      <span className="absolute max-md:bottom-full max-md:-left-1/2 max-md:mb-4 md:right-full md:mr-4 whitespace-nowrap rounded bg-white px-3 py-1 text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {label}
      </span>
    </div>
  )
}


export default function Navbar( { isVisible }: NavbarProps ) {
  return (
    <>
    {/* Mini Floating Navbar */}
    <nav className={`flex flex-row md:flex-col gap-8 bg-white p-2 rounded-lg shadow-lg z-50 transition-all duration-700 ${isVisible ? 'opacity-100 fixed max-md:bottom-8 max-md:right-1/2 md:bottom-1/2 md:right-8 transform md:translate-y-1/2 max-md:translate-x-1/2 ' : 'opacity-50 pointer-events-none fixed max-md:-bottom-20 md:bottom-1/2 max-md:translate-x-1/2 max-md:right-1/2 md:-right-20 transform translate-y-1/2 '}`}>
        <NavItem 
        onClick={() => {document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}}
        icon={<FiFolder />} label="Portfolios"  />
        <NavItem 
        onClick={() => {document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}}
        icon={<FiMail />} label="Contact" />
        <NavItem 
        onClick={()=>window.open("https://www.linkedin.com/in/marselianus-herdian-223301161/", "_blank")}
        icon={<FiLinkedin />} label="LinkedIn"  />
    </nav>    

    <button 
    onClick={() => {document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}}
    className={`fixed group bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer rounded-full w-12 h-12 flex items-center justify-center z-50 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'} `}>
        <FaArrowUp className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-4 transition-all duration-700 text-lg' />
    </button>
    </>
  )
}


