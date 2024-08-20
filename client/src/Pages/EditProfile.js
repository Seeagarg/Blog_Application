import React,{useState} from 'react'
import Layout from '../Layout/Layout'
import classes from './EditProfile.module.css'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import ImageIcon from '@mui/icons-material/Image';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const EditProfile = () => {

  const user = JSON.parse(localStorage.getItem(''))

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [photo,setPhoto] = useState('');
  const [password,setPassword] = useState('');
  const [instaUrl,setInstaUrl] = useState('');
  const [facebookUrl,setFaceboolUrl] = useState('');
  const [twitterUrl,setTwitterUrl] = useState('');
  const [whatsApp,setWhatsApp] = useState('');



  return (
    <Layout>
      <div className={classes.container}>
      <h1 className={classes.header}>Edit Your Profile</h1>
      <form action="" className={classes.form}>
      <div className={classes.left_side}>
     <div className={classes.input_container}>
     <label htmlFor="">UserName</label>
     <br />
     <div className={classes.input}>
      <PersonIcon/>
      <input type="text"  />
     </div>
     </div>

     <div className={classes.input_container}>
     <label htmlFor="">Email</label>
     <br />
     <div className={classes.input}>
      <EmailIcon/>
     <input type="email" />
     </div>
     </div>
     <div className={classes.input_container}>
     <label htmlFor="">Facebook</label>
     <br />
     <div className={classes.input}>
      <FacebookIcon/>
     <input type="text" />
     </div>
     </div>
     <div className={classes.input_container}>
     <label htmlFor="">Twitter</label>
     <br /> 
     <div className={classes.input}>
      <TwitterIcon/>
     <input type="text" />
     </div>
     </div>
      </div>
      <div className={classes.right_side}>
      <div className={classes.input_container}>
     <label htmlFor="">profile photo</label>
     <br />
     <div className={classes.input}>
      <ImageIcon/>
     <input type="file" />
     </div>
     </div>
     <div className={classes.input_container}>
     <label htmlFor="">password</label>
     <br />
     <div className={classes.input}>
      <HttpsIcon/>
     <input type="password" />
     </div>
     </div> 
     <div className={classes.input_container}>
     <label htmlFor="">Instagram</label>
     <br />
     <div className={classes.input}>
      <InstagramIcon />
     <input type="text" />
     </div>
     </div> 
     <div className={classes.input_container}>
     <label htmlFor="">Whats App</label>
     <br />
     <div className={classes.input}>
      <WhatsAppIcon />
     <input type="text" />
     </div>
     </div>   
      </div>
      </form>
      </div>
    </Layout>
  )
}

export default EditProfile
