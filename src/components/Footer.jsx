import React from 'react'
import Links from './Links'
import favicon from '../assets/imgs/profileFavicon1.png'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Links />
        <div className='flex'>
          <img className='scale-[60%]' src={favicon} alt="" />
          <h3 className='m-auto pt-2 text-xl' >  &copy; 2023 Kevin Tapolcsanyi</h3>
        </div>
    </div>
  )
}

export default Footer