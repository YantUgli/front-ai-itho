import Image from 'next/image'
import React from 'react'
import SquareImg from "@/Assets/Img/square.png";
import PatternImg3 from "@/Assets/Img/pattern3.png";
import ExampleImg from "@/Assets/Img/Example.png";

export default function Galeri() {
    return (
        <section id="galeri" className="relative ">
            <Image src={SquareImg} className="w-32 left-2/3 absolute top-0 " alt='image' />
            <Image src={PatternImg3} className="w-64 absolute -top-32 -left-16" alt='image' />


            <div className="container mx-auto mb-12 pt-20">
                <div className="flex justify-start">
                    <h1 className="font-PoppinsBold py-4 px-8 bg-Orange rounded-full text-white">
                        Galeri
                    </h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 px-8 mt-6">
                    <div className="relative rounded-lg overflow-hidden">
                        <Image className="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div className="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image className="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div className="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image className="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div className="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image className="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div className="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image className="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div className="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image className="h-auto max-w-full rounded-lg" src={ExampleImg} alt="" />
                        <div className="absolute bottom-0 w-full bg-putih px-6 py-3 text-center rounded-t-xl text-lg hidden md:block">
                            Deskripsi Galeri
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
