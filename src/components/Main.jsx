import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Links from './Links'

const Main = () => {
  return (
    <div id='main' >
        <img className='w-full h-screen object-cover object-left scale-x' src="../src/assets/imgs/salute.jpg" alt="" />
        {/* to flip the image replace the class scale-x with scale-x-[-1] */}
        <div className='w-full h-screen absolute top-0 left-0 bg-white/80' >
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center' >

            
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800' >Kevin Tapolcsanyi</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-blue-800' >I am a
            {/* set to true to not show delete animation */}
            <TypeAnimation omitDeletionAnimation={false}
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
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