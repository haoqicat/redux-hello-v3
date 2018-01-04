import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    const { posts } = this.props
    const postList = posts.map(
      post => (
        <Link key={post.id} to={`/post/${post.id}`}>
          {post.title}
        </Link>
      )
    )
    return (
      <div>
        {postList}
      </div>
    )
  }
}

export default Home
