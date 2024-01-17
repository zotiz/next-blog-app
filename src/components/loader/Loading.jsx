'use client'
import { RotatingLines } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <RotatingLines
        visible={true}
        height="80"
        width="80"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default Loading