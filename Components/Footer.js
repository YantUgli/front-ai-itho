import LogoWhite from "@/Assets/Img/logoAcademyWhite.png";
import LogoIG from "@/Assets/Img/ig.png";
import LogoTiktok from "@/Assets/Img/tiktok.png";
import LogoWA from "@/Assets/Img/waLogo.png";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-Tan ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <Image src={LogoWhite} className="h-32 me-3" alt="FlowBite Logo" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 ">

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Follow us</h2>
                            <ul className="text-white/70  font-medium">
                                <li className="mb-4 ">
                                    <a href="/" className="hover:underline flex gap-2 items-center">
                                        <Image src={LogoIG} className="w-6 h-6" alt='image' />
                                        @ithoacademy
                                    </a>
                                </li>
                                <li className="mb-4 ">
                                    <a href="/" className="hover:underline flex gap-2 items-center">
                                        <Image src={LogoTiktok} className="w-6 h-6" alt='image' />
                                        tiktok
                                    </a>
                                </li>
                                <li className="mb-4 ">
                                    <a href="/" className="hover:underline flex gap-2 items-center">
                                        <Image src={LogoWA} className="w-6 h-6" alt='image' />
                                        +62 857-7853-7382
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Legal</h2>
                            <ul className="text-white/70  font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white/70 sm:text-center ">© 2024 <a href="#" className="hover:underline">ITHOAcademy</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">



                        <a href="#" className="text-white/70 hover:text-white  ms-5">
                            <Image src={LogoIG} className="w-4 h-4" alt='image' />
                        </a>
                        <a href="#" className="text-white/70 hover:text-white  ms-5">
                            <Image src={LogoTiktok} className="w-4 h-4" alt='image' />

                        </a>
                    </div>
                </div>
            </div>
        </footer >
    )
}