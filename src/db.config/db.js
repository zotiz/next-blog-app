import mongoose from 'mongoose'
const url =
  'mongodb+srv://jyotidahal1234:Joydeep123@cluster0.xfv0izf.mongodb.net/next-blog-app?retryWrites=true&w=majority'
const connectionDB = async () => {
  try {
    await mongoose.connect(url)
    console.log('Database connected successfully!!')
  } catch (error) {
    console.log('Database is not connected!!')
  }
}

export default connectionDB
