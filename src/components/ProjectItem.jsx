import React from 'react'

const ProjectItem = ({img, title, tech, link, g_link}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]' >
        <img className='rounded-xl group-hover:opacity-10' src={img} alt="" />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' >
            <h3 className='text-lg font-bold text-white tracking-wider text-center' >
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center' >{tech}</p>
            <a target="_blank" href={link}>
                <p className='bg-blue-800 rounded-3xl text-center p-2 m-2 text-white cursor-pointer text-xs  hover:scale-[120%] ease-in duration-200' >Click Here for Website</p>
            </a>
            <a target="_blank" href={g_link}>
                <p className='bg-blue-800 rounded-3xl text-center p-2 m-2 text-white cursor-pointer text-xs  hover:scale-[120%] ease-in duration-200 ' >Click Here for GitHub Repo</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectItem