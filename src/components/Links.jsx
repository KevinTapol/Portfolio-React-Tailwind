import React from 'react'
import { FaTwitter, FaAngellist, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Links = () => {
  return (
    <div className='flex justify-between pt-6 max-w-[200px] w-full' >
                <a target='_blank' href="https://www.linkedin.com/in/kevin-tapolcsanyi/" className='bg-2 bg-blue-300 rounded-full p-3 cursor-pointer hover:scale-[120%] ease-in duration-200'>
                    <FaLinkedinIn size={20} className='me-auto'/>
                </a>
                <a target='_blank' href="https://github.com/KevinTapol" className='bg-2 bg-blue-300 rounded-full p-3 cursor-pointer hover:scale-[120%] ease-in duration-200'>
                    <FaGithub size={20} className='me-auto'/>
                </a>
                <a target='_blank' href="https://wellfound.com/u/kevin-tapolcsanyi" className='bg-2 bg-blue-300 rounded-full p-3 cursor-pointer hover:scale-[120%] ease-in duration-200'>
                    <FaAngellist size={20} className='me-auto'/>
                </a>
                <a target='_blank' href="https://twitter.com/KevinTapol" className='bg-2 bg-blue-300 rounded-full p-3 cursor-pointer hover:scale-[120%] ease-in duration-200'>
                    <FaTwitter size={20} className='me-auto'/>
                </a>
            </div>
  )
}

export default Links