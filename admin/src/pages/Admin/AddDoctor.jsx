import { useContext } from "react";
import { assets } from "../../assets/assets_admin/assets"
 import { useState } from "react";
import { AdminContext } from "../../context/AdminContext";

const AddDoctor = () => {
   
    const [docImg, setdocImg] = useState(false);
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [experience, setexperience] = useState('1 Year')
    const [fees, setfees] = useState('')
    const [about, setabout] = useState('')
    const [Specialtity, setSpecialtity] = useState('General physician')
    const [degree, setdegree] = useState('')
    const [address1, setaddress1] = useState('')
    const [address2, setaddress2] = useState('')

    const { backendUrl ,aToken } = useContext(AdminContext);

   const onSubmitHandler = async(event)=>{
    event.preventDefault();
   }


  return (
    <form onSubmit={onSubmitHandler} action="" className="m-5 w-full" >
        
        <p className="mb-3 text-lg font-medium" >Add Doctor</p>
        
        <div className=" bg-white px-8 py-8 border rounded w-full max-h-[80vh] overflow-y-scroll " >
            <div className=" flex items-center gap-4 mb-8 text-gray-500">
                <label htmlFor="doc-img">
                    <img src={docImg? URL.createObjectURL(docImg):assets.upload_area} alt="" className="w-16 bg-gray-100 rounded-full cursor-pointer" />
                </label>
                <input onChange={(e)=> setdocImg(e.target.files[0])}  type="file" id="doc-img" hidden />
                <p>Upload doctor <br /> picture</p>
            </div>
       
     

         <div className=" flex flex-col lg:flex-row items-start gap-10 text-gray-600 ">
            <div className="w-full lg:flex-1 flex flex-col gap-4" >


            
                <div className="flex-1 flex flex-col gap-1 " >
                    <p>Doctor Name</p>
                    <input onChange={(e)=>setname(e.target.value) } value={name} className=" border rounded px-3 py-2  " type="text" placeholder="Name" required />
                </div>
            
              
              
            
                <div className="flex-1 flex flex-col gap-1 ">
                    <p>Doctor Email</p>
                    <input  onChange={(e)=>setemail(e.target.value) } value={email} className=" border rounded px-3 py-2  " autoComplete="email" type="email" placeholder="Email" required />
                </div>
            

            
            
                <div className="flex-1 flex flex-col gap-1 ">
                    <p>Doctor Password</p>
                    <input  onChange={(e)=>setpassword(e.target.value) } value={password}  className=" border rounded px-3 py-2"  autoComplete="password" type="password" placeholder="Password" required />
                </div>
        
 
 
        
                <div className="flex-1 flex flex-col gap-1 " >
                    <p>Experience</p>
                    <select  onChange={(e)=>setexperience(e.target.value) } value={experience}  className=" border rounded px-3 py-2  " >
                        <option value="1 Year">1 Year</option>
                        <option value="2 Year">2 Year</option>
                        <option value="3 Year">3 Year</option>
                        <option value="4 Year">4 Year</option>
                        <option value="5 Year">5 Year</option>
                        <option value="6 Year">6 Year</option>
                        <option value="7 Year">7 Year</option>
                        <option value="8 Year">8 Year</option>
                        <option value="9 Year">9 Year</option>
                        <option value="10 Year">10 Year</option>
                    </select>
                </div>
    

               <div className="flex-1 flex flex-col gap-1 " >
                    <p>Fees</p>
                    <input  onChange={(e)=>setfees(e.target.value) } value={fees} className=" border rounded px-3 py-2 " type="number" placeholder="fees" required />
                </div>

         </div>

                 <div className=" w-full lg:flex-1 flex flex-col gap-4 " >

                      <div className="flex-1 flex flex-col gap-1 ">
                    <p>Specialtity</p>
                   <select  onChange={(e)=>setSpecialtity(e.target.value) } value={Specialtity} className=" border rounded px-3 py-2  " >
                    <option value="General physician">General physician</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Pediatricians">Pediatricians</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Gastroenterologist">Gastroenterologist</option>
                   </select>
                </div>
                   

                 <div className="flex-1 flex flex-col gap-1 " >
                    <p>Education</p>
                    <input  onChange={(e)=>setdegree(e.target.value) } value={degree}  className=" border rounded px-3 py-2 " type="text" placeholder="Education" required />
                </div>
                  

                  <div className="flex-1 flex flex-col gap-1s">
                    <p>Address</p>
                    <input  onChange={(e)=>setaddress1(e.target.value) } value={address1} className=" border rounded px-3 py-2  " type="text" placeholder="address 2" required />
                    <input   onChange={(e)=>setaddress2(e.target.value) } value={address2} className=" border rounded px-3 py-2  " type="text" placeholder="address 1" required />
                </div>
                
            </div>
     </div>
             <div>
                <p className=" mt-4 mb-2 " >About Doctor</p>
                <textarea  onChange={(e)=>setabout(e.target.value) } value={about} className=" w-full px-4 pt-2 border rounded " type="text"  placeholder="write about Doctor" rows={5} required  ></textarea>
             </div>
        
     

       <button className=" bg-primary px-10 py-3 mt-4 text-white rounded-full " >Add Doctor</button>
       </div>
    </form>


  )
}

export default AddDoctor