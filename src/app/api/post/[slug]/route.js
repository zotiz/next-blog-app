import connectionDB from '@/db.config/db'
import { PostModel } from '@/model/post.model'
import { NextResponse } from 'next/server'
connectionDB()
export const GET = async (request, { params }) => {
  try {
    const { slug } = params
    const post = await PostModel.findById({ _id: slug })
    return NextResponse.json({ message: 'success', post })
  } catch (error) {
    return NextResponse.json({ message: error.message })
  }
}
