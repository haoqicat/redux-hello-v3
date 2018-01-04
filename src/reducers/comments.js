const initialState = [
  {
    id: 'wewe2122',
    text: 'hello',
    post: '1'
  },
  {
    id: 'wqewqeq23',
    text: 'hi',
    post: '2'
  }
]

const comments = (state = initialState, action) => {
  switch (action.type) {
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
