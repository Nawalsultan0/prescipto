
import { useContext } from "react";
import Login from "./pages/Login"
  import {ToastContainer, toast } from 'react-toastify';
import { AppContext } from "./context/AppContext";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./coponents/Navbar";
import Sidebar from "./coponents/Sidebar";

 
const App = () => {

   const {aToken} = useContext(AdminContext);

  return aToken ?(
    <div className=" bg-[#F8F9FD]" >
      <ToastContainer/>
      <Navbar/>
      <div className="  flex items-center" >
        <Sidebar/>
      </div>  
       </div>
  ) :(
    <>
    <Login/>   
    <ToastContainer/>
    </>
  )
}

export default App   