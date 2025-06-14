import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='flex flex-row flex-wrap items-center justify-center text-gray-400 text-lg mb-8'>This site is built with 
            <span className='px-2'>
                {/* <img src="/next.svg" className='h-3.5 inline invert transform -translate-y-0.5' alt="" /> */}
                <Image src={"/next.svg"} className='inline invert transform -translate-y-0.5' height={20} width={70} alt="" />
            </span> 
            and 
            <span className='px-2'>
                {/* <img src="/tailwindcss-logotype-white.svg" className='h-4 inline  transform -translate-y-0.5' alt="" /> */}
                <Image src={"/tailwindcss-logotype-white.svg"} className=' inline transform -translate-y-0.5' height={20} width={110} alt="" />
            </span> 
        </div>
    </>
  )
}
