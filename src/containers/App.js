import React, { Component } from 'react'
import Main from '../components/Main'
import '../assets/global.css'
import { connect } from 'react-redux'
import { fetchPosts, fetchComments } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchComments()
  }
  
  render() {
    return (
      <Main />
    )
  }
}

export default connect(null, {
  fetchPosts,
  fetchComments
})(App)
