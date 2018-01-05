import axios from 'axios'

export const addComment = comment => ({
  type: 'ADD_COMMENT',
  comment
})

export const fetchPosts = () => {
  return dispatch => {
    const uri = `https://jsonplaceholder.typicode.com/posts`
    axios.get(uri).then(
      res => {
        const posts = res.data
        dispatch({
          type: 'LOAD_POSTS',
          posts
        })
      }
    )
  }
}

export const fetchComments = () => {
  return dispatch => {
    const uri = `https://jsonplaceholder.typicode.com/comments`
    axios.get(uri).then(
      res => {
        const comments = res.data
        dispatch({
          type: 'LOAD_COMMENTS',
          comments
        })
      }
    )
  }
}
