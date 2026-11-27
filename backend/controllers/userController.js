
import validator from 'validator';
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';

///api to register user

const registerUser = async (req,res)=>{
   
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.json({success:false, message:"missing Credientials" })
        }

        if(!validator.isEmail(email)){
        
        return res.json({success:false, message:"Enter a valid Email" })

        }
        if(password.length<8 ){
              return res.json({success:false, message:"Enter a strong password" })

        }

        /// validating  strong password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        ////saved hashed password in the db using object 

        const userData = {
            name, 
            email,
            password:hashedPassword
        }
        
        ///save in the database

        const newUser = new userModel(userData)
        const user = await newUser.save();
        
        
        ////in the object we will get one ._id so we can create one token for that 
           const token = jwt.sign({id:user._id}, process.env.JWT_SECRET )
            return res.json({success:true, token});

    } catch (error) {
        console.log("error", error);
        return res.json({success: false, message:error.message})
    }


}

export {registerUser};