import { createContext,useEffect,useState } from "react";
//import { doctors } from "../assets/assets_frontend/assets";////now no need bcz calling it from api
import axios from 'axios';
//import { useState } from "react";
import {toast} from 'react-toastify';
///create context//////
export const AppContext = createContext();



///provide create context function/////
const AppContextProvider =(props)=>{

 const currency = '$'

 const backendUrl = import.meta.env.VITE_BACKEND_URL;

 const [doctors, setdoctors] = useState([])

const value ={
        doctors, currency, backendUrl,
    }



  const getDoctorsData = async()=>{
  try {
     const {data} = await axios.get(backendUrl + '/api/doctor/list')
        if(data.success){
         setdoctors(data.doctors)
        }else{
            toast.error(data.message)
        }
     

  } catch (error) {
     console.log(error);
     toast.error(error.message);
  }
  }

    useEffect(() => {
      
    getDoctorsData();
      
    }, [])
    

   return(
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
   )

}

export default AppContextProvider


