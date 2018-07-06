// react
import React from 'react'
import { Link } from 'react-router-dom'

// components
import Layout from '../Layout/Layout'

// styles
import classes from './Home.scss'

const Home = () => (
  <Layout>
    <img src="../../assets/logo.png" className={classes.Img} />
    <p className={classes.Text}>Hello World of React and Webpack!</p>
    <p className={classes.NavLink}>
      <Link to="/login">Navigate to Login Page</Link>
    </p>
  </Layout>
)

export default Home
