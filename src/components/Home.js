import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Home extends Component {
  render () {
    const { posts } = this.props
    const postList = posts.map(
      post => (
        <StyledLink key={post.id} to={`/post/${post.id}`}>
          {post.title}
        </StyledLink>
      )
    )
    return (
      <Wrap>
        <List>
          {postList}
        </List>
      </Wrap>
    )
  }
}

export default Home

const Wrap = styled.div`
  background: #00bcd4;
  min-height: 100vh;
  padding-top: 40px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`

const StyledLink = styled(Link)`
  display: block;
  background: #fff;
  color: #212121;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  :hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }
`
