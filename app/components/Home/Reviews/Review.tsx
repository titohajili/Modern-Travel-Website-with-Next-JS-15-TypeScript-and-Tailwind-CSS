import React from 'react'

const Review = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
      <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* Text Content */}
        <div>
            <h1 className='text-2xl font-semibold text-white'>What our customers are saying us ?</h1>
            <p className='mt-6 text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi facilis perspiciatis maiores reprehenderit recusandae. Molestias quam dolorem officiis!</p>
        </div>
      </div>
    </div>
  )
}

export default Review
