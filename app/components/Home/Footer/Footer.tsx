import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 '>
      <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* 1st part */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Company</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About Us</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blogs</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Gift Cards</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Magazine</p>
        </div>

        {/* 2nd part */}

        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Support</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Contact</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Legal Notice</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Privacy Policy</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Terms & Conditions</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Sitemap</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
