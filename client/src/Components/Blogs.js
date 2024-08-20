import React from 'react'
import classes from './Blogs.module.css'


const Blogs = () => {

    const blog_arr=[
        {
            src:'/assets/b2.jpg',
            data:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ut enim minima. Ratione, ex! Tempore eaque dolorum ea libero consequatur consequuntur, qui minima inventore, optio accusantium esse enim similique nulla culpa asperiores corrupti? Magnam, accusantium impedit perferendis ipsa velit quibusdam recusandae consequuntur architecto molestiae temporibus excepturi tempore .',
            user:'user1',
            url:'/'
        },
        {
            src:'/assets/b3.webp',
            data:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ut enim minima. Ratione, ex! Tempore eaque dolorum ea libero consequatur consequuntur, qui minima inventore, optio accusantium esse enim similique nulla culpa asperiores corrupti? Magnam, accusantium impedit perferendis ipsa velit quibusdam recusandae consequuntur architecto molestiae temporibus excepturi tempore .',
            user:'user2',
            url:'/'
        },
        {
            src:'/assets/b4.jpg',
            data:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ut enim minima. Ratione, ex! Tempore eaque dolorum ea libero consequatur consequuntur, qui minima inventore, optio accusantium esse enim similique nulla culpa asperiores corrupti? Magnam, accusantium impedit perferendis ipsa velit quibusdam recusandae consequuntur architecto molestiae temporibus excepturi tempore .',
            user:'user3',
            url:'/'
        },
        {
            src:'/assets/b6.png',
            data:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ut enim minima. Ratione, ex! Tempore eaque dolorum ea libero consequatur consequuntur, qui minima inventore, optio accusantium esse enim similique nulla culpa asperiores corrupti? Magnam, accusantium impedit perferendis ipsa velit quibusdam recusandae consequuntur architecto molestiae temporibus excepturi tempore .',
            user:'user4',
            url:'/'
        }
    ]
   
  return (
    <div className={classes.container}>
   {
    blog_arr.map((item)=>(
        <>
        <div className={classes.b1}>
    <div className={classes.img}>
    <img src="/assets/b2.jpg" alt=""  />
    </div>
    <div className={classes.data}>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ut enim minima. Ratione, ex! Tempore eaque dolorum ea libero consequatur consequuntur, qui minima inventore, optio accusantium esse enim similique nulla culpa asperiores corrupti? Magnam, accusantium impedit perferendis ipsa velit quibusdam recusandae consequuntur architecto molestiae temporibus excepturi tempore .
<br />
<button className={classes.button}><span className={classes.button_content}> Read More </span></button>
    </div>
    </div>
        </>
    ))
   }
    
    </div>
  )
}

export default Blogs
