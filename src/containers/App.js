import React, { Component } from 'react'
import Main from '../components/Main'
import '../assets/global.css'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts()
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
