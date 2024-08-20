const pool = require('../../config/db')
require('dotenv').config();
const url=process.env.BACKEND_URL

module.exports={
    uploadImage:(req,res)=>{
        const data = req.body
        const file = `${url}/images/${req.file.filename}`
        console.log(data,file)

        const send_post_query = process.env.INSERT_POST 
        pool.query(send_post_query,[data.username,data.user_id,file,data.title,data.subject,data.desc,data.date],(err,result)=>{
            if(err){
                console.log(err);
                res.status(500).json({Error:err,message:"INTERNAL SERVER ERROR!!"});
                return;
            }
            else{
                res.json({message:"Post Created Successfully!!",status:1,result:result})
                return;
            }
        })
        // res.send({file:file,data:data});
    },

    getPosts:(req,res)=>{
        // const data = req.body;
        // console.log(data)
        const get_query = process.env.GET_POSTS
        
        pool.query(get_query,[],(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).send({message:"INTERNAL SERVER ERROR",error:err,status:0})
            }
            else{
                return res.send({message:"Posts fetched Successfully!!",result:result,status:1});
            }
        })

    }
}