
import { useContext } from "react";
import Login from "./pages/Login"
  import {ToastContainer, toast } from 'react-toastify';
import { AppContext } from "./context/AppContext";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./coponents/Navbar";
import Sidebar from "./coponents/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashborad from "./pages/Admin/Dashborad";
import AllApointments from "./pages/Admin/AllApointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";

 
const App = () => {

   const {aToken} = useContext(AdminContext);

  return aToken ?(
    <div className=" bg-[#F8F9FD]" >
      <ToastContainer/>
      <Navbar/>
      <div className="  flex items-start" >
        <Sidebar/>
        <Routes>
          <Route  path='/' element={<></>}/>
          <Route  path='/admin-dashborad' element={<Dashborad/>}/>
          <Route  path='/all-apointments' element={<AllApointments/>}/>
          <Route  path='/add-doctor' element={<AddDoctor/>}/>
          <Route  path='/doctor-list' element={<DoctorsList/>}/>
        </Routes>
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