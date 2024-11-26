
import React from "react";
import type SignUpFormShape from '~/types/SignUpForm';
import {type UseFormRegister, type FieldErrors } from 'react-hook-form';

type InputProps = {
  toRegister: keyof SignUpFormShape, 
  registerFunction: UseFormRegister<SignUpFormShape>,
  errors: FieldErrors<SignUpFormShape>,
  children: string,
};

const Input: React.FC<InputProps> = ({
  toRegister,
  registerFunction,
  children,
  errors,
}) => {
  return (
    <div>
        <input  type="text" placeholder={children} {...registerFunction(toRegister)}/>
        {errors[toRegister]?.message&&<p>{errors[toRegister]?.message}</p>}
    </div>
  );
};

export default Input;
