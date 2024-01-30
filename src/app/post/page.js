'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

// export const metadata = {
//   title: 'Blog | my-blog-app',
//   description: 'Blog page of my-blog-app',
// }

const BlogPage =  () => {
  const [data, setData] = useState([])
  async function getAllPosts() {
    try {
      const res = await axios.get(`/api/post`)
      setData(res.data.allPosts)
    } catch (error) {
      console.error('Error fetching all posts:', error.message)
      throw error.message
    }
  }
  useEffect(() => {
    getAllPosts()
  }, [])
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
      {data.length > 0 &&
        data.map((item) => (
          <div key={item._id}>
            <Link href={`/post/${item._id}`}>
              <div className="w-full p-3 shadow-md flex flex-col gap-3 rounded-md cursor-pointer">
                <div className="w-full h-52 md:h-48 relative overflow-hidden">
                  <Image
                    priority
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuATDVEWn3SJgoOAsEECpmJgzo8-AIj6CajKX_XjpdLczRvkw7VXEx2zWsql5VjNSWM7M&usqp=CAU"
                    fill
                    alt="flower"
                    sizes="100vh"
                    className="object-contain hover:scale-125 transition-all ease-in duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  {/* <AuthorAndDate item={item} /> */}
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-500">{item.content}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default BlogPage
