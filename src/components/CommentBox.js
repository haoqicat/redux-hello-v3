import React, { Component } from 'react'
import styled from 'styled-components'
import shortid from 'shortid'

class CommentBox extends Component {

  state = {
    text: '',
    comments: [
      {
        id: 'wewe2122',
        text: 'hello'
      },
      {
        id: 'wqewqeq23',
        text: 'hi'
      }
    ]
  }

  submitCmt = e => {
    e.preventDefault()
    const { text } = this.state
    const id = shortid()
    const comments = [
      ...this.state.comments,
      { id, text }
    ]
    this.setState({
      text: '',
      comments
    })
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      text: e.target.value
    })
  }
  
  render () {
    const cmtForm = (
      <div>
        <input 
          value={this.state.text} 
          onChange={this.handleChange}
        />
        <button onClick={this.submitCmt}>提交</button>
      </div>
    )

    const { comments } = this.state
    const reversedComments = [...comments].reverse()
    const cmtList = reversedComments.map(
      t => <div key={t.id}>{t.text}</div>
    )
    
    return (
      <Wrap>
        {cmtForm}
        {cmtList}
      </Wrap>
    )
  }
}

export default CommentBox

const Wrap = styled.div`
  background-color: #fff;
  width: 400px;
  margin: 30px auto;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .5);
  height: 300px;
`
