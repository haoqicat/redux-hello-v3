import React, { Component } from 'react'
import styled from 'styled-components'

class CommentBox extends Component {

  state = {
    text: ''
  }

  submitCmt = e => {
    e.preventDefault()
    console.log(this.state.text)
    this.setState({
      text: ''
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
    
    return (
      <Wrap>
        {cmtForm}
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
