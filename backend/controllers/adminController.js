import 'dotenv/config';
import validator from 'validator';
import bycrypt from "bcrypt"
import { v2 as cloudinary } from 'cloudinary';
import jwt from 'jsonwebtoken';
import Doctor from "../models/doctorModel.js";
import doctorModel from '../models/doctorModel.js';

////// api for adding doctor 

const addDoctor = async(req,res)=>{

     try{
       const {name, email, password, speciality, degree, experience, about, fees, address} = req.body;
       const imageFile = req.file;
        

       console.log({name, email, password, speciality, degree, experience, about, fees, address},imageFile)

       ///checking  for all  data to add doctor in the data base 
       if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
           return res.json({success: false , message: "please fill all the fields"})
       }


      if(!validator.isEmail(email)){
        return res.json({success: false , message: "please enter the valid email"})  
      }
       //// validating strong password
      if(password.length <8   ){
          return res.json({success: false , message: "password must be at least 8 characters long"})
      }
       
      ///// hashing doctor password 
      const salt =  await bycrypt.genSalt(10);
        const hashedPassword =await bycrypt.hash(password, salt)
        
        

        ///  upload image to cloudinary 
        const imageUpload = await  cloudinary.uploader.upload(imageFile.path,{resource_type: "image"})
        ///// we will get one image link from cloudinary ad store it in the database 

        const imageUrl = imageUpload.secure_url;

        
        const doctorData={
          name,
          email,
          image:imageUrl,
          password:hashedPassword,
          speciality,
          degree,
          experience,
          about,
          fees,
          address:JSON.parse(address), ///converting address string to json object 
          date: Date.now()}



          const newDoctor = new Doctor(doctorData);
          await newDoctor.save();/// save doctor data to the database
        
            res.json({success: true, message: "Doctor added successfully"})

     }
  catch(error){
        console.error("Error:", error);
        

        res.json({success: false, message:error.message})
  }
}


const loginAdmin = (req,res)=>{

  try{
    
    const {email, password} = req. body;

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password, process.env.JWT_SECRET)
      res.json({success:true,token})


    }
    else{
      res.json({success:false , message:"Invalid Email and Password"})
    }

  }
  catch(error){
    console.log("error:", error)
    return res.json({success:false , message:error.message })
  }


}


///api to get all doctors list for admin pannel
const allDoctors = async (req,res)=>{
  try {
    /// need every data accpect password
     const doctors = await doctorModel.find({}).select('-password');
     res.json({success:true, doctors });
  } catch (error) {
    console.log("error", error)
    return res.json({success:false, message:error.message})
  }
}

export {addDoctor,loginAdmin,allDoctors }