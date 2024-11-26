export default function Footer(){
    return(
        <footer className="bg-[#141624] text-[#ffffff] pb-[30px] pt-[63px] border-box">

            <div className="flex border-red px-[17%] justify-between">
                <div className=" border-white">
                    <h1 className="text-[32px] uppercase mb-[30px]">Categories of content</h1>
                    <ul className="text-[20px]">
                        <li className="mb-4">Football</li>
                        <li className="mb-4">Basketball</li>
                        <li className="mb-4">Tennis</li>
                        <li className="mb-4">MMA</li>
                        <li className="mb-4">Boxing</li>
                        <li>Athletics</li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-[32px] uppercase mb-[30px]">stay connected</h1>    
                    <a className="text-[20px] mb-4 block" href="https://www.facebook.com/">Facebook</a>
                    <a className="text-[20px] block" href="mailto:timur4iks@icloud.com">Email</a>
                </div>

                <div>
                    <h1 className="text-[32px] uppercase mb-[30px]">{`don't miss out!`}</h1>
                    <button>SUBSCRIBE FOR UPDATES!</button>
                </div>

            </div>
                
            <p className="text-[20px] mt-[173px] text-center">© 2024 All rights reserved by TIMBLOG.
                <span className="border-b"> PRIVACY POLICY</span>
            </p>
        </footer>
    )
}