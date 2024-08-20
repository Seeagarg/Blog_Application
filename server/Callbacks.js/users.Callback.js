
const { createToken } = require('../Middleware/auth');
const pool = require('../config/db')
const bcryptjs = require('bcryptjs')

module.exports={
    postUser:(req,res)=>{
        const {email,username,password} = req.body;
        console.log(req.body)
        const hashedPassword = bcryptjs.hashSync(password,10);
        const insertQuery = process.env.INSERT_USER
        console.log(insertQuery)

        
        const find_username_query = process.env.LOGIN_USER

        pool.query(find_username_query,[username],(err,result)=>{
            if(err){
                console.log(err)
                return res.send({Error:err});
            }
            else if(result.length>0){
                return res.json({message:"Change Your UserName!!"})
            }
            else{
                const find_user_query = process.env.GET_USER
                pool.query(find_user_query,[email],(err,result)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    else if(result.length >0){
                        console.log(result,'======')
                        return res.json({message:"User Already Exist!!"})
                    }
                    else{
                        pool.query(insertQuery,[email,username,hashedPassword],(err,result)=>{
                            console.log(insertQuery)
                          if(err){
                            console.log("Error ",err);
                          }
                          else{
                            console.log(result)
                            return res.json({message:"Registered Successfully"});
                          }
                        })
                    }
                })

            }
        })
       


        

       
      
      },
      checkUser: (req,res)=>{
        const data = req.body;
        console.log(data)
        const {username,password} = data;
        
        // const insertQuery = process.env.INSERT_USER
        const find_user_query = process.env.LOGIN_USER

       try{
        pool.query(find_user_query,[username],(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            else if(result.length>0){
                console.log(result[0].password)
                const isCorrect = bcryptjs.compareSync(password,result[0].password)
                console.log(isCorrect) 
                if(isCorrect){
                    const token = createToken(data);
                    return res.json({message:"User Found",status:1,token:token,result:result})
                }
                else{
                    return res.json({message:"Wrong Credentials",status:2})
                }
            }
            else{
                return res.json({message:"User Not Found",status:0})
            }
        })
       }
       catch(err){
        console.log(err);
        res.json({status:0,message:"INTERNAL SERVER ERROR!!"})
       }
      },

      getUserProfile:(req,res)=>{
        const data = req.body;
        console.log(data)

        const get_user_query = process.env.GET_USER_PROFILE
        pool.query(get_user_query,[data.id],(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({Error:err,message:"INTERNAL SERVER ERROR",status:0});
            }
            else{
                return res.json({message:"User Exists",result:result,status:1});
            }
        })
        // res.send("user Exist")
      }

    
}