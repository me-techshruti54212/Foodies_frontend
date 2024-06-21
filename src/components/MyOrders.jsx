import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { FetchFoodOrders } from '../redux/slices/FetchOrdersSlice'
import MyOrdersList from './MyOrdersList'
const MyOrders = () => {
  const dispatch=useDispatch()
    const token=useSelector((state)=>state.signin.token)
    const data=useSelector((state)=>state.foodorders.data)
    useEffect(()=>{
        if(token)
            {
                dispatch(FetchFoodOrders(token))
            }
    },[token])

  return (
   <>
 
    {data? (<div className=" m-6 w-[85%] mx-auto">
      <h1 className="mb-2 text-brand-light text-[1.8rem]">Your Orders</h1>
      <div className="overflow-x-auto ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              
              <th scope="col" className="px-6 py-3 text-center">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
               Total No. Of Items Ordered
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Track Order
              </th>
            </tr>
          </thead>
          {data?.map((order,i) =><MyOrdersList key={i} order={order}/>)}   
        
        </table>
      </div>
    </div>) :
    (
      <div className='text-brand-dark font-semibold text justify-center h-[500px] items-center flex border text-lg'>
        No Orders Placed
      </div>
    )
    }
    </>
  )
}

export default MyOrders
