import React, { Component } from 'react'
import Main from '../components/Main'
import '../assets/global.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class App extends Component {
  componentDidMount() {
    const uri = `https://jsonplaceholder.typicode.com/posts`
    axios.get(uri).then(
      res => {
        const posts = res.data
        this.props.fetchPosts(posts)
      }
    )
  }
  
  render() {
    return (
      <Main />
    )
  }
}

export default connect(null, {
  fetchPosts
})(App)
