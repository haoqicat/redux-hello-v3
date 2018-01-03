import React, { Component } from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import styled from 'styled-components'

class Post extends Component {
  render() {
    return (
      <Wrap>
        <Upper>
          <PostBody />
        </Upper>
        <Bottom>
          <CommentBox />
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