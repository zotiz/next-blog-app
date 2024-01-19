import React from 'react'
import Image from 'next/image'
import AuthorAndDate from './AuthorAndDate'
import Link from 'next/link'
const PostCard = ({ item }) => {
  return (
    <Link href={`/blog/${item.id}`}>
      <div className="w-full p-3 shadow-md flex flex-col gap-3 rounded-md">
        <div className="w-full h-52 md:h-48 relative">
          <Image
            priority
            src={item.image}
            fill
            alt={item.title}
            sizes="100vh"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <AuthorAndDate item={item} />
          <div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-500">{item.content}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
