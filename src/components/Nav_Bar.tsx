import Link from "next/link"

export default function Nav_bar(){
    return(
        <div className="items-center h-[88px] flex justify-between pl-[7%] pr-[7%] fixed top-0 left-0 right-0 z-40 bg-[#141624]">
            <h1 className="text-[22px] text-[#ffffff]">TIMBLOG</h1>
            <div className="flex">
                <Link className="ml-4 text-[#ffffff]" href="/">HOME</Link>
                <Link className="ml-4 text-[#ffffff]" href="/blog"> BLOG</Link>
                <Link className="ml-4 text-[#ffffff]" href="/contact">CONTACT</Link>
                <Link className="ml-4 text-[#ffffff]" href="/faq">FAQ</Link>
                <div className="ml-10">
                    <Link className="ml-4 text-[#ffffff]" href="/signIn">SIGN IN</Link>
                    <Link className="ml-4 text-[#ffffff]" href="/signUp">SIGN UP</Link>
                </div>
            </div>
        </div>
    )
}