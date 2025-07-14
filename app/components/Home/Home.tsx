"use client"
import { useEffect } from 'react'
import React from 'react'
import Hero from '../Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Reviews/Review'
import News from './Hotel/News/News'
import Newslatter from './Newsletter/Newslatter'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Home = () => {

  useEffect(()=>{
    const initAOS = async() =>{
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS()
  },[])

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel/>
      <WhyChoose/>
      <Review/>
      <News/>
      <Newslatter/>
    </div>
  )
}

export default Home
