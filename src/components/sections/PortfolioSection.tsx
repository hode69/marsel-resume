import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiGlobeAsiaAustralia } from 'react-icons/hi2'
import { portfolioItems } from '../Portfolios/Items'
import Image from 'next/image'

function debounce<T extends unknown[]>(func: (...args: T) => void, wait: number) {
  let timeout: NodeJS.Timeout
  return (...args: T) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}


export default function PortfolioSection() {
    const [activeItem, setActiveItem] = useState<number | null>(null)
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])
    const sectionRef = useRef<HTMLDivElement>(null)

    const addToRefs = useCallback((el: HTMLDivElement | null, index: number) => {
        if (el) {
        itemRefs.current[index] = el
        }
    }, [])

    useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrollPosition = window.scrollY + window.innerHeight * 0.4 // 40% dari viewport
      
      itemRefs.current.forEach((ref, index) => {
        if (!ref) return

        const { top, bottom } = ref.getBoundingClientRect()
        const elementTop = top + window.scrollY
        const elementBottom = bottom + window.scrollY

        // Cek jika scroll position berada dalam elemen
        if (scrollPosition > elementTop && scrollPosition < elementBottom) {
          setActiveItem(index)
        }
      })
    }

    // Gunakan debounce untuk optimasi performa
    const debouncedScroll = debounce(handleScroll, 100)
    window.addEventListener('scroll', debouncedScroll)

    return () => {
      window.removeEventListener('scroll', debouncedScroll)
    }
  }, [])

  const scrollToItem = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  return (
    <section ref={sectionRef} id='portfolio' className='min-h-screen max-w-4xl max-md:px-4 mx-auto text-white relative md:my-0 max-md:my-12 '>
        
        <div className='max-md:flex max-md:flex-col md:grid grid-cols-12 space-x-8'>
            {/* Navigation */}
            <div className='col-span-3 min-h-screen max-md:hidden max-md:pointer-events-none relative '>
                <div className='sticky top-1/2 transform -translate-y-1/2 my-[50vh]'>
                    <div className='flex flex-col  justify-center relative'>
                        <h1 className='absolute top-0 transform -translate-y-[37vh] text-4xl font-bold mb-8'>Portfolios</h1>
                        {portfolioItems.map((item, index) => (
                            item.title ? (
                            <div 
                            key={item.id} 
                            className={`flex flex-row gap-2 cursor-pointer `}
                            onClick={() => scrollToItem(index)} 
                            >
                                <span className={`mb-4 transition-all duration-300 ease-in-out ${activeItem === index ?  'text-sky-400' : 'text-sky-700'}`}>⊙━━━ </span>
                                <h2 key={item.id} className={`mb-4 transition-all duration-300 ease-in-out ${activeItem === index ?   'text-xl font-semibold' : ''}`}>
                                    {item.title}
                                </h2>
                            </div>
                            ) : null
                        ))}
                        
                    </div>
                </div>
            </div>

            <h1 className='text-3xl font-bold mb-8 text-center md:hidden'>Portfolios</h1>

            {/* Content */}
            <div className='col-span-9 space-y-20'>
                {portfolioItems.map((item, index) => (
                    <div 
                    key={item.id} 
                    ref={(el) => addToRefs(el, index)}
                    className='min-h-screen bg-black shadow-2xl border-2 border-sky-700 rounded-xl py-8 space-y-8 relative'
                    >
                        {/* showcase part */}
                        <div className='relative space-y-8'>
                            {/* images */}
                            {item.images?.map((image, imageIndex) => (
                                <div key={imageIndex} className='max-w-11/12 relative aspect-video rounded-lg overflow-hidden border-2 border-white/30 mx-auto items-center justify-center flex'>
                                    <Image src={image} alt="" fill className='object-cover w-full' />
                                </div>
                            ))}

                            {/* video */}
                            {item.video ? (
                                <div className='max-w-11/12 aspect-video rounded-lg overflow-hidden border-2 border-white/30 mx-auto'>
                                    <iframe src={item.video} className='h-full w-full' />    
                                </div>
                            ) : null}
                        </div>

                        {/* text */}
                        <div className="font-mono max-w-11/12 bg-gray-900 p-6 rounded-lg text-sm leading-loose mx-auto mb-24 tracking-wider">
                            <p className="text-green-400">{"<title>"}<span className="text-white">{item.title}</span>{"</title>"}</p>
                            {item.year && (
                                <p className="text-green-400">{"<year>"}<span className="text-white">{item.year}</span>{"</year>"}</p>
                            )}
                            {item.stacks && item.stacks.length > 0 && (
                                <>
                                <p className="text-green-400">{"<stacks>"}</p>
                                <ul className="ml-6 list-none">
                                    {item.stacks?.map((stack, stackIndex) => (
                                        <li key={stackIndex} className="text-green-400">
                                        {"<option>"}<span className="text-white">{stack}</span>{"</option>"}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-green-400">{"</stacks>"}</p>
                                </>
                            )}
                            {item.description && (
                                <>
                                <p className="text-green-400">{"<description>"}</p>
                                <p className="text-white ml-6">{item.description}</p>
                                <p className="text-green-400">{"</description>"}</p>
                                </>
                            )}
                        </div>

                        {/* links */}
                        <div className="flex flex-col justify-center space-y-4 absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <h2 className='text-center'>Links :</h2>
                        <div className='flex flex-row space-x-8 justify-center'>
                            {item.github && (
                                <a 
                                    href={item.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-fuchsia-500 hover:text-fuchsia-300 transition-colors duration-300"
                                >
                                    <FiGithub size={25} className='inline' />
                                </a>
                            )}
                            {item.anysite?.map((site, i) => (
                                <a
                                    key={i}
                                    href={site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-slate-400 text-white transition-colors duration-300"
                                >
                                    <HiGlobeAsiaAustralia size={25} className='inline' />
                                </a>
                            ))}
                            {item.linkedin && (
                                <a
                                    href={item.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-300 transition-colors duration-300"
                                >
                                    <FiLinkedin size={25} className='inline' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        
    </section>
  )
}
