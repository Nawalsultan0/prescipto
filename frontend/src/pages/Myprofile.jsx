import React, { useState } from 'react'
import assets from '../assets/assets_frontend/assets'

const Myprofile = () => {


 const [userData, setuserData] = useState({ 
  name:"Edward Vincent",
  image:assets.profile_pic,
  email:'Edward.vincant2004@gmail.com',
  phone:"+1 123 456 789 ",
  address:{
    line1:"57th Cross, Richmond ",
    line2:"Circle Curhch Road, London"
  },
  gender:'Male',
  Dob:'2000-01-20'
})

const [isEdit, setisEdit] = useState(false)


  return (
    <div>
      <img src={userData.image} alt="" />

      {
        isEdit
        ? <input type='text' value={userData.name} onChange={e=>setuserData(prev =>({...prev,name:e.target.value }))} />
        : <p>{userData.name}</p>

      }
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>phone:</p>
          
      {
        isEdit
        ? <input type='text' value={userData.phone} onChange={e=>setuserData(prev =>({...prev,phone:e.target.value }))} />
        : <p>{userData.phone}</p>

      }
       <p>Address:</p>
       {
        isEdit
        ?
        <p> 
        <input type="" />
        <hr />
        <input type="text" />
         </p> 
        :
        <p>
          {userData.address.line1}
          <hr />
          {userData.address.line2}
        </p>
       }


        </div>
      </div>
    </div>
  )
}

export  default Myprofile