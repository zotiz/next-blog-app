import React from 'react'
import Image from 'next/image'
import Button from '@/components/homepage/Button'
import SocialLink from '@/components/homepage/SocialLink'
const HomePage = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-4 md:mt-24 mb-8">
      <div className="flex flex-col gap-8 md:gap-12  md:items-start">
        <h1 className="text-3xl md:text-5xl font-bold">
          Agency of Innovative Thinking.
        </h1>
        <div className="md:hidden w-full h-60 relative">
          <Image src="/home1.png" fill className="object-contain" alt="home"/>
        </div>
        <p className="text-gray-600">
          Agency of Innovative Thinking: A hub of innovation and vision, it
          thrives on empowering individuals to unleash their creative prowess.
          With resilience as its backbone, challenges become stepping stones for
          growth. Fostering collaboration, it celebrates diverse perspectives,
          weaving a tapestry of brilliance that consistently exceeds
          expectations. In every endeavor, it leaves an indelible mark of
          inspiration.
        </p>

        <Button />
        <SocialLink />
      </div>
      <div className="hidden md:block w-full h-auto relative">
        <Image src="/home1.png" fill className="object-contain" alt="home"/>
      </div>
    </div>
  )
}

export default HomePage
