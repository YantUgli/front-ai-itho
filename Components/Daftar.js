import React from 'react'
import PerkantoranImg from '@/Assets/Img/perkantoran.jpg'
import Image from 'next/image'
import LogoWA from "@/Assets/Img/waLogo.png";


export default function Daftar() {
    return (
        <section className="h-[60vh] bg-cover bg-fixed bg-center relative" id="daftar" style={{ backgroundImage: `url(${PerkantoranImg.src})` }}>
            <div className="w-full h-full bg-black/50 absolute"></div>
            <div className="container h-full mx-auto py-4 px-8 flex-col flex justify-center items-center  gap-6 relative">
                <div className="flex justify-center">
                    <h1 className="  bg-Orange text-white px-6 py-3 rounded-full ">
                        Daftar
                    </h1>
                </div>

                <div className="max-w-md w-full aspect-auto bg-white py-4 px-6 rounded-xl">
                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Nama Sekolah Mu</label>
                            <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="SMK..." required />
                        </div>
                        <div className="flex">
                            <a href="https://wa.me/6285778537382?text=Halo CS ITHO ACADEMY Saya dari [Nama Sekolah], Saya Tertarik Dengan..." target="_blank" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex items-center gap-2">
                                <Image src={LogoWA} className="w-4 aspect-square" alt='image' />
                                Hubungi Sekarang
                            </a>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}
