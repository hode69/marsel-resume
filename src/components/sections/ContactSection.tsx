import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function ContactSection() {
  return (
    <>
    <section id='contact' className=' text-white max-w-4xl mx-auto md:my-16 my-12 h-full'>
        
      <div className='max-md:flex max-md:flex-col md:grid grid-cols-12 space-x-0  '>
        <div className='flex col-span-3 py-2 max-md:hidden '>
        </div>

        <div className='col-span-9 flex flex-col border-l-2 pl-8 border-white max-md:ml-4 '>
          <h1 className='text-5xl max-md:text-5xl mb-8 font-semibold'>Contacts</h1>
          <p className='text-3xl max-md:text-3xl mb-8'>You can contact me on :</p>
          <div className='grid grid-rows-2 space-y-4'>
            <div className='flex flex-row space-x-2 text-xl cursor-pointer hover:text-cyan-600 transition-all duration-500' >
              <div>
                      <MdEmail className='inline' size={28} />
              </div>
              <p>: marsel.herdian@gmail.com</p>
            </div>
            <div className='flex flex-row space-x-2 text-xl cursor-pointer hover:text-cyan-600 transition-all duration-500' onClick={() => window.open('https://wa.me/6289652928308')}>
              <div>
                      <FaWhatsapp className='inline' size={28} />
              </div>
              <p>: +62 896 5292 8308</p>
            </div>
          </div>
        </div>

      </div>
      

    </section>
    <div className='flex w-3/4 h-8 border-t-2 border-white mx-auto'></div>
    </>
  )
}
