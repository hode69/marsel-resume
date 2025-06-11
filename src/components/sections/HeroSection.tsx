'use client'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { FiMail, FiFolder, FiLinkedin } from 'react-icons/fi'

interface HeroSectionProps {
  onOutOfViewChange: (isOutOfView: boolean) => void
}

export default function HeroSection({ onOutOfViewChange }: HeroSectionProps) {
  const targetRef = useRef<HTMLImageElement>(null)
  const [isOutOfView, setIsOutOfView] = useState(false)

  useEffect(() => {
  Aos.init({
    once: true, // biar bisa animate in-out
    duration: 700,
    easing: 'ease-in-out',
  })
}, [])
  
  useEffect(() => {
    if (!targetRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const outOfView = !entry.isIntersecting
        setIsOutOfView(outOfView)
        onOutOfViewChange?.(outOfView)
      },
      {
        threshold: 0, 
      }
    )

    observer.observe(targetRef.current)

    console.log('state hero : ',isOutOfView)

    return () => {
      observer.disconnect()
    }
  }, [onOutOfViewChange])

  return (
    <>
      {/* Section Hero */}
      <section id="hero"
        className={`h-screen flex flex-col items-center justify-center p-6 ease-in-out`}
      >
        {/* Foto profil */}
        <Image
          ref={targetRef}
          data-aos="fade-down"
          src={"/profile.png"}
          alt="my profile"
          className={`border-4 rounded-full object-cover mb-6 min-w-60 min-h-60 max-w-80 max-h-80 transition-opacity duration-500 ease-in-out`}
          width={1000}
          height={1000}
        />

        {/* Nama + deskripsi */}
        <div
        data-aos="fade-down"
        data-aos-delay="400"
          className={`text-center text-white `}
        >
          <h1 className={`text-4xl font-bold mb-2 transition-all duration-700  ${
            isOutOfView ? 'opacity-0 transform -translate-y-8' : 'opacity-100 transform translate-y-0'}`}>Marselianus Herdian Setyanugraha</h1>
          <p
            className={`max-w-xl mx-auto text-slate-200 transition-all duration-700 ease-in-out delay-300 ${
            isOutOfView ? 'opacity-0 transform -translate-y-8' : 'opacity-100 transform translate-y-0'}`}
          >
            Front-End Website developer | IT Enthusiast | Problem Solver | Lifelong Learner
          </p>
        </div>

        {/* Just a cute line */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className='flex w-96'
        >
        <div 
        className={`border-t-2 border-white w-full max-w-96 mb-4 mt-8 transition-all duration-700 delay-500 ease-in-out ${isOutOfView ? 'scale-x-0 transform -translate-y-8 opacity-0' : 'scale-x-100 transform translate-y-0 opacity-100'}`}></div>
        </div>

        {/* Buttons utama */}
        <div
        
          className={`flex gap-6 transition-all duration-700 ease-in-out text-white space-x-2 delay-800 text-xl ${
            isOutOfView ? 'opacity-0 pointer-events-none transform -translate-y-8' : 'opacity-100 transform translate-y-0'
          }`}
        >
          
          <button 
          onClick={() => {
            document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
          }}
          data-aos = "zoom-in-up" data-aos-delay="400" 
          className="group hover:bg-white/20 rounded-full transition-all flex flex-row items-center hover:space-x-2 cursor-pointer">
            <span className='group-hover:bg-white/20 p-4 rounded-full transition-all'>
              <FiFolder className='' />
            </span>
            <span className={`flex overflow-hidden min-w-0 group-hover:w-24 w-0 transition-all duration-500 ease-in-out`}>
              <p className='whitespace-nowrap group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out  text-center text-lg '>Portfolios</p>
            </span>
          </button>
          <button 
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }}
          data-aos = "zoom-in-up" data-aos-delay="600" 
          className="group hover:bg-white/20 rounded-full transition-all flex flex-row items-center hover:space-x-2 cursor-pointer">
            <span className='group-hover:bg-white/20 p-4 rounded-full transition-all'>
              <FiMail className='' />
            </span>
            <span className={`flex overflow-hidden min-w-0 group-hover:w-20 w-0 transition-all duration-500 ease-in-out`}>
              <p className='whitespace-nowrap group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out  text-center text-lg '>Contacts</p>
            </span>
          </button>
          <button 
          onClick={() => {
            window.open("https://www.linkedin.com/in/marselianus-herdian-223301161/", "_blank")
          }}
          data-aos = "zoom-in-up" data-aos-delay="800" 
          className="group hover:bg-white/20 rounded-full transition-all flex flex-row items-center hover:space-x-2 cursor-pointer">
            <span className='group-hover:bg-white/20 p-4 rounded-full transition-all'>
              <FiLinkedin className='' />
            </span>
            <span className={`flex overflow-hidden min-w-0 group-hover:w-20 w-0 transition-all duration-500 ease-in-out`}>
              <p className='whitespace-nowrap group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out  text-center text-lg '>LinkedIn</p>
            </span>
          </button>
          {/* <button data-aos = "zoom-in-up" data-aos-delay="300" className="hover:bg-white/20 p-4 rounded-full transition-all "><FiFolder/></button>
          <button data-aos = "zoom-in-up" data-aos-delay="500" className="hover:bg-white/20 p-4 rounded-full transition-all"><FiLinkedin /></button> */}
        </div>
      </section>
  
    </>
  )
}
