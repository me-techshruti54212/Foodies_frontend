import React from "react";

const Button = ({ children, property, handleOnClick }) => {
  return (
    <button className={`${property}`} onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
