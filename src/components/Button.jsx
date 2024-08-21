import React from "react";

const Button = ({ children, property, handleOnClick ,disablefunc,type}) => {
  return (
    <button className={`${property}`} onClick={handleOnClick} disabled={disablefunc} type={type}>
      {children}
    </button>
  );
};

export default Button;
