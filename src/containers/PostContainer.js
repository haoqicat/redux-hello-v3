import React from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'
import { addComment } from '../actions'

const PostContainer = props => <Post {...props} />

const mapStateToProps = state =>({
  comments: state.comments,
  posts: state.posts
})

export default connect(mapStateToProps, {
  addComment
})(PostContainer)
