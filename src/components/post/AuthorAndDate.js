import React from 'react'
import moment from 'moment'
const AuthorAndDate = ({ item }) => {
  return (
    <div className="flex justify-between gap-2">
      <div className="flex items-center gap-2">
        <i className="bx bx-edit-alt font-bold text-sm text-gray-500"></i>
        <i className="text-italic text-[13px] font-light text-gray-500">
          Joydeep Dahal
        </i>
      </div>
      <div className="flex items-center gap-2">
        <i className="bx bx-time bx-flip-horizontal font-bold text-sm text-gray-500"></i>
        <i className="text-italic text-[13px] font-light text-gray-500">
          {/* {item.createdAt} */}
          {moment(item.createdAt).format("DD MMM YYYY")}
        </i>
      </div>
    </div>
  )
}

export default AuthorAndDate
