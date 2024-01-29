import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const AuthorAndDateSkeleton = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <Skeleton baseColor="#dedede" circle={true} width={40} height={40} />
      </div>
      <div>
        <Skeleton baseColor="#dedede" width={300} height={22} />
      </div>
    </div>
  )
}

export default AuthorAndDateSkeleton
