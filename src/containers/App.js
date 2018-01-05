import React, { Component } from 'react'
import Main from '../components/Main'
import '../assets/global.css'
import axios from 'axios'
import store from '../store'

class App extends Component {
  componentDidMount() {
    const uri = `https://jsonplaceholder.typicode.com/posts`
    axios.get(uri).then(
      res => {
        const posts = res.data
        store.dispatch({ type: 'LOAD_POSTS', posts })
      }
    )
  }
  
  render() {
    return (
      <Main />
    )
  }
}

export default App
