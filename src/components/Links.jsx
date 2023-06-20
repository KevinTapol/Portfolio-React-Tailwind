import React from 'react'
import { FaTwitter, FaAngellist, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Links = () => {
  return (
    <div className='flex justify-between pt-6 max-w-[200px] w-full' >
                <a href="https://www.linkedin.com/in/kevin-tapolcsanyi/">
                    <FaLinkedinIn size={20} className='cursor-pointer hover:scale-[150%] ease-in duration-200 hover:text-blue-800'/>
                </a>
                <a href="https://github.com/KevinTapol">
                    <FaGithub size={20} className='cursor-pointer hover:scale-[150%] ease-in duration-200 hover:text-blue-800'/>
                </a>
                <a href="https://wellfound.com/u/kevin-tapolcsanyi">
                    <FaAngellist size={20} className='cursor-pointer hover:scale-[150%] ease-in duration-200 hover:text-blue-800'/>
                </a>
                <a href="https://twitter.com/KevinTapol">
                    <FaTwitter size={20} className='cursor-pointer hover:scale-[150%] ease-in duration-200 hover:text-blue-800'/>
                </a>
            </div>
  )
}

export default Links