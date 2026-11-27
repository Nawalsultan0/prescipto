import 'dotenv/config';
import express from 'express';
import cors  from 'cors';
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorroute.js';


/////app config 
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares

app.use(express.json());
app.use(cors());

///api endpoints

app.use('/api/admin', adminRouter )
app.use('/api/doctor', doctorRouter )


app.get('/',(req, res)=>{
    res.send('Api is working fine')
})



app.listen(port, ()=>(
    console.log("server is working ", port)

 ) )