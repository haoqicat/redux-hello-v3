import React from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'

const PostContainer = props => <Post {...props} />

const mapStateToProps = state =>({
  comments: state.comments
})

export default connect(mapStateToProps)(PostContainer)
