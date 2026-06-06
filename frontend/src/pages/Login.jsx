import React, { useState } from 'react'

const Login = () => {

     const [ State , setState ] =  useState('Sign Up')
     const [email, setemail] = useState('')
     const [passward, setpassward] = useState('')
     const [name, setname] = useState('')

    const  onSubmitHandler = async (e)=>{
     e.preventDefault()
    }      
  return (
       <form className=' min-h-[80vh] flex items-center '>
         
         <div  className=' flex flex-col gap-3 m-auto items-start  p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg ' >
            <p   className=' text-2xl font-semibold '> { State === 'Sign Up' ? "Create Account" : "Login" } </p>
            <p> Please { State === 'Sign Up' ? "sign up" : "log in" } to book appointment </p>
            {/*----------------------------  Name only req for creating an account -------------------------------------*/}
           {
             State === 'Sign Up'
              && 
               <div className='w-full'>
              <p>Full Name</p>
              <input className=' border border-zinc-300 rounded  w-full p-2 mt-1' type="text" onChange={(e)=>setname(e.target.value) } value={name}  requird   />
            </div>
             

           }
            <div className='w-full' >
              <p>Eamil</p>
              <input className=' border border-zinc-300 rounded  w-full p-2 mt-1' type="email" onChange={(e)=>setemail(e.target.value) } value={email}  requird   />
            </div>
            
            <div className='w-full' >
              <p>Password</p>
              <input className=' border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setpassward(e.target.value) } value={passward}  requird   />
            </div>
             <button className=' bg-primary text-white w-full py-2 rounded-md text-base'>
              { State === 'Sign Up' ? "Create Account" : "Login" }</button>
              {
                State === "Sign Up"
                ?<p>Already have an account? <span onClick={()=> setState('Login')} className=' text-primary underline cursor-pointer'>Login here</span> </p>
                :<p>Create a new account? <span  onClick={()=>setState('Sign Up')} className=' text-primary underline cursor-pointer'>Login here</span></p>
              }
            
         </div>


       </form>
    
    
  )
}

export default Login