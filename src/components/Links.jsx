import React from 'react'
import { FaTwitter, FaAngellist, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Links = () => {
  return (
    <div className='flex justify-between pt-3 max-w-[200px] w-full' >
        <a target='_blank' href="https://www.linkedin.com/in/kevin-tapolcsanyi/" className='md:scale-[80%] md:hover:scale-[100%] scale-[60%] hover:scale-[80%] ease-in duration-200 bg-2 bg-blue-300 rounded-full p-3 cursor-pointer'>
            <FaLinkedinIn size={20} className='me-auto'/>
        </a>
        <a target='_blank' href="https://github.com/KevinTapol" className='md:scale-[80%] md:hover:scale-[100%] scale-[60%] hover:scale-[80%] ease-in duration-200 bg-2 bg-blue-300 rounded-full p-3 cursor-pointer'>
            <FaGithub size={20} className='me-auto'/>
        </a>
        <a target='_blank' href="https://wellfound.com/u/kevin-tapolcsanyi" className='md:scale-[80%] md:hover:scale-[100%] scale-[60%] hover:scale-[80%] ease-in duration-200 bg-2 bg-blue-300 rounded-full p-3 cursor-pointer'>
            <FaAngellist size={20} className='me-auto'/>
        </a>
        <a target='_blank' href="https://twitter.com/KevinTapol" className='md:scale-[80%] md:hover:scale-[100%] scale-[60%] hover:scale-[80%] ease-in duration-200 bg-2 bg-blue-300 rounded-full p-3 cursor-pointer'>
            <FaTwitter size={20} className='me-auto'/>
        </a>
    </div>
  )
}

export default Links