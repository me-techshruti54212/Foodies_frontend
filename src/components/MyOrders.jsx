import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { FetchFoodOrders } from '../redux/slices/FetchOrdersSlice'
import MyOrdersList from './MyOrdersList'
import { TailSpin } from 'react-loader-spinner'
const MyOrders = () => {
  const dispatch=useDispatch()
    const token=useSelector((state)=>state.signin.token)
    const data=useSelector((state)=>state.foodorders.data)
    const isloading=useSelector((state)=>state.foodorders.isLoading)
    useEffect(()=>{
        if(token)
            {
                dispatch(FetchFoodOrders(token))
            }
    },[token])

  return (
   <>
 
   <div className=" m-6 w-[85%] mx-auto">
      <h1 className="mb-2 text-brand-light text-[1.8rem]">Your Orders</h1>
      {isloading === true ? (
        <div className='m-4 flex flex-col items-center '>
        <TailSpin 
          visible={true}
          height="30"
          width="30"
          color="#111"
          ariaLabel="tail-spin-loading"
          radius="0.5"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className='text-black font-semibold text-xl'>Loading...</p>
        </div>
      ) : null}
      {data?.length>0 && !isloading  &&
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
      }
   {data?.length==0 && !isloading &&

      <div className='text-brand-dark font-semibold text justify-center h-[50vh] items-center flex  text-lg'>
        No Orders Placed
      </div>
   }
    
    </div>
    </>
  )
}

export default MyOrders
