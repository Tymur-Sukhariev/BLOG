
import React from "react";

type InputProps = {
  toRegister: string, 
  registerFunction:any,
  errors: any,
  children: React.ReactNode,
};

const Input: React.FC<InputProps> = ({
  toRegister,
  registerFunction,
  children,
  errors,
}) => {
  return (
    <>
    <input  type="text" placeholder={children} {...registerFunction(toRegister)}/>
    {errors[toRegister]?.message&&<p>{errors[toRegister]?.message}</p>}
    </>
  );
};

export default Input;
