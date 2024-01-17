import React from 'react'
import Image from 'next/image'
import Button from '@/components/homepage/Button'
import SocialLink from '@/components/homepage/SocialLink'
const HomePage = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-20 mt-4 md:mt-24 mb-4">
      <div className="flex flex-col gap-8 md:gap-12 justify-center items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-bold">
          Creatives Thoughts Agency.
        </h1>
        <div className="md:hidden w-full h-60 relative">
          <Image src="/home.png" fill className="object-contain" />
        </div>
        <p className="text-gray-600">
          Creative Thought Agency: A hub of innovation and vision, it thrives on
          empowering individuals to unleash their creative prowess. With
          resilience as its backbone, challenges become stepping stones for
          growth. Fostering collaboration, it celebrates diverse perspectives,
          weaving a tapestry of brilliance that consistently exceeds
          expectations. In every endeavor, it leaves an indelible mark of
          inspiration.
        </p>

        <Button />
        <SocialLink />
      </div>
      <div className="hidden md:block w-full h-96 relative">
        <Image src="/home.png" fill className="object-contain" />
      </div>
    </div>
  )
}

export default HomePage
