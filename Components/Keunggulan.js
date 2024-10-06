

import React from 'react'
import CircleImg from '@/Assets/Img/circle1.png';
import KeunggulanImg1 from '@/Assets/Img/Keunggulan1.png';
import KeunggulanImg2 from '@/Assets/Img/Keunggulan2.png';
import KeunggulanImg3 from '@/Assets/Img/Keunggulan3.png';
import KeunggulanImg4 from '@/Assets/Img/Keunggulan4.png';
import KeunggulanImg5 from '@/Assets/Img/Keunggulan5.png';
import KeunggulanImg6 from '@/Assets/Img/Keunggulan6.png';
import Image from 'next/image';


export default function Keunggulan() {
    return (
        <section className="relative overflow-hidden">
            <Image src={CircleImg} className="w-36 absolute top-0 -right-16" alt='image' />
            <div className="container mx-auto pt-10 ">
                <div className="flex justify-start">
                    <h1 className="font-PoppinsBold py-4 px-8 bg-Orange rounded-full text-white">
                        Keunggulan
                    </h1>
                </div>
                <div className=" mt-12 px-8 py-4 flex flex-wrap gap-4 justify-center">
                    <div className="max-w-sm aspect-video w-full  flex items-end justify-center relative mb-10">
                        <Image src={KeunggulanImg1} className="absolute w-1/2 -top-12 " alt='image' />
                        <div className="h-1/2 w-full bg-white shadow-lg rounded-2xl py-4 px-6 text-center text-lg md:text-2xl flex items-center justify-center font-PoppinsBold">
                            Kurikulum Berbasis Industri
                        </div>
                    </div>
                    <div className="max-w-sm aspect-video w-full  flex items-end justify-center relative mb-10">
                        <Image src={KeunggulanImg2} className="absolute w-1/2 -top-12 " alt='image' />
                        <div className="h-1/2 w-full bg-white shadow-lg rounded-2xl py-4 px-6 text-center text-lg md:text-2xl flex items-center justify-center font-PoppinsBold">
                            Fleksibilitas Waktu
                        </div>
                    </div>
                    <div className="max-w-sm aspect-video w-full  flex items-end justify-center relative mb-10">
                        <Image src={KeunggulanImg3} className="absolute w-1/2 -top-16 " alt='image' />
                        <div className="h-1/2 w-full bg-white shadow-lg rounded-2xl py-4 px-6 text-center text-lg md:text-2xl flex items-center justify-center font-PoppinsBold">
                            Pembelajaran Berbasis Proyek
                        </div>
                    </div>
                    <div className="max-w-sm aspect-video w-full  flex items-end justify-center relative mb-10">
                        <Image src={KeunggulanImg4} className="absolute w-1/2 -top-12 " alt='image' />
                        <div className="h-1/2 w-full bg-white shadow-lg rounded-2xl py-4 px-6 text-center text-lg md:text-2xl flex items-center justify-center font-PoppinsBold">
                            Dukungan Karir
                        </div>
                    </div>
                    <div className="max-w-sm aspect-video w-full  flex items-end justify-center relative mb-10">
                        <Image src={KeunggulanImg5} className="absolute w-1/2 -top-16 " alt='image' />
                        <div className="h-1/2 w-full bg-white shadow-lg rounded-2xl py-4 px-6 text-center text-lg md:text-2xl flex items-center justify-center font-PoppinsBold">
                            Konektivitas Dengan Profesional
                        </div>
                    </div>
                    <div className="max-w-sm aspect-video w-full  flex items-end justify-center relative mb-10">
                        <Image src={KeunggulanImg6} className="absolute w-1/2 -top-12 " alt='image' />
                        <div className="h-1/2 w-full bg-white shadow-lg rounded-2xl py-4 px-6 text-center text-base md:text-2xl flex items-center justify-center font-PoppinsBold">
                            Mempersiapkan siswa SMK untuk sukses di pasar digital
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
