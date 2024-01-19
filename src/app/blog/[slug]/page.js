'use client'
import AuthorAndDate from '@/components/post/AuthorAndDate'
import SocialShare from '@/components/post/SocialShare'
import Image from 'next/image'
import React from 'react'

const SinglePost = ({ params }) => {
  return (
    <div className="md:w-8/12 m-auto py-4">
      {/* <div className="col-span-1">
          <Image
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
            alt=""
            width={400}
            height={400}
          />
        </div> */}
      <div className='flex items-center gap-2'>
        <p className='text-sm text-gray-500'>Share:</p>
        <SocialShare />
      </div>

      <div className="flex flex-col gap-5 text-justify">
        <h2 className="text-2xl font-bold ">
          Breakthrough in Sustainable Energy Unveiled by Innovative Tech Company
        </h2>
        <div className="flex gap-3 sm:gap-8">
          <div className="flex items-center gap-2">
            {/* <i className="bx bx-edit-alt font-bold text-sm text-gray-500"></i> */}
            <div className="w-8 h-8 rounded-full border-2 border-blue-300 relative">
              <Image
                fill
                src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                alt="author"
                className="object-contain rounded-full"
              />
            </div>
            <i className="text-italic text-[13px] font-light text-gray-500">
              Deepa Baral
            </i>
          </div>
          <div className="flex items-center gap-2">
            <i className="bx bx-time bx-flip-horizontal font-bold text-sm text-gray-500"></i>
            <i className="text-italic text-[13px] font-light text-gray-500">
              23 Jan 2020 12:13 PM
            </i>
          </div>
        </div>
        <div className="w-full m-auto h-60 sm:h-80 relative">
          <Image
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
            alt="title"
            fill
            className="object-cover"
          />
        </div>
        <p>
          In a groundbreaking announcement today, GreenTech Solutions, a
          pioneering technology company, revealed a revolutionary advancement in
          sustainable energy. The company&apos;s cutting-edge research and
          development have resulted in a breakthrough that could reshape the
          future of renewable energy sources.
          <br />
          GreenTech&apos;s newly developed energy solution harnesses the power
          of advanced solar technology coupled with innovative energy storage
          capabilities. This integration not only enhances the efficiency of
          solar energy capture but also addresses the challenge of storing
          renewable energy for periods of low sunlight.
          <br />
          The breakthrough is expected to have far-reaching implications for the
          global push towards clean and sustainable energy alternatives. Experts
          anticipate that this development could significantly contribute to
          reducing dependence on traditional energy sources and mitigating the
          impact of climate change.
          <br />
          CEO of GreenTech Solutions, Dr. Rebecca Anderson, expressed enthusiasm
          about the potential impact of their discovery. &quot;Our team has
          worked tirelessly to push the boundaries of sustainable energy
          solutions. With this breakthrough, we are not just providing a
          technology; we are offering a key to a more sustainable and
          eco-friendly future for our planet.
          <br />
          &quot; The company plans to collaborate with governments,
          environmental organizations, and industry partners to scale up
          production and implementation. Early reports suggest that the
          technology has already garnered interest from various sectors,
          indicating a potential paradigm shift in how the world generates and
          consumes energy.
          <br /> As the global community continues its quest for cleaner and
          greener alternatives, GreenTech Solutions&apos; breakthrough stands
          out as a beacon of hope, signaling a positive stride towards a more
          sustainable and environmentally conscious future.
        </p>
      </div>
    </div>
  )
}

export default SinglePost
