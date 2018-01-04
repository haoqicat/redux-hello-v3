import React, { Component } from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import styled from 'styled-components'

class Post extends Component {
  render() {
    const { comments, match, posts } = this.props
    const { id } = match.params
    return (
      <Wrap>
        <Upper>
          <PostBody id={id} posts={posts} comments={comments} />
        </Upper>
        <Bottom>
          <CommentBox comments={comments} />
        </Bottom>
      </Wrap>
    )
  }
}

export default Post

const Wrap = styled.div``

const Upper = styled.div`
  display: flex;
  background: #00bcd4;
`

const Bottom = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, .1)
`
