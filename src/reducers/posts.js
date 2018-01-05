
const posts = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      return action.posts
    default: 
      return state
  }
}

export default posts
