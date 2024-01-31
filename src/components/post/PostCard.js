import Image from 'next/image'
import AuthorAndDate from './AuthorAndDate'
import Link from 'next/link'

const PostCard = ({ items }) => {
  return (
    <>
      <div>
        <Link href={`/post/${items._id}`}>
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
              <AuthorAndDate item={items} /> 
              <div>
                <h2 className="text-lg font-semibold">{items.title}</h2>
                <p className="text-gray-500">{items.content}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default PostCard
