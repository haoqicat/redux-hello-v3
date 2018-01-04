import React, { Component } from 'react'
import styled from 'styled-components'
import store from '../store'

class PostBody extends Component {
  render () {
    return (
      <Wrap>
        <CommentNo>
          {store.getState().length} 评论
        </CommentNo>
      </Wrap>
    )
  }
}

export default PostBody

const Wrap = styled.div`
  background-color: #fff;
  width: 400px;
  margin: 30px auto;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .5);
  height: 300px;
  position: relative;
`

const CommentNo = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-bottom: 2px solid deeppink;
`