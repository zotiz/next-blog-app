import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full min-h-screen">
      <h2 className="md:text-4xl font-semibold ">404 | Page Not Found</h2>
      <Link
        href={'/'}
        className="text-blue-600 underline hover:scale-110 transition-all"
      >
        Go to home page
      </Link>
    </div>
  )
}

export default NotFound
