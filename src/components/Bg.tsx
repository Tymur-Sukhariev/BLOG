"use client";

import {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import Image, {type StaticImageData} from "next/image";
import doubleVector from '../clientImages/double.svg'
import Link from 'next/link';
import styles from '../css/bg.module.css'
import { div, h1 } from 'framer-motion/m';



export default function Bg(){

    // const[bgIndex, setBgIndex] = useState(1)


    // useEffect(()=>{

    //     const intervalId = setInterval(()=>{
    //         setBgIndex(prev=>{
    //             if(prev<2){
    //                 return prev = prev+1
    //             }else{
    //                 return 1;
    //             }   
    //         })

    //     }, 1500)

    //     return () => clearInterval(intervalId);

    // }, [])

    // const bg = bgIndex===1?styles.hero1:styles.hero2;

    const variants = {
        hidden: { opacity: 0}, // Initial state
        visible: { opacity: 1},   // Final state
      };

    return(
      
            // <motion.div className={`${bg} mt-[88px] relative`}
            <motion.div className={`${styles.hero1} mt-[88px] relative`}
                initial="hidden"      // Initial state
                animate="visible"     // Animate to this state
                exit="hidden"         // Optional: Animate out to this state when unmounting
                variants={variants}   // Pass the variants to motion.div
                transition={{ duration: 0.5 }}
            
            >
                <div className={` w-[631px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                    <Image className='z-[-10] absolute top-[-80px] w-[222px]' src={doubleVector as StaticImageData} alt='doubleVector'/>
                    <h1 className="z-20 text-7xl text-center text-white mb-[150px]">
                        Stay Ahead of the Game!
                    </h1>

                    <p className="m-auto mt-[30px] w-[260px] text-center bg-[#4C858D] rounded-full py-[6px] px-[15px] ">
                        <Link href="/blog" className="block  text-[30px] text-[#ffffff] leading-tight">
                            Read latest news!
                        </Link>
                    </p>
                </div>
            </motion.div>
    )
}