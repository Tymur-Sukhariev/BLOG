'use client'

import PasswordInput from '../../components/PasswordInput';
import Link from 'next/link'
import validationSchema from '../../validationSchema/validationSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react'
import Input from '../../components/Input';
import {useMutation } from '@tanstack/react-query'
import { registerUser } from '../../http/http';
import infoImg from '../../clientImages/info.svg'
import Image from 'next/image';
import styles from '../../css/signUp.module.css'




const SignUp = ()=>{

    // const {mutate, isPending, isError, error} = useMutation({
    //     mutationFn: registerUser,
    //     onSuccess: (data)=>{
    //         console.log("yeeess!",data);
    //     },
    //     onError: (error) => {
    //         console.error("Error:", error); 
    //     }
    // });

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur'
    });

    const [isShow, setIsShow] = useState<boolean>(false)
    const [isShowRepeat, setIsShowRepeat] = useState<boolean>(false)
    
    function handleShowPassword():void{
        setIsShow(prev=>!prev)
    }
    function handleShowPasswordRepeat():void{
        setIsShowRepeat(prev=>!prev)
    }

    const onSubmit = async (data: any) => {
        // mutate(data);
        // console.log('Form data>>>', data);
         await registerUser(data)
    };

    return(
        <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)} noValidate>
    
            <h1>SIGN UP</h1>

        <div className={styles.inputContainer}>
            <div>
                    <Input toRegister={'firstName'} registerFunction={register} errors={errors}>Name(optional)</Input>
                    <Input toRegister={'lastName'} registerFunction={register} errors={errors}>Surname(optional)</Input>
                    <Input toRegister={'userName'} registerFunction={register} errors={errors}>Username</Input>

            </div>

            <div>
                    <Input toRegister={'email'} registerFunction={register} errors={errors}>Email</Input>

                    <PasswordInput
                    toRegister={"password"}
                    isShowType={isShow}
                    handleShow={handleShowPassword}
                    registerFunction={register}
                    errors={errors}
                    >
                    Password
                    </PasswordInput> 

                    <PasswordInput
                  toRegister={"repeatPassword"}
                  isShowType={isShowRepeat}
                  handleShow={handleShowPasswordRepeat}
                  registerFunction={register}
                  errors={errors}
                  >
                  Repeat password
                    </PasswordInput> 
            </div>
        </div>

            <div className='mt-11'>
                {/* <button className='border' disabled={isPending}>{!isPending? "SIGN UP": "LOADING..."}</button> */}
                <div className='flex items-center space-x-[3px] '>
                    <input className={styles.check} type="checkbox" name="" id="subscribe" />
                    <label className='text-[12px]' htmlFor="subscribe">Subscribe to updates</label>
                    <Image className='cursor-pointer' src={infoImg} alt="infoImg"/>
                </div>

                <button className='' >Sign Up</button>
                <br />
                <button className=''>Sign Up with Google</button>
            </div>

            <div className='flex mt-14'>
                <p className='text-xs'>Already have an account?</p>
                <Link href="/signIn" className='text-xs'><span className='underline decoration-sky-500'>Sign In</span></Link>
            </div>

            
        </form>

    )
}

export default SignUp