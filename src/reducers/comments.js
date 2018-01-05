const comments = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_COMMENTS':
      return action.comments
    case 'ADD_COMMENT':
      const comments = [
        ...state,
        action.comment
      ]
      return comments
    default:
      return state
  }
}

export default comments
