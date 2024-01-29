'use client'
import React, { useEffect, useState } from 'react'
import PostCard from '@/components/post/PostCard'
import axios from 'axios'

const BlogPage = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    try {
      const res = await axios.get(`/api/post`)
      setData(res?.data?.allPosts)
    } catch (error) {
      throw error.message
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
      {data.map(item=><PostCard key={item._id} item={item}/>)}
    </div>
  )
}

export default BlogPage
