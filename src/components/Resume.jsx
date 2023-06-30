import React from 'react'

const Resume = () => {
  return (
    <div id='resume' className='max-w-[1040px] m-auto p-4 py-16'>
        <h1 className='text-4xl mb-1 font-bold text-center text-[#001b5e]' >Resume
        </h1>
        <div className='flex' >
            <a className='m-auto bg-blue-800 rounded-lg p-2 py-1 font-bold text-xl text-white cursor-pointer hover:scale-[110%] ease-in duration-200' target="_blank" href="https://docs.google.com/document/d/132_RyTjC0EIUiVMitXWQU0MopPzWk0olXqTD192C978/edit?usp=sharing">Click Here For My Resume</a>
        </div>
    </div>
  )
}

export default Resume