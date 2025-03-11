import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const Home = () => 
   {
     const { register, handleSubmit, watch, 
         formState: {errors,isSubmitting} } = useForm();
         async function onSubmit(data){
         await new Promise((resolve)=>setTimeout(resolve,5000))
           console.log("submiting form",data);
         }
  return (
    <>
    <div className="hero">
    <h1><p>Fast & Reliable Courier Services</p></h1>
    <br></br>
    <h2>Delivering your parcels safely, on time, every time.</h2>
    <br></br> 
    <div className="container">
    <h3>Request Cost Estimate</h3>
     <NavLink to="/quotation"><button> Get-Started----</button></NavLink>
     <h3> Track Your Parcel</h3>
     <input  className={errors.tracker?"input-error":""} type="text" placeholder="Enter Tracking Number"{...register("tracker",{
      required: true,
      minLength:{value:5,message:"please enter correct code"},
     })} />
     {errors.tracker && <p className='error-msg'>{errors.tracker.message}</p>}
     <button>Track Now</button>
     </div>
   </div>
</>
  )
}

export default Home