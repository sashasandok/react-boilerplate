// react
import React from 'react'
import { Link } from 'react-router-dom'

// prop-types
import PropTypes from 'prop-types'

// styles
import classes from './Layout.scss'

// icons
import { Icon } from 'react-icons-kit'
import { ravelry } from 'react-icons-kit/fa/ravelry'

const Layout = ({ children }) => (
  <div className={classes.Contain}>
    <Link to="/">
      <header as="h1" className={classes.Header}>
        webpack-for-react
      </header>
    </Link>
    <div className={classes.Main}>{children}</div>
    <div>
      <div>
        <p className={classes.Divider}></p>
        <div className={classes.Footer}>
          <div className={classes.Icon} style={{ color: 'red' }}>
            <Icon icon={ravelry} />
          </div>
          <p>by Alex_Sandok</p>
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
