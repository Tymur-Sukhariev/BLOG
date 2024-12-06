import Image from "next/image"
import Link from "next/link"
import { toZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';

interface PostProps extends React.HTMLAttributes<HTMLDivElement>{
    id: string;
    image: string;
    title: string;
    previewText: string;
    timestamp: string;
} 

function convertDateTime(dbDateTime: string):string{

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = toZonedTime(dbDateTime, userTimeZone);
    const formattedDate = format(localTime, "MMMM d, yyyy"); 

    return formattedDate;
}

export default function Post({image, title, previewText, timestamp}: PostProps){


    return(
        <div className="text-[white] w-[33%] rounded-[12px] bg-[#181A2A] p-[15px] ">
            <Image className="rounded-[9px]" width={1000} height={500} src={image} alt="blogImage"/>
            <h1 className="my-[26px] text-[24px]">{title}</h1>
            <p className="mb-[26px] text-[16px]">{previewText}</p>
            <time className="text-[#97989F] block">{convertDateTime(timestamp)}</time>
            <div className="flex justify-center">
                <Link className="py-[13px] px-[20px] bg-[#4E8790] rounded-[50px]" href={"#"}>{"READ MORE ->"}</Link>
            </div>
        </div>
        
    )
}