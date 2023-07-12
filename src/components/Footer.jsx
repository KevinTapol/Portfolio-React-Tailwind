import React from 'react'
import Links from './Links'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Links />
        <h3 className='m-auto pt-2 text-xl' > &copy; 2023 Kevin Tapolcsanyi</h3>
    </div>
  )
}

export default Footer