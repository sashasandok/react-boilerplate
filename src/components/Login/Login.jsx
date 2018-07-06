// react
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// components
import Layout from '../Layout/Layout'
import Loading from '../Loading/Loading'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <Layout>
        <Loading />
        <Link to="/no-match">
          <h1>Login page</h1>
        </Link>
      </Layout>
    )
  }
}
