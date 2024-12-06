'use client'

import showPasswordIcon from '../../icons/showPassword.svg'
import hidePasswordIcon from '../../icons/hidePassword.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


const SignIn = ()=>{
    console.log("sign in");

    
    
    // const [isShow, setIsShow] = useState<boolean>(false)

    // function handleShowPassword(){
    //     setIsShow(prev=>!prev)
    // }

    return(
        <form className='border w-fit p-10 flex items-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h1>SIGN IN</h1>

            <div className='border relative h-28'>
                    <input className='border mt-4' type="email" required placeholder='Email'/>
                {/* <div>
                    <input className='relative border mt-4' type={!isShow?"password":"text"} required placeholder='Password'/>
                    {isShow&&<Image className='absolute right-0 bottom-7'  onClick={handleShowPassword} src={showPasswordIcon} alt='showPasswordIcon'/>}
                    {!isShow&&<Image className='absolute right-0 bottom-7' onClick={handleShowPassword} width={22} src={hidePasswordIcon} alt='hidePasswordIcon'/> }                    
                </div> */}

                <Link href="/forgotPassword" className='text-xs absolute bottom-0 right-0'>Forgot password?</Link>
            </div>


            <div className='mt-11'>
                <button className='border'>SIGN IN</button>
                <br />
                <button className='border'>Sign in with Google</button>
            </div>

            <div className='flex mt-14'>
                <p className='text-xs'>Don`t have an account?</p>
                <Link href="/signUp" className='text-xs'><span className='underline decoration-sky-500'>Register</span></Link>
            </div>
        </form>
    )
}

export default SignIn