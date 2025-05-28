import React from 'react'
import Hero from '../Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Reviews/Review'
import News from './Hotel/News/News'
import Newslatter from './Newsletter/Newslatter'

const Home = () => {
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
