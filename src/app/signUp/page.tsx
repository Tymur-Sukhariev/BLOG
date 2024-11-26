'use client'

import PasswordInput from '../../components/PasswordInput';
import Link from 'next/link'
import validationSchema from '../../validationSchema/validationSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/Input';
import {useMutation } from '@tanstack/react-query'
import { registerUser } from '../../http/http';
import infoImg from '../../clientImages/info.svg'
import Image, {type StaticImageData} from 'next/image';
import styles from '../../css/signUp.module.css'
import type SignUpFormShape from '~/types/SignUpForm';
import eclipse1 from '../../clientImages/Ellipse 1.svg'


const SignUp = ()=>{

    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: registerUser,
        onSuccess: (data)=>{
            console.log("yeeess!",data);
        },
        onError: (error) => {
            console.error("Error:", error); 
        }
    });

    const {register, handleSubmit,formState: { errors }} = useForm<SignUpFormShape>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur'
    });

    const handle = async (data: SignUpFormShape) => {
         mutate(data)
    };

    return(

            <form className={styles.signUpForm} onSubmit={handleSubmit(handle)} noValidate>


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
                                registerFunction={register}
                                errors={errors}
                                >
                                Password
                                </PasswordInput> 

                                <PasswordInput
                            toRegister={"repeatPassword"}
                            registerFunction={register}
                            errors={errors}
                            >
                            Repeat password
                                </PasswordInput> 
                        </div>
                    </div>

                    <div className={styles.actionContainer}>
                            
                            <div>
                                <input className={styles.check} type="checkbox" name="" id="subscribe" />
                                <label className='text-[15px] mt-[3px]' htmlFor="subscribe">Subscribe to updates</label>
                                <Image className='cursor-pointer' src={infoImg as StaticImageData} alt="infoImg"/>
                            </div>

                            <div>
                                 <button disabled={isPending}>{!isPending? "SIGN UP": "LOADING..."}</button>
                                <button>Sign up with Google</button>
                            </div>
                    </div>


                    <div className='flex mt-14'>
                            <p className='text-[16px]'>Already have an account? </p>
                            <Link href="/signIn" className='text-[16px]'><span className='font-semibold'>&nbsp; Sign In</span></Link>
                    </div>

                
            </form>

        //     <h1 className='mt-[5000px]'>rtfyguhijokpijuygtfrdesdty</h1>
        //     <h1>rtfyguhijokpijuygtfrdesdty</h1>
        //     <h1>rtfyguhijokpijuygtfrdesdty</h1>
        //     <h1>rtfyguhijokpijuygtfrdesdty</h1>
        //     <h1>rtfyguhijokpijuygtfrdesdty</h1>
        //     <h1>rtfyguhijokpijuygtfrdesdty</h1>
        //     <h1>rtfyguhijokpijuygtfrdesdty</h1>
        //     <h1>rtfyguhijokpijuygtfrdesdty</h1>
        //     <h1>rtfyguhijokpijuygtfrdesdty</h1>
        //     <h1>rtfyguhijokpijuygtfrdesdty</h1>
        // </div>
    )
}

export default SignUp