import React from "react";
import Button from "./Button";
import { useState } from "react";
const MyOrdersList = ({ order }) => {
  const [status,setStatus]=useState("Track Order")
    const totalPriceOfItems = order.items.reduce(
        (totalQty, item) => totalQty + item.qty * item.price,
        0
      );
      const totalQtyOfItems=order.items.reduce((totalQty,item)=>totalQty+item.qty,0)
  return (
    <tbody className="bg-white border-b">
      <tr className="bg-white border-b">
        <td className="px-6 py-4 w-[40%]">
          {order.items.map((item) => `${item.name} X ${item.qty} , `)}
        </td>

        <td className="px-6 py-4 text-center">₹{totalPriceOfItems}</td>
        <td className="px-6 py-4 text-center">{totalQtyOfItems}</td>
        <td className="px-6 py-4 text-center">
          <Button
            property={
              "hover:cursor-pointer bg-brand-light text-white p-2 rounded"
            }
            handleOnClick={()=>setStatus((status)=>status=="Track Order" ?order.status:"Track Order")} 
          >
            {status}
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default MyOrdersList;
