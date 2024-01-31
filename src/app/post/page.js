import PostCard from '@/components/post/PostCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/post`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export const metadata = {
  title: 'Blog | my-blog-app',
  description: 'Blog page of my-blog-app',
}

const BlogPage = async () => {
  const { allPosts } = await getData()
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
      {allPosts.map((item) => (
        <PostCard key={item._id} items={item}/>
      ))}
     
        
    </div>
  )
}

export default BlogPage
