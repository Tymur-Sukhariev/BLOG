import doubleVector from '../clientImages/double.svg'
import Image, {type StaticImageData} from 'next/image'

export default function BlogHeader(){
    return(
     
        <div className="mt-[200px] text-white flex flex-col items-center space-y-7">
            <p className="text-[14px] bg-[#181A2A] px-[12px] py-[5px] rounded-full">Our blog</p>

            <div className='relative'>
                <Image className='z-[-10] absolute top-[-80px] w-[222px] opacity-[0.52]' src={doubleVector as StaticImageData} alt='doubleVector'/>
                <h1 className="text-[48px]">Resources and Insights</h1>
            </div>
            
            <p className="text-[#D7D5DC] opacity-[0.66] text-[20px]">The most latest updates in the sports world, player interviews, and valuable resources.</p>
            
            <div className="flex pt-[20px]  pb-[80px]">
                <input type="text" name="" id="" placeholder="Search" className="h-[48px] w-[272px] rounded-tl-[8px] rounded-bl-[8px] pl-[16px] border-box text-black"/>
                <button className="w-[52px] h-[48px] bg-[#F5B881] rounded-tr-[8px] rounded-br-[8px]">
                    <svg className="ml-[7px] text-[#667085]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="33" viewBox="0 0 24 24" width="33" focusable="false" aria-hidden="true">
                        <path clip-rule="evenodd" d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z" fill-rule="evenodd">
                            </path>
                    </svg>
                </button>
            </div>

            <hr className='border-[#606869] border-[0.7] w-[86%] opacity-[0.16] block' />
        </div>

      
    )
}