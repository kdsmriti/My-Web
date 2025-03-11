import React from 'react'
import {useForm} from "react-hook-form"
function Login()  {
  const { register, handleSubmit, watch, 
    formState: {errors,isSubmitting} } = useForm();
    async function onSubmit(data){
    await new Promise((resolve)=>setTimeout(resolve,5000))
      console.log("submiting form",data);
    }

  return (
    <form className= 'userLogin' onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label> Username:  </label>
        <input className={errors.userName?"input-error":""}{...register("userName", 
            { required: true,
              minLength:{value:3,
             message: "minimum length of your name should be 3"} })}/>
        {errors.userName && <p className='error-msg'>{errors.userName.message}</p>}
        </div>
        <br></br>
        <div>
        <label> Password : </label>
        <input className={errors.password?"input-error":""} type='password'{...register("password", 
            { required: true, 
              minLength:{value:4,
          message: "username or password is incorrect" }})}/>
        {errors.password && <p className='error-msg'>{errors.password.message}</p>}
        </div>
        <br></br>
  <input className ="button" type='submit'disabled={isSubmitting}value={isSubmitting?"submiting":"submit"}></input>
    



    </form>
  )
}

export default Login
