import mongoose from 'mongoose'

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Database connected successfully!!')
  } catch (error) {
    console.log('Database is not connected!!')
  }
}

export default connectionDB
