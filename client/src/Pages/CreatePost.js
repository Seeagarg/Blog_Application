import React,{useState,useEffect} from 'react'
import classes from './CreatePost.module.css'
import Layout from '../Layout/Layout'
import upload_img from '../Animations/upload_img.json'
import Lottie from 'lottie-react'
import axios from 'axios'
import moment from 'moment';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {

    // const initialPost={
    //     title:"",
    //     subject:"",
    //     image:"",
    //     desc:"",
    //     category:"",
    //     createdDate: new Date(),
    // }

    const navigate = useNavigate();

    const [title,setTitle] = useState('');
    const [subject,setSubject] = useState('');
    const [desc,setDesc] = useState('');
    const [selectedFile,setSelectedFile] = useState('')
    const [imagePreview, setImagePreview] = useState(null);



   

    const handleFileChange=(e)=>{
        setSelectedFile(e.target.files[0]);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }



    const handleAnimation=async()=>{
        const input = document.getElementById('input').click()
        // console.log(input)
    }

    const handlePublish=async()=>{
        // console.log(title);
        // console.log(subject);
        // console.log(selectedFile);
        // console.log(desc);
        const user = JSON.parse(localStorage.getItem('user'));
        if(selectedFile){
            const filedata = new FormData();
            filedata.append("name",selectedFile.name)
            filedata.append("username",user.username)
            filedata.append("user_id",user.id)
            filedata.append("file",selectedFile)
            filedata.append("title",title)
            filedata.append("desc",desc)
            filedata.append("subject",subject)
            filedata.append("date",moment().format('YYYY-MM-DD HH:MM:SS'))
            console.log(filedata)
            try{
                const res = await axios.post('http://localhost:4000/uploadimg',filedata)
                console.log(res)
            
                setTitle('');
                setSubject('');
                setDesc('');
                setImagePreview(null);
                toast.success(res.message)
                navigate('/');
            }
            catch(err){
                console.log(err)
                setTitle('');
                setSubject('');
                setDesc('');
                setImagePreview(null);
                toast.error(err.message)
            }
        }
    }

    

  return (
    <Layout>
    <div className={classes.container}>
    {/* <form action="submit"> */}
    <div className={classes.img_container}>
    {
        imagePreview?
        <>
        <img src={imagePreview} alt="no image" style={{height:"100%",width:"100%"}} />
        <button onClick={()=>setImagePreview("")}>Select Another</button>
        </>
        :
        <>
        <Lottie  animationData={upload_img} className={classes.upload_animation} onClick={handleAnimation}/>
    <input type="file" id='input'  style={{display:"none"}} onChange={handleFileChange}/>
    </>
    }
    </div>
    <div className={classes.title}>
        <input type="text" placeholder="Title" value={title} className={classes.title_input} onChange={(e)=>{setTitle(e.target.value)}} />
        <button className={classes.button} onClick={handlePublish}>
  <span className={classes.button_content}>Publish</span>
</button>
    </div>
    <div className={classes.inputs}>
        <input type="text" className={classes.sub_input} placeholder="Write Subject here.." value={subject} onChange={(e)=>setSubject(e.target.value)} />
        <textarea name="desc" id="Desc" className={classes.text_area} placeholder="Write Description of your Blog..." rows="5" cols="3" onChange={(e)=>{setDesc(e.target.value)}}></textarea>
    </div>
    {/* </form> */}
    </div>
    <ToastContainer/>
    </Layout>
  )
}

export default CreatePost
