import { navLinks } from '@/app/constant/constand'
import { link } from 'fs'
import Link from 'next/link'
import React from 'react'
import { TbAirBalloon } from 'react-icons/tb'

const Nav = () => {
  return (
    <div className='bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]'>
      <div className='flex justify-between items-center h-full w-[90%] xl:w-[80%] mx-auto'>
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
            <TbAirBalloon className='w-6 h-6 text-white' />
          </div>
          <h1 className='text-xl md:text-2xl font-bold uppercase text-white'>Tripi</h1>
        </div>
        {/* Nav Links */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link)=>{
            return <Link href={link.url} key={link.id}>
              <p className='relative text-white font-medium text-base block after:block after:content-[""] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all duration-300 after:origin-right'>{link.label}</p>
            </Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav
