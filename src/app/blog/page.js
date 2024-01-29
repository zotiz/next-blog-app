import React from 'react'
import PostCard from '@/components/post/PostCard'
import axios from 'axios'
const BlogPage = async () => {
  const data = await postData()

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
      {data.map((item) => (
        <PostCard key={item._id} item={item} />
      ))}
    </div>
  )
}

export default BlogPage

const postData = async () => {
  try {
    const res = await axios.get(`${process.env.LOCAL_DOMAIN}/api/post`)
    return res?.data?.allPosts
  } catch (error) {
    console.log('data fetching error ', error.message)
    return error?.response?.data
  }
}
