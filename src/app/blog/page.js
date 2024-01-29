import React from 'react'
import PostCard from '@/components/post/PostCard'
import axios from 'axios'
async function getAllData() {
  const res = await fetch(`${process.env.LOCAL_DOMAIN}/api/post`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const BlogPage = async () => {
  const data = await getAllData()
  const { allPosts } = data
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
      { allPosts.map((item,index) => (
        <div key={index}>
          <PostCard item={item} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage
