import connectionDB from '@/db.config/db'
import { NextResponse } from 'next/server'
import { PostModel } from '@/model/post.model'
connectionDB()

export const POST = async (request) => {
  try {
    const reqBody = await request.json()
    console.log(reqBody)
    const { title, content, slug } = reqBody
    const existingPostOne = await PostModel.findOne({ title })
    if (existingPostOne)
      throw new Error('This post title already Exist. Please use another title')
    const existingPostTwo = await PostModel.findOne({ content })
    if (existingPostTwo) throw new Error('This Post Content Already Exist.')
    const existingPostThree = await PostModel.findOne({ slug })
    if (existingPostThree)
      throw new Error('This slug already Exist, Use another one.')
    const newPost = new PostModel(reqBody)
    await newPost.save()
    return NextResponse.json({
      message: 'New Post Created Successfully!',
      newPost,
    })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export const GET = async (request) => {
  try {
    const allPosts = await PostModel.find()
    return NextResponse.json({
      message: 'All Posts fetching successfully!!',
      allPosts,
    })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
