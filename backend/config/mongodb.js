import mongoose from "mongoose";

const connectDB = async ()=>{

    mongoose.connection.on('connected', ()=> console.log(' MongoDB connected successfuly'))
     
    await mongoose.connect(`${process.env.MONGODB_URI}/prescipto`)

}

export default connectDB;
