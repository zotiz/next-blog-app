import axios from "axios"


export async function getAllPosts() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
    return res?.data?.allPosts
  } catch (error) {
    console.error('Error fetching all posts:', error.message)
    throw error.message
  }
}

export async function getSinglePosts(params) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/post/${params.slug}`,
    )

    return res?.data?.post
  } catch (error) {
    console.error('Error fetching single post:', error.message)
    throw error.message
  }
}
