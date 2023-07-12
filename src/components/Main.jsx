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
    <div ref={myRef} id='main' className='mb-1' >
        <img className='w-full h-screen object-fill object-left scale-x' src={meier} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/40' >
          <div  className={`${myElementIsVisible ? 'max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center main_text' : 'max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center opacity-0' }`} >
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800' >Kevin Tapolcsanyi</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-blue-800' >I am a
              <TypeAnimation omitDeletionAnimation={false}
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