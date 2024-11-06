import Image from "next/image"
import Link from "next/link"

export default function Post({postId, src, title, previewText, date}){
    return(
        <div className="border">
            <Image width={300} height={150} src={src} alt="blogImage"/>
            <title>{title}</title>
            <p>{previewText}</p>
            <time>{date}</time>
            <Link href={"#"}>{"READ MORE ->"}</Link>
        </div>
        
    )
}