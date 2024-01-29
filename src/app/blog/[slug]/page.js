'use client'
import React, { Suspense, useEffect, useState } from 'react'
import SocialShare from '@/components/post/SocialShare'
import AuthorDate from '@/components/post/AuthorDate'
import Image from 'next/image'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SinglePost = ({ params }) => {
  const [data, setData] = useState()
  const getData = async () => {
    try {
      const res = await axios.get(`/api/post/${params.slug}`)

      setData(res?.data?.post)
    } catch (error) {
      throw error.message
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="md:w-8/12 m-auto py-4">
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-500">Share:</p>
        <SocialShare />
      </div>
      <div className="flex flex-col gap-5 text-justify">
        <h2 className="text-2xl font-bold">{data?.title || <Skeleton/>}</h2>

        {/* <AuthorDate userId={post?.userId} /> */}
        <div className="w-full m-auto h-60 sm:h-80 relative">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuATDVEWn3SJgoOAsEECpmJgzo8-AIj6CajKX_XjpdLczRvkw7VXEx2zWsql5VjNSWM7M&usqp=CAU"
            alt="title"
            fill
            className="object-cover"
          />
        </div>
        <p>{data?.content || <Skeleton />}</p>
      </div>
    </div>
  )
}

export default SinglePost
