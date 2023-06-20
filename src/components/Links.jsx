import React from 'react'
import { FaTwitter, FaAngellist, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Links = () => {
  return (
    <div className='flex justify-between pt-6 max-w-[200px] w-full' >
                <a target='_blank' href="https://www.linkedin.com/in/kevin-tapolcsanyi/" className='bg-2 bg-blue-300 rounded-full p-3'>
                    <FaLinkedinIn size={20} className='cursor-pointer hover:scale-[150%] ease-in duration-200'/>
                </a>
                <a target='_blank' href="https://github.com/KevinTapol" className='bg-2 bg-blue-300 rounded-full p-3'>
                    <FaGithub size={20} className='cursor-pointer hover:scale-[150%] ease-in duration-200'/>
                </a>
                <a target='_blank' href="https://wellfound.com/u/kevin-tapolcsanyi" className='bg-2 bg-blue-300 rounded-full p-3'>
                    <FaAngellist size={20} className='cursor-pointer hover:scale-[150%] ease-in duration-200'/>
                </a>
                <a target='_blank' href="https://twitter.com/KevinTapol" className='bg-2 bg-blue-300 rounded-full p-3'>
                    <FaTwitter size={20} className='cursor-pointer hover:scale-[150%] ease-in duration-200'/>
                </a>
            </div>
  )
}

export default Links