import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import assets from '../assets/assets_frontend/assets'
import ReleatedDoctors from '../components/ReleatedDoctors'

const Appointment = () => {

  const {docId} =useParams()
  const {doctors,currency} = useContext(AppContext)
  const [docInfo,setdocInfo] = useState(null)
  const [docSlots, setdocSlots] =useState([])
  const [slotIndex, setslotIndex] =useState(0)
  const [slotTime, setslotTime] =useState('')

  const daysOfWeek = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ]
     
  useEffect(()=>{
    const fetchDpcInfo = async () => {
    const docInfo =doctors.find(doc => doc._id === docId)
    setdocInfo(docInfo)
  }
   fetchDpcInfo()
  },[doctors,docId])
     
    
    const getAvalaibleSlot = async () => {
     
       ///getting current date
       let today= new Date()
         
       let allSlots = [];

       for(let i=0; i<7; i++){
        ////getting date with index 
          let currentDate =new Date(today)
          currentDate.setDate(today.getDate() + i )

          ///setting end time of the  date with index 
          let endTime = new Date()
          endTime.setDate(today.getDate() + i )
          endTime.setHours(21,0,0,0)

          ////setting hours
          if (today.getDate() === currentDate.getDate()){
            currentDate.setHours(currentDate.getHours()> 10 ? currentDate.getHours() + 1 : 10 )
            currentDate.setMinutes(currentDate.getMinutes()> 30 ? 30 :0)
          }
          else{
            currentDate.setHours(10)
            currentDate.setMinutes(0)
          }

          let timeSlots = [];
          while(currentDate < endTime){
              let  formattedTime = currentDate.toLocaleTimeString([],
                { hour: '2-digit' , minute:'2-digit'}) 
             //add slot to array
             timeSlots.push({
              datetime: new Date(currentDate),
              time:formattedTime
                   })
         ////increment current time by 30 minutess 
         currentDate.setMinutes(currentDate.getMinutes() + 30 )
            }
            // 3.    Add the day's completed array to the master 2D array
        allSlots.push(timeSlots);

            
       }
       // 4. Update the state once with the complete 7-day     data
      setdocSlots(allSlots)
    }

 useEffect(()=>{  
   if (docInfo) {
    getAvalaibleSlot()
  }
  },[docInfo])

  useEffect(()=>{
    console.log(docSlots);

  },[docSlots])

  return docInfo && (
    <div >  
         {/*--------------Doctor Details--------------*/}
         <div className=' flex flex-col sm:flex-row gap-4 ' >
          <div>
            <img className='bg-primary w-full sm:w-72 rounded-lg' src={docInfo.image} alt="" />
          </div>

         <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white sm:mx-0 mt-[-80 sm] sm:mt-0  '>

         {/*--------------Doctor Info: name , degree  experience --------------*/}
         <p className=' flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} 
          <img  className='w-5'src={assets.verified_icon} alt="" />
          </p>  
         
         <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
          <p>{docInfo.degree}-{docInfo.speciality}</p>
          <button className='py-0.5 px-2 border text-xs rounded-full '>{docInfo.experience}</button>
         </div>

           {/*--------------Doctor About-------------*/}

           <div>
            <p className=' flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 ' >About: <img src={assets.info_icon} alt="" />
             </p>
            <p className='text-sm text-gray-500 max-w-[700] mt-1'>{docInfo.about} </p>
           </div>
           <p className=' text-gray-500 font-medium mt-4 '>
            Appointment Fee:<span className='text-gray-600'>{currency}{docInfo.fees} </span>
           </p>
           </div>
         </div>
            
         {/*------------------------Booking slots---------------------------------*/}
          <div className='sm:ml-72 sm:pl-4   mt-4 font-medium text-gray-700 '>
             <p > Booking slots</p>
             <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4' >
              {   
                docSlots?.length > 0 && docSlots.map(( item, index )=>{
                  return(
                      <div key={index} onClick={()=> setslotIndex(index)}
                       className={`text-center py-6 px-2 max-w-16 rounded-full cursor-pointer
                        ${slotIndex === index ? 'bg-primary text-white' : 'border  border-gray-200' } `}>
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                      </div>
                  )  
              })
              }
             </div>
            
                 
                  {/*------------------------Booking slots  Time ---------------------------------*/}


             <div className=' flex items-center gap-3 w-full overflow-x-scroll mt-4 '>
              {
                docSlots?.length > 0  && docSlots[slotIndex].map((item, index)=>{
                  return(
                    <p key={index}onClick={()=>setslotTime(item.time)}
                     className={` text-sm font-ligh flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ?
                     'bg-primary text-white' : 'text-gray-400 border border-gray-300'} `} >
                     {  item.time.toLowerCase() }
                    </p>
                    )
                      })
              }
             </div>

             <button className='bg-primary  text-white text-sm font-light px-14 py-3 rounded-full my-6  '>
             Book an Appointment
             </button>
             </div>
            
            {/*------------------------------Listing releated Doctors-------------------------------------*/}
           <ReleatedDoctors  docId={docId} speciality={docInfo.speciality}  />
         


    </div>
  )
}

export default Appointment