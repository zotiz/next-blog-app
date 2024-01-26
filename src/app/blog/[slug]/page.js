import AuthorDate from '@/components/post/AuthorDate'
import SocialShare from '@/components/post/SocialShare'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'

const SinglePost = async ({ params }) => {
  const data = await fetchDatabyId(params)

  return (
    <div className="md:w-8/12 m-auto py-4">
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-500">Share:</p>
        <SocialShare />
      </div>

      <div className="flex flex-col gap-5 text-justify">
        <h2 className="text-2xl font-bold ">{data.title}</h2>
        <AuthorDate />
        <div className="w-full m-auto h-60 sm:h-80 relative">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuATDVEWn3SJgoOAsEECpmJgzo8-AIj6CajKX_XjpdLczRvkw7VXEx2zWsql5VjNSWM7M&usqp=CAU"
            alt="title"
            fill
            className="object-cover"
          />
        </div>
        <p>{data.body}</p>
      </div>
    </div>
  )
}

export default SinglePost

const fetchDatabyId = async (params) => {
  const { slug } = params
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${slug}`,
    )
    return res?.data
  } catch (error) {
    console.log('data fetching error ', error.message)
    return error.response?.data
  }
}
