import React from 'react'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import Links from './Links'
import meier from '../assets/imgs/meier.jpg'
// imported jpg because netlify host was having issues with img src="../src/assets/imgs/salute.jpg"
// to flip the image on the horizontal change scale-x to scale-x-[-1]
// to not show delete animation for TypeAnimation set omitDeletionAnimation to true

const Main = () => {
  const { ref:myRef, inView: myElementIsVisible } = useInView();
  return (
    <div id='main' className='md:mb-1 mb-0 relative' >
        <img className='w-full h-full relative object-contain object-left ' src={meier} alt="" />
        <div className='w-full h-full absolute top-0 left-0 bg-white/40' >
          <div ref={myRef} className={`${myElementIsVisible ? 'absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 main_text' : 'absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-0' }`} >
            <h1 className='md:text-4xl text-xl font-bold text-gray-800' >Kevin Tapolcsanyi</h1>
            <h2 className='flex md:text-3xl text-sm pt-2 text-black' >I am a
              <TypeAnimation className='text-blue-800' omitDeletionAnimation={false}
                sequence={[
                  'Software Engineer',
                  2000, 
                  'Military Veteran',
                  2000,
                  'Developer',
                  2000,
                  'Coder',
                  2000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft:'5px' }}
                repeat={Infinity}
              />
            </h2>
            <Links />
          </div>
        </div>
    </div>
  )
}

export default Main