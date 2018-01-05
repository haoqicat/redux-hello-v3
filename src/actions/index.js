export const addComment = comment => ({
  type: 'ADD_COMMENT',
  comment
})

export const fetchPosts = posts => ({
  type: 'LOAD_POSTS',
  posts
})
