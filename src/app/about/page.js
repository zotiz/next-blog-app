import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'About | my-blog-app',
  description: 'About page of my-blog-app',
}
const AboutPage = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-4 md:mt-24 mb-8">
      <div className="flex flex-col gap-8 md:gap-12  md:items-start">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700 text-left">
          About Agency
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold">
          We shape digital ideas that are larger, bolder, braver, and simply
          superior.
        </h1>
        <div className="md:hidden w-full h-60 relative">
          <Image src="/about.png" fill className="object-contain" alt="about"/>
        </div>
        <p className="text-gray-600">
          We forge digital concepts that are larger, bolder, and braver, rooted
          in the flexibility and precision of good ideas. As a global leader,
          our specialized team excels in consulting and financial solutions,
          offering an extensive array of web and software development services
        </p>
        <div className="w-full flex justify-between items-center gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
              10 K+
            </h2>
            <p className="text-[12px] font-semibold text-gray-500">
              Years of experiences
            </p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
              234 K+
            </h2>
            <p className="text-[12px] font-semibold text-gray-500">
              People reached
            </p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
              5 K+
            </h2>
            <p className="text-[12px] font-semibold text-gray-500">
              Services and plugins
            </p>
          </div>
        </div>
        {/* <Button />
      <SocialLink /> */}
      </div>
      <div className="hidden md:block w-full h-auto relative">
        <Image src="/about.png" fill className="object-contain" alt="about"/>
      </div>
    </div>
  )
}

export default AboutPage
