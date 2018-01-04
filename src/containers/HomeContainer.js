import React from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(HomeContainer)
