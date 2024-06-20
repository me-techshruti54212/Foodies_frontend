import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
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
    <div className='text-black'>
      Loading
    </div>
  )
}

export default Verify
