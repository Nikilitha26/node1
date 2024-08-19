import { compare } from "bcrypt";
import { getUserDb } from "../model/userDb.js";
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()

 const checkUser = async(req,res,next) => {
    const {username,password} = req.body;
    let hashedPassword = (await getUserDb(username)).password
       console.log('checkUser');
     let result = await compare(password, hashedPassword) 
    //  console.log(result);
        if(result==true) {
            let token = jwt.sign({username:username}, process.env.SECRET_KEY, {expiresIn:'1h'})
            console.log(token)
            req.body.token = token
            console.log('hehe token');
            next()
            return
        }
        res.send('Password incorrect')
        }

        const verifyAToken = (req,res,next)=>{
            let {cookie} = req.headers
            // checks if the token exists first
            let token = cookie.split('=')[1];
            console.log(token);
            jwt.verify(token,process.env.SECRET_KEY, (err,decoded)=>{
                if(err){
                    res.json({message:'token expired'})
                    return
            }
        
            // req.body.username = decoded.username
            req.body.user = decoded.username
            console.log(decoded);
            next()
        })
    }
    
    export {checkUser, verifyAToken}