import Image from 'next/image';
import React from 'react'

type Props = {
    image:string;
    date:string;
    title:string;
}

const NewsCard = ({date,image,title}:Props) => {
  return (
    <div>
      {/* Image */}
      <div className='h-[300px]'>
        <Image src={image} alt={title} width={300} height={300} className='w-full h-full object-cover rounded-lg'/>
      </div>
    </div>
  )
}

export default NewsCard
