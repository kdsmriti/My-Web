import React from 'react'
import { useForm } from 'react-hook-form';

const SignUp = () => {
 const { register, handleSubmit, watch, 
     formState: {errors,isSubmitting} } = useForm();
     async function onSubmit(data){
     await new Promise((resolve)=>setTimeout(resolve,5000))
       console.log("submiting form",data);
     } {
  } onSubmit = (data) => console.log(data);
  return (
    <>
    <form className="SignUp"onSubmit={handleSubmit(onSubmit) }>
    <div>
        <label> First Name :  </label>
        <input className={errors.firstName?"input-error":""}{...register("firstName", 
            { required: true, 
              minLength:{value:3,message:"min length at least 3"},
              maxLength:{value:6,message:"max length at most 6"},
              })}/>
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
        </div>
        <div>
        <label> Last Name :  </label>
        <input className={errors.lastName?"input-error":""}{...register("lastName", 
            { required: true, 
              minLength:{value:3,message:"min length at least 3"},
              maxLength:{value:6,message:"max length at most 6"},
             })}/>
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
        </div>
        <div>
        <label> Address : </label>
        <input className={errors.address?"input-error":""}{...register("address", 
            { required: true,
              pattern :/^[a-zA-Z0-9._%+-]/,
              message: "enter your gmail correctly" })}/>
        {errors.address && <p className='error-msg'>{errors.address.message}</p>}
        </div>
        <div>
          <label> Contact No : </label>
          <input className={errors.contactNo?"input-error":""} {...register("contactNo",
            {required:true,
              minLength:{value:10,message:"enter your contact number correctly"}
            }
          )}/>
            {errors.contactNo && <p className='error-msg'>{errors.contactNo.message}</p>}
        </div>
        <div>
        <label>Gmail:  </label>
        <input className={errors.gmail?"input-error":""}{...register("gmail", 
            { required: true,
              pattern :/^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              message: "enter your gmail correctly" })}/>
        {errors.gmail && <p className='error-msg'>{errors.gmail.message}</p>}
        </div>
        <div>
        <label> User Name :  </label>
        <input className={errors.userName?"input-error":""}{...register("userName", 
            { required: true, 
         message: "enter your username correctly" })}/>
        {errors.userName && <p className='error-msg'>{errors.userName.message}</p>}
        </div>
        <div>
          <label> Password : </label>
          <input className={errors.password?"input-error":""} type='password' {...register("password",{
            required:true,
            minLength:{value:5,message:"keep strong password"}
          })}/>
          {errors.password && <p className='error-msg'>{errors.password.message}</p>}
        </div>
        <div>
          <label>Profile Image: </label>
          <input  type="file" accept='image/*' className={errors.profile?'input-error':""}{...register ("profile",{
            required:true,
            message:"please upload your profile"
          })}/>
          {errors.profile && <p className='error-msg'>{errors.profile.message}</p>}
        </div>
        <input className ="button" type='submit'disabled={isSubmitting}value={isSubmitting?"submiting":"submit"}/>
           </form></>
  )
}

export default SignUp