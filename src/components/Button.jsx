import React from "react";

const Button = ({ children, property, handleOnClick ,disablefunc}) => {
  return (
    <button className={`${property}`} onClick={handleOnClick} disabled={disablefunc}>
      {children}
    </button>
  );
};

export default Button;
