import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { TailSpin } from "react-loader-spinner";

const Verify = () => {
    const navigate=useNavigate()
    const [searchParams,setSearchParams]=useSearchParams()
    const success=searchParams.get("success")
    const orderId=searchParams.get("orderId")
    console.log(success,orderId)
    const verifyPayment=async()=>{
        const res=await axios.post(`${import.meta.env.VITE_BACKENDURL}api/order/verify`,{success,orderId})
        // console.log(res)
        if(res.data.success)
            navigate("/myorders")
     
        else
            navigate("/menu")
    }
    useEffect(()=>{
        verifyPayment()
    },[])
  return (
    <div className='text-black flex flex-col justify-center items-center mt-4'>
      
        
        <TailSpin 
          visible={true}
          height="20"
          width="20"
          color="#111"
          ariaLabel="tail-spin-loading"
          radius="0.5"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className='font-semibold text-lg'>Loading...</p>
     
    </div>
  )
}

export default Verify
