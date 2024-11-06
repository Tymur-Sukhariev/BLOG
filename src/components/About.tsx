import Image from 'next/image'
import aboutCurve from '../clientImages/home_curve.svg'
import aboutImage1 from '../clientImages/about.jpg'
import aboutImage2 from '../clientImages/about2.jpg'
import doubleVector from '../clientImages/double.svg'

import styles from '../css/bg.module.css'

export default function About(){
    return(
            <div className={`${styles.contentShape}`}>
                <div className='pl-[7%] pr-[7%] mt-[137px] flex items-end'>
                    <div className=' z-30 flex items-start w-[45%]'>
                        <Image className='w-[330px]' src={aboutImage1} alt='aboutImage1'/>
                        <Image className='w-[330px] mt-7 ml-7' src={aboutImage2} alt='aboutImage2'/>
                    </div>

                    <div className="z-30 relative ml-[160px] w-[55%] self-end">
                        <Image className="z-[-10] absolute left-[-35px] top-[-60px] w-[222px]" src={doubleVector} alt="doubleVector" />
                        <h1 className="z-10 text-[80px]">ABOUT THE BLOG</h1>
                        <p className="z-10 text-[30px] text-[#737373] tracking-[0.1em] leading-[1.8] mt-[55px]">
                        Welcome to TimBlog, your go-to source for the latest sports
                         news and updates. Stay ahead with breaking stories, scores,
                          and insights across all major sports. Whether it's the big 
                          game or behind-the-scenes highlights, we've got you covered. 
                          Join our community and never miss out on the action – the sports world is always
                        moving, and so are we!
                        </p>
                    </div>

                </div>
            </div>
    )
}