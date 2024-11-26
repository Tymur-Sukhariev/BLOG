"use client"

import showPasswordIcon from '../icons/showPassword.svg'
import hidePasswordIcon from '../icons/hidePassword.svg'
import Image, {type StaticImageData} from 'next/image';
import {type UseFormRegister, type FieldErrors } from 'react-hook-form';
import React from "react";
import type SignUpFormShape from '~/types/SignUpForm';
import { useState } from 'react'

type PasswordInputProps = {
  toRegister: keyof SignUpFormShape, 
  registerFunction: UseFormRegister<SignUpFormShape>,
  errors: FieldErrors<SignUpFormShape>,
  children: string,
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  toRegister,
  registerFunction,
  children,
  errors,
}) => {

  const [isShow, setIsShow] = useState<boolean>(false)
  
  function handleShowPassword():void{
      setIsShow(prev=>!prev)
  }

  return (
      <div className='relative'>
            <input
              type={isShow ? 'text' : 'password'}
              placeholder={children}
              {...registerFunction(toRegister)} 
            />
            {!isShow ? (
              <Image
                className='absolute right-[6px] bottom-[10px] cursor-pointer'
                onClick={handleShowPassword}
                src={showPasswordIcon as StaticImageData}
                alt='showPasswordIcon'
              />
            ) : (
              <Image
                className='absolute right-[6px] bottom-[10px] cursor-pointer'
                onClick={handleShowPassword}
                src={hidePasswordIcon as StaticImageData}
                alt='hidePasswordIcon'
                width={22}
              />
            )
            }
            {errors[toRegister]?.message && <p className='w-60'>{errors[toRegister]?.message}</p>}
      </div>
  );
};

export default PasswordInput;
