import mongoose from 'mongoose'
const url = process.env.DB_URL
const connectionDB = async () => {
  try {
    await mongoose.connect(url)
    console.log('Database connected successfully!!')
  } catch (error) {
    console.log('Database is not connected!!')
  }
}

export default connectionDB
