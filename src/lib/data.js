import axios from 'axios'

export async function getAllPosts() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/post`)
    return res?.data?.allPosts
  } catch (error) {
    console.error('Error fetching all posts:', error.message)
    throw error.message
  }
}
