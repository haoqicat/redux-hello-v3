import React, { Component } from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import styled from 'styled-components'

class Post extends Component {
  render() {
    const { comments, match, posts, addComment } = this.props
    const { id } = match.params
    const currentComments = comments.filter(
      t => t.postId.toString() === id
    )
    // FIXME：重构到 selecters 函数中比较好
    return (
      <Wrap>
        <Upper>
          <PostBody id={id} posts={posts} comments={currentComments} />
        </Upper>
        <Bottom>
          <CommentBox 
            postId={id} 
            comments={currentComments} 
            addComment={addComment}
          />
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
