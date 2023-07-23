import { useState, useRef, useEffect } from 'react'
import React from 'react'
import portrait from '../assets/imgs/profile.png'
// to inline style in a opening div tag use style={{objectFit: 'cover}} instead of tailwind className='object-cover'

const Blurb = () => {

  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries)=> {
    const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting)      
    },{
      threshold: 0
    })
    observer.observe(myRef.current)
  }, [])

  return (
    <div ref={myRef} className={`${ myElementIsVisible ? 'max-w-[1040px] m-auto md:pl-20 p-4 py-16 fadeLoad' : 'max-w-[1040px] m-auto md:pl-20 p-4 py-16 opacity-0'} `}>
        <h1 id='blurb' className='text-4xl font-bold text-center text-[#001b5e]' >
          Blurb
        </h1>
        <div className='flex' >
          <img className='hidden md:block rounded-full mr-3 shadow-2xl object-cover w-full h-full' src={portrait} alt="" />
          <p className='m-auto' >
            During my 4 years of Software Engineering experience as a military veteran, I learned military software on the job while deployed overseas. I refactored several databases into a single system saving on average 2-4 hours of user experience for daily operations. This directly contributed to our team achieving the highest production rate to date of over 92%. I am looking forward to contributing by solving hard problems with an eye towards delivering customer value and business results through software engineering.
          </p>
        </div>
    </div>
  )
}

export default Blurb