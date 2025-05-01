import React from 'react'
import { FaHeart } from 'react-icons/fa'
type Props = {
    hotel:{
        id:number,
        image:string,
        name:string,
        location:string,
        reting: number,
        reviews: string,
        price:string
    }
}

const HotelCard = ({hotel}:Props) => {
  return (
    <div>
      <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>
        {/* Add to fov button */}
        <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col'>
            <FaHeart className='w-3 h-3'/>
        </div>
        {/* overlay */}
        <div className='absolute inset-0 '></div>
      </div>
    </div>
  )
}

export default HotelCard
