import Image from "next/image"
import Link from "next/link"

interface PostProps extends React.HTMLAttributes<HTMLDivElement>{
    postId: string;
    src: string;
    title: string;
    previewText: string;
    date: string;
} 

export default function Post({postId, src, title, previewText, date, className, ...props}: PostProps){
    return(
        <div className={className} {...props}>
            <Image width={300} height={150} src={src} alt="blogImage"/>
            <title>{title}</title>
            <p>{previewText}</p>
            <time>{date}</time>
            <Link href={"#"}>{"READ MORE ->"}</Link>
        </div>
        
    )
}