import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
const Success = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="black" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-black">
            Order Successful
          </h2>
          <p className="text-black">Your order has been successfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
