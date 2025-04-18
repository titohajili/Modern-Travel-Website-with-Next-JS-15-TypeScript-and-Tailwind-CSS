import React from 'react'

const Hero = () => {
  return (
    <div className='realtive w-full h-[120vh] sm:h-[100vh]'>
        {/* overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>
      <video src='/images/hero1.mp4' autoPlay muted loop preload='metadata' className='w-full h-full object-cover' />
    </div>
  )
}

export default Hero
