import React from 'react'

export default function AboutSection() {
  return (
    <>
      <section id='about' className='min-h-screen text-white relative grid grid-rows-4 items-center md:my-16 my-12 gap-y-8'>
        
        <div className='max-w-4xl mx-auto max-md:px-8 '>
          <h1 className='text-7xl max-md:text-5xl mb-8 font-semibold'>About Me</h1>
          <p className='text-4xl max-md:text-3xl mb-8'>I&apos;m a website developer focus on front-end development, I&apos;m currently learning and styling a lot of things to become a Fullstack Developer</p>
          <p className='text-4xl max-md:text-3xl'>❝Still learning, still styling, still surviving..❞</p>
        </div>
        <div className='flex w-full h-full max-h-60'>
          <div className='w-1/2 border-r-2 border-white'></div>
        </div>
        <div className='max-w-4xl mx-auto max-md:px-8 '>
          <h1 className='text-7xl max-md:text-5xl mb-8 font-semibold'>About This Site</h1>
          <p className='text-4xl max-md:text-3xl'>This is a very simple portfolio website that I built to archives my personal projects. <br />Feel free to check it out!</p>
        </div>
        <div className='flex w-full h-full max-h-60'>
          <div className='w-1/2 border-r-2 border-white'></div>
        </div>
      </section> 
    </>
  )
}
