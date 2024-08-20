import axios from 'axios'

export const register_user=async(data)=>{
    try{
        const res = await axios.post('http://localhost:4000/users',data);
        return res.data;
      }catch(err){
        console.log(err)
      }
}

export const login_user=async(data)=>{
    try{
        const res = await axios.post('http://localhost:4000/users/login',data);
        return res.data;
      }catch(err){
        console.log(err)
      }
}

export const get_posts = async()=>{
  try{
    const res = await axios.get('http://localhost:4000/getPost')
    return res.data;
  }
  catch(err){
    console.log(err);
    return err;
  }
}

export const get_user = async(data)=>{
  console.log(data)
  try{
    const res = await axios.post('http://localhost:4000/users/getUser',data)
    return res.data
  }
  catch(err){
    return err;
  }
}