
import React from 'react'
import Image from 'next/image'
export const metadata = {
  title: 'Contact | my-blog-app',
  description: 'Contact page of my-blog-app',
}
const ContactPage = () => {
  
  return (
    <div className="mt-4 md:mt-24 mb-8">
   
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 text-left mb-4">
        Contact Us
      </h2>
      <div className="grid md:grid-cols-2 gap-10 ">
        {/* <h2 className="text-xl sm:text-2xl font-bold text-blue-700 text-left">
        About Agency
      </h2> */}
        <div className="w-full h-60 md:h-auto relative">
          <Image
            src="/contact.png"
            fill
            className="object-contain"
            alt="contact"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-8 md:gap-12  md:items-start p-4">
          <form action="" className="flex flex-col w-full gap-3">
            <input
              className="p-2 text-sm border-[1px] border-blue-300 shadow-md outline-none rounded-sm"
              type="text"
              placeholder="Name and Surname"
            />
            <input
              className="p-2 text-sm border-[1px] border-blue-300 shadow-md outline-none rounded-sm"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="p-2 text-sm border-[1px] border-blue-300 shadow-md outline-none rounded-sm"
              type="phone"
              placeholder="Phone Number"
            />
            <textarea
              className="p-2 text-sm border-[1px] shadow-md border-blue-300 outline-none rounded-sm"
              rows={6}
              placeholder="Write something..."
            ></textarea>
            <button
              type="submit"
              className="h-10 p-2 bg-blue-700 rounded-sm my-1 text-white border-[1px] border-blue-700 shadow-md "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
