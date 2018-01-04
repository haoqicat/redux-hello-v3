const initialState = [
  {
    id: 'wewe2122',
    text: 'hello'
  },
  {
    id: 'wqewqeq23',
    text: 'hi'
  }
]

const rootReducer = (state = initialState, action) => {
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

export default rootReducer