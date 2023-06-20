import React from 'react'
import ProjectItem from './ProjectItem'
import eshop from '../assets/imgs/eshop.gif'
import nasa from '../assets/imgs/NasaApi.gif'
import group from '../assets/imgs/ShoppinIt.gif'
import hrbox from '../assets/imgs/HRBox.gif'
import motorpool from '../assets/imgs/Motorpool.gif'
import codewars from '../assets/imgs/Codewars.gif'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
      <h1 className='text-4xl font-bold text-center text-[#001b5e]' >Websites</h1>
      <p className='text-center py-8' >
      Mouse over each Web App for a description, a direct link to the website, and a direct link to the GitHub repository. If you are on mobile, click the top of the images to display descriptions and links.
      </p>
      <div className='grid sm:grid-cols-3 gap-12' >  
        <ProjectItem img={eshop} title='E-Commerce React App' tech='React JS Fullstack Hosted on Github' link='https://kevintapol.github.io/React-E-Commerce-App/' g_link='https://github.com/KevinTapol/React-E-Commerce-App' />
        <ProjectItem img={nasa} title='Nasa Pic of the Day' tech='Frontend API Hosted on Github' link='https://kevintapol.github.io/NasaApi/index.html' g_link='https://github.com/KevinTapol/NasaApi'/>
        <ProjectItem img={motorpool} title='Vehicle Repair Orders' tech='MongoDB Express EJS Node stack hosted on Cyclic'link='https://motorpool.cyclic.app/' g_link='https://github.com/KevinTapol/MotorPool'/>
        <ProjectItem img={group} title='Full Stack Group Project' tech='MongoDB Express EJS Node stack Hosted on Render.com' link='https://shoppinit.onrender.com/' g_link='https://github.com/KevinTapol/GroupProjectShoppingList'/>
        <ProjectItem img={hrbox} title='HR Feedback' tech='MongoDB Express EJS Node stack Hosted on Render.com' link='https://hr-box.onrender.com/' g_link='https://github.com/KevinTapol/HR-Box'/>
        <ProjectItem img={codewars} title='Daily Codewars!' tech='JavaScript Python C#' link='https://www.codewars.com/users/KevinTap' g_link='https://github.com/KevinTapol/codewars-js'/>
      </div>
    </div>
  )
}

export default Projects