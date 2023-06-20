import React from 'react'

const Blurb = () => {
  return (
    <div id='blurb' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
        <h1 className='text-4xl font-bold text-center text-[#001b5e]' >Blurb
        </h1>
        <div className='flex' >
            <img className='hidden md:block' style={{objectFit: 'cover', width: '100%', height: '100%'}} src="../src/assets/imgs/profile.png" alt="" />
            <p className='m-auto' >During my 4 years of Software Engineering experience as a military veteran, I learned military software on the job while deployed overseas. I refactored several databases into a single system saving on average 2-4 hours of user experience for daily operations. This directly contributed to our team achieving the highest production rate to date of over 92%. I am looking forward to contributing by solving hard problems with an eye towards delivering customer value and business results through software engineering.</p>
        </div>
    
    </div>
  )
}

export default Blurb