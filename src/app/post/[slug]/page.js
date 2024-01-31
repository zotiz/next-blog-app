import SocialShare from '@/components/post/SocialShare'
import Image from 'next/image'
import React from 'react'

async function getSinglePosts(params) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/post/${params.slug}`,
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data!')
  }
  return res.json()
}

export async function generateMetadata({ params }) {
  const { post } = await getSinglePosts(params)
  return {
    title: post.title,
    description: post.content,
  }
}
const SinglePost = async ({ params }) => {
  const { post } = await getSinglePosts(params)

  return (
    <div className="md:w-8/12 m-auto py-4">
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-500">Share:</p>
        <SocialShare />
      </div>
      <div className="flex flex-col gap-5 text-justify">
        <h2 className="text-2xl font-bold">{post?.title}</h2>

        {/* <AuthorDate userId={post?.userId} /> */}
        <div className="w-full m-auto h-60 sm:h-80 relative">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuATDVEWn3SJgoOAsEECpmJgzo8-AIj6CajKX_XjpdLczRvkw7VXEx2zWsql5VjNSWM7M&usqp=CAU"
            alt="title"
            fill
            className="object-cover"
          />
        </div>
        <p>{post?.content}</p>
      </div>
    </div>
  )
}

export default SinglePost
