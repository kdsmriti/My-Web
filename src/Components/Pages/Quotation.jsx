import React from 'react'
import { useForm } from 'react-hook-form'

const Quotation = () => {
    const { register, handleSubmit, watch, 
        formState: {errors,isSubmitting} } = useForm();
        async function onSubmit(data){
        await new Promise((resolve)=>setTimeout(resolve,5000))
          console.log("submiting form",data);
        }

  return (
    <>
    <div className="Quotation"></div>
    <h2>Your Trusted Courier Partner in Nepal</h2>
<p className='Shipment-Content'>Courier Nepal  delivers efficient and budget-friendly shipping solutions across Nepal.
  Our services are designed with your convenience in mind.
 Reliable, affordable, and hassle-free delivery every time!<br></br>
Let us know your requirements, and we’ll take care of the rest.
</p>
    <form className='grid-container' onSubmit={handleSubmit(onSubmit)}>
      
      <label> From : 
       <input className={errors.pickupLocation?"input-error":""}type='text' placeholder='  Pickup location ' {...register("pickupLocation",{
        required:true,
        minLength:{value:5,
        message:"specify location correctly"}}
       )}/>
       {errors.pickupLocation && <p className='error-msg'>{errors.pickupLocation.message}</p>}
       </label>
       
       <label> To / Delivery Location :
       <input className={errors.dropLocation?"input-error":""} type='text' placeholder='  Drop location ' {...register(" dropLocation",{
        required:true,
        minLength:{value:5,
       message:"specify location correctly"}}
       )}/>
       {errors.dropLocation && <p className='error-msg'>{errors.dropLocation.message}</p>}
       </label>
      
       
       <label>Quantity :
       <input  className={errors.quantity? "input-error":""}type='number' placeholder=' Quantity' {...register("quantity",
        {
          required:true,
          message:"choose quantity"
        }
       )}/>
       {errors.quantity && <p className="error-msg">{errors.quantity.message}</p>}
       </label>
      
       
       <label> Weight:
       <input type='number' placeholder=' weight(kg)' {...register("Weight",
         {
          required:true,
          message:"choose weight"
        }
       )}/>
       {errors.Weight && <p className='error-msg'>{errors.Weight.message}</p>}
       </label>
       <div>
       <label>Product Type : </label><br></br>
       <select {...register("productType")}>
        <option value="document">Document</option>
        <option value="clothes"> Clothes</option>
        <option value="gifts">Gifts</option>
        <option value="parcel"> Parcel</option>
        <option value="others"> Others</option>
        </select>
       </div>
       <div>
       <label> Package Type: </label><br></br>
       <select >
        <option value="box">Box</option>
        <option value="envelope"> Envelope</option>
        <option value="Not packed">Not Packed</option>
        <option value="parcel"> Parcel</option>
        <option value="others"> Others</option>
        </select>
       </div>
       
       <label> Your Full Name :
       <input className={errors.fullName?"input-error":""}type='text' placeholder='  Your Full Name' {...register("fullName",
        {
          required:true,
          minLength:{value:5,message:"Min length is 5"}
        }
       )}/>
      { errors.fullName && < p className='error-msg'>{errors.fullName.message}</p>}
       </label>

       <div>
       <label> Your Contact Number:</label>
       <input  className={errors.contactNumber?"input-error":""} type='text' placeholder ='  Your Contact Number ' {...register(" contactNumber",{
        required:true,
        minLength:{value:10,
        message:"enter contact number correctly"}}
       )}/>
       { errors.contactNumber && < p className='error-msg'>{errors.contactNumber.message}</p>}

       </div>
       
       <label> Your  Active Email Address:
       <input type='text' placeholder=' We will reply you in this email ' {...register("Email ")}/>
       </label>
      
       <br></br>
       <div>
       <label> Write Your Query :</label>
       <textarea placeholder=' Type your query here' {...register("Query")}/>
       </div>
       <br></br>
       <div>
       <button className='qbutton' disabled ={isSubmitting} value={isSubmitting?"issubmitting":"submit"}> Get Quotation </button>
       </div> 
       </form>
   
        </>
  )
}

export default Quotation