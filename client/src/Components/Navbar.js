import React from 'react'
import classes from './Navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
      Blog App
      </div>
      <div className={classes.tabs}>
      <Link to='/' className={classes.link} >
        Home
      </Link>
      <Link to='/about' className={classes.link}>
        About
      </Link>
      <Link to='/popular' className={classes.link}>
      Popular
      </Link>
      <Link to='/createPost' className={classes.link}>
      Create
      </Link>
      <Link to='/profile' className={classes.link}>
        Profile
      </Link>
      </div>
    </div>
  )
}

export default Navbar
