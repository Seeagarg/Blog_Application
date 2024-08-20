const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports={
    createToken:(data)=>{
        const payLoad = {
            username : data.username,
            password : data.password,
        }
        const token = jwt.sign(payLoad,process.env.SECRET_KEY);
        return token;
    },

    validateToken:(req,res,next)=>{

        if (!req.headers || !req.headers.authorization) {
            res.isAuth = false;
            return next();
        }

        const BearerToken = req.headers.autorization;
        console.log(token,'BT')

        if(BearerToken){
            const token = BearerToken.split('Bearer ')[1];
            console.log(token,'token')

        if(token){
            try{
                const user = jwt.verify(token,process.env.SECRET_KEY)
                res.isAuth = true;
                return next();
                
            }
            catch(err){
                console.log(err,'error in validating token');
                res.isAuth = false;
                return next();
            }
            
        }
        else {
            res.isAuth = false;
            return next();
          }

       
    }
    else{
        res.isAuth = false;
        return next();
    }
}
}