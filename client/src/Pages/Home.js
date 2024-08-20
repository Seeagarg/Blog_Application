import React from 'react'
import classes from './Home.module.css'
import Layout from '../Layout/Layout'
import Carousel from '../Components/Carousel'
import Blogs from '../Components/Blogs'

const Home = () => {
  return (
    <Layout>
     <div className={classes.container}>
     <Carousel/>
     <div className={classes.sub_title}>
     <div className={classes.small_line}>

     </div>
     <span> Blogs You May Like</span>
     <div className={classes.large_line}>

     </div>
     </div>
      <Blogs/>
     </div>
    </Layout>
  )
}

export default Home
