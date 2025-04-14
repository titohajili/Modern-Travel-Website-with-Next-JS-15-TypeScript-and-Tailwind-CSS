import { navLinks } from '@/app/constant/constand'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

const MobileNav = () => {
  return (
    <div>
      <div className='fixed inset-0 z-[1001] bg-black opacity-50 w-full h-screen'></div>
      <div className='text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1002]'>
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
              {link.label}
            </p>
          </Link>
        ))}
              {/* close button */}
              <CgClose className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer' />
      </div>
    </div>
  )
}

export default MobileNav
