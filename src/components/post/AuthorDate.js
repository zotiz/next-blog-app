import axios from 'axios'
import moment from 'moment'
import Image from 'next/image'

const AuthorDate =  (item) => {
  return (
    <div className="flex gap-3 sm:gap-8">
      <div className="flex items-center gap-2">
        {/* <i className="bx bx-edit-alt font-bold text-sm text-gray-500"></i> */}
        <div className="w-8 h-8 rounded-full border-2 border-blue-300 relative">
          <Image
            fill
            src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
            alt="author"
            className="object-contain rounded-full"
          />
        </div>
        <i className="text-italic text-[13px] font-light text-gray-500">
          Joydeep dahal
        </i>
      </div>
      <div className="flex items-center gap-2">
        <i className="bx bx-time bx-flip-horizontal font-bold text-sm text-gray-500"></i>
        <i className="text-italic text-[13px] font-light text-gray-500">
          {item.createdAt}
          {moment(item.createdAt).format('DD MMM YYYY')}
        </i>
      </div>
    </div>
  )
}

export default AuthorDate

const getUser = async (userId) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      { cache: 'no-store' },
    )
    return res.data
  } catch (error) {
    console.log('user data fetching error ', error.message)
    throw error.message
  }
}
