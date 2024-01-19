'use client'
import React from 'react'
import PostCard from '@/components/post/PostCard'
import { useRouter } from 'next/navigation'
const BlogPage = () => {
  const router = useRouter()
  const postData = [
    {
      id: 1,
      title: 'This is the first title',
      content: 'This is my first content',
      image:
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg',
      author: 'Joydeep dahal',
      date: '12 Jan 2023',
    },
    {
      id: 2,
      title: 'This is the second title',
      content: 'This is my second content',
      image: 'https://pixlr.com/images/index/ai-image-generator-one.webp',
      author: 'Joydeep dahal',
      date: '12 Jan 2023',
    },
    {
      id: 3,
      title: 'This is the third title',
      content: 'This is my third content',
      image:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
      author: 'Joydeep dahal',
      date: '12 Jan 2023',
    },
    {
      id: 4,
      title: 'This is the fourth title',
      content: 'This is my fourth content',
      image:
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg',
      author: 'Joydeep dahal',
      date: '12 Jan 2023',
    },
    {
      id: 5,
      title: 'This is the fifth title',
      content: 'This is my fifth content',
      image:
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg',
      author: 'Joydeep dahal',
      date: '12 Jan 2023',
    },
  ]
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
      {postData.map((item) => (
        <PostCard
         
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default BlogPage
