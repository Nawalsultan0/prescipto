import validator from 'validator';
import byc

////// api for adding doctor 

const addDoctor = async(req,res)=>{

     try{
      const {name, email, password , speciality, 
            degree, experience, about , fees , address
            } =  req.body ;
 
       const imageFile = req.file;
       //console.log({name, email, password , speciality, degree, experience, about , fees , address},imageFile);
        
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
      const salt =  await 


}
catch(err){
     res.status(500).json({message: "Error adding doctor"})

     }
}

export  {addDoctor} ;