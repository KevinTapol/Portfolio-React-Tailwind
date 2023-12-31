import React from 'react'

const ProjectItem = ({img, title, tech, link, g_link}) => {
  return (
    // removed w-full and added m-auto to fix 400px-800px conflicting issues
    <div className='relative flex items-center justify-center h-auto max-w-xs shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-500 to-[#001b5e] m-auto' > 
        <img className='rounded-xl group-hover:opacity-10' src={img} alt="" />
        {/* added max-w-sm to div below for 400-800px conflicting issues */}
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-sm' >
            <h3 className='text-lg font-bold text-white  tracking-wider text-center' >
                {title}
            </h3>
            {/* added darker gradients to better read tech descriptions, also added lg:my-20 for margins of screens greater than large and decreased the text size with text-xs */}
            <p className='lg:my-20 p-2 bg-gradient-to-l from-sky-800 to-emerald-500 rounded-md text-white text-center text-xs' >
                {tech}
            </p>
            {/* <a  className='' target="_blank" href={link}>
                <p className='bg-blue-800 rounded-3xl text-center p-2 m-2 text-white cursor-pointer text-xs  hover:scale-[120%] ease-in duration-200' >
                    Click Here for Website
                </p>
            </a> */}
            <a target="_blank" href={g_link}>
                <p className='bg-blue-800 rounded-3xl text-center p-2 m-2 text-white cursor-pointer text-xs  hover:scale-[120%] ease-in duration-200 ' >
                    Click Here for GitHub Repo
                </p>
            </a>
        </div>
    </div>
  )
}

export default ProjectItem