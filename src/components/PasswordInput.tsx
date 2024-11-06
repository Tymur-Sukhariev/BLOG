

import showPasswordIcon from '../icons/showPassword.svg'
import hidePasswordIcon from '../icons/hidePassword.svg'
import Image from 'next/image'
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import React from "react";

type PasswordInputProps = {
  toRegister: string, // Name for the register function (e.g., 'password')
  isShowType: boolean, // Controls input type (password/text)
  handleShow: () => void, // Toggles password visibility
  registerFunction: any,
  errors: any,
  children: React.ReactNode,
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  toRegister,
  isShowType,
  handleShow,
  registerFunction,
  children,
  errors,
}) => {
  return (
 <>
      <input
        type={isShowType ? 'text' : 'password'}
        placeholder={children}
        {...registerFunction(toRegister)} 
      />
      {/* {!isShowType ? (
        <Image
          className='absolute right-0 bottom-0'
          onClick={handleShow}
          src={showPasswordIcon}
          alt='showPasswordIcon'
        />
      ) : (
        <Image
          className='absolute right-0 bottom-0'
          onClick={handleShow}
          src={hidePasswordIcon}
          alt='hidePasswordIcon'
          width={22}
        />
      )
      } */}
      {errors[toRegister]?.message && <p className='w-60'>{errors[toRegister]?.message}</p>}
      </>
  );
};

export default PasswordInput;
