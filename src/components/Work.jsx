import React from 'react'
import WorkItem from './WorkItem'

// create a separate .json file and import
const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 years',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique minima iste rerum soluta. Voluptates atque, eos minima pariatur exercitationem quam?'
    },
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 years',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique minima iste rerum soluta. Voluptates atque, eos minima pariatur exercitationem quam?'
    },
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 years',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique minima iste rerum soluta. Voluptates atque, eos minima pariatur exercitationem quam?'
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
        <h1 className='text-4xl font-bold text-center text-[#001b5e]' >Work</h1>
        {/* rendering out objects on the screen using () => () instead of () => {} */}
        {data.map((item, idx) => (
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
    </div>
  )
}

export default Work