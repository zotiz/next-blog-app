import React from 'react'
import Image from 'next/image'
const AboutPage = () => {
  return (
    <div className='grid md:grid-cols-2 place-items-center mt-32'>
      <div>
        <h2>Welcome to my About Page.</h2>
      </div>
      <div className='w-full h-96 relative'>
        <Image src="/home.png"  fill className='object-contain'/>
      </div>
    </div>
  )
}

export default AboutPage
