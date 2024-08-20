import React ,{useState,useEffect} from 'react'
import classes from './PostPage.module.css'
import Layout from '../Layout/Layout'
import {useParams} from 'react-router-dom'
import {get_posts} from '../Services/api'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';

const PostPage = () => {

    const params = useParams();
    console.log(params.id)

    const [post,setPost] = useState([])

    const getPost = async()=>{
        try{
            const res = await get_posts();
            const arr = res.result;
            setPost(arr.filter((item)=>item.post_id == params.id)[0])
            console.log(post)   
        }
        catch(err){

        }
    }

    useEffect(() => {
      getPost()
    }, [])

  return (
    <Layout>
      <div className={classes.container}>
      <div className={classes.post}>
      <div className={classes.title}>
      {post?.title}
      </div>
      <div className={classes.img_container}>
      <img src={post.image} className={classes.img} alt="" />
      </div>
      <div className={classes.post_details}>
      <div className={classes.username}>
       <strong>Posted By</strong> : username
      </div>
      <div className={classes.actions}>
      <div><FavoriteBorderIcon/>
      <p>1.4k</p>
      </div>
      <div><CommentIcon/>
      <p>800</p>
      </div>
    
      </div>
      </div>
      <div className={classes.subject}>
      <strong>subject</strong> : {post?.subject}
      </div>
      <div className={classes.description}>
     {post.description}
      </div>
      </div>
      </div>
    </Layout>
  )
}

export default PostPage
