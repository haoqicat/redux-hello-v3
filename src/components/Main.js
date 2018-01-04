import React, { Component } from 'react'
import HomeContainer from '../containers/HomeContainer'
import PostContainer from '../containers/PostContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class Main extends Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/post/:id' component={PostContainer} />
          </div>
        </Router>
      </div>
    )
  }
}

export default Main
