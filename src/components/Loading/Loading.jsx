// react
import React from 'react'

// styles
import classes from './Loading.scss'

const Loading = () => {
  return (
    <div>
      <div className={classes.Spinner}>
        <div className={classes.Bounce1}></div>
        <div className={classes.Bounce2}></div>
        <div className={classes.Bounce3}></div>
      </div>
    </div>
  )
}

export default Loading
