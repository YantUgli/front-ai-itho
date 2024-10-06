
import Image from 'next/image'
import React from 'react'
import WaveImg3 from "@/Assets/Img/wave3.png";
import WaveImg4 from "@/Assets/Img/wave4.png";
import ProgramImg from "@/Assets/Img/program1.png";
import ProgramImg2 from "@/Assets/Img/program2.png";
import ProgramImg3 from "@/Assets/Img/program3.png";
import ProgramImg4 from "@/Assets/Img/program4.png";
import ProgramImg5 from "@/Assets/Img/program5.png";
import ProgramImg6 from "@/Assets/Img/program6.png";
import ProgramImg7 from "@/Assets/Img/program7.png";
import ProgramImg8 from "@/Assets/Img/program8.png";
import ProgramImg9 from "@/Assets/Img/program9.png";

export default function Program() {
    return (
        <section className="relative" id="program">
            <Image src={WaveImg3} className="w-full h-16 md:h-32 z-10 absolute top-0" alt='image' />
            <Image src={WaveImg4} className="w-full h-20 md:h-40 absolute top-0 " alt='image' />

            <div className="pb-10 pt-36 container mx-auto ">
                <div className="flex justify-start">
                    <h1 className="font-PoppinsBold py-4 px-8 bg-Orange rounded-full text-white">
                        Program Kami
                    </h1>
                </div>
                <div className="bg-white/40 rounded-lg  mt-4 py-10 px-8 flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 flex-none py-4 relative flex">
                        <div className="absolute bg-white pr-6  rounded-full -top-2 -left-4 flex items-center justify-center gap-2">
                            <div className="font-PoppinsBold text-xl w-10 h-10 text-white rounded-full bg-black flex justify-center items-center">
                                1
                            </div>
                            Materi Digital Marketing
                        </div>
                        <div className="w-full md:w-4/5 bg-Back py-6 px-8 flex rounded-3xl font-PoppinsBold text-xs">
                            <ul>
                                <li>
                                    • Dasar-dasar Digital Marketing
                                </li>
                                <li>
                                    • Evolusi dan Tren Digital Marketing
                                </li>
                                <li>
                                    • Peran Digital Marketing dalam Bisnis Modern
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/5 h-full absolute right-16 top-2 hidden md:block">
                            <Image src={ProgramImg} className="w-full" alt='image' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex-none py-4 relative flex">
                        <div className="absolute bg-white pr-6  rounded-full -top-2 -left-4 flex items-center justify-center gap-2">
                            <div className="font-PoppinsBold text-xl w-10 h-10 text-white rounded-full bg-black flex justify-center items-center">
                                2
                            </div>
                            Pemasaran di Media Sosial
                        </div>
                        <div className="w-full md:w-4/5 bg-Back py-6 px-8 flex rounded-3xl font-PoppinsBold text-xs">
                            <ul>
                                <li>
                                    • Strategi Pemasaran di Platform Popule
                                </li>
                                <li>
                                    • Membuat Konten yang Menarik dan Interaktif
                                </li>
                                <li>
                                    • Analisis Kinerja Media Sosial
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/5 h-full absolute right-16 top-2 hidden md:block">
                            <Image src={ProgramImg2} className="w-full" alt='image' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex-none py-4 relative flex">
                        <div className="absolute bg-white pr-6  rounded-full -top-2 -left-4 flex items-center justify-center gap-2">
                            <div className="font-PoppinsBold text-xl w-10 h-10 text-white rounded-full bg-black flex justify-center items-center">
                                3
                            </div>
                            Search Engine Optimization (SEO)
                        </div>
                        <div className="w-full md:w-4/5 bg-Back py-6 px-8 flex rounded-3xl font-PoppinsBold text-xs">
                            <ul>
                                <li>
                                    • Dasar-dasar SEO dan Pentingnya di Dunia Digital
                                </li>
                                <li>
                                    • Teknik On-Page dan Off-Page SE
                                </li>
                                <li>
                                    • Riset Kata Kunci
                                </li>

                            </ul>
                        </div>
                        <div className="w-1/5 h-full absolute right-10 top-2 hidden md:block">
                            <Image src={ProgramImg3} className="w-full" alt='image' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex-none py-4 relative flex">
                        <div className="absolute bg-white pr-6  rounded-full -top-2 -left-4 flex items-center justify-center gap-2">
                            <div className="font-PoppinsBold text-xl w-10 h-10 text-white rounded-full bg-black flex justify-center items-center">
                                4
                            </div>
                            Search Engine Marketing (SEM)
                        </div>
                        <div className="w-full md:w-4/5 bg-Back py-6 px-8 flex rounded-3xl font-PoppinsBold text-xs">
                            <ul>
                                <li>
                                    • Pengantar Google Ads
                                </li>
                                <li>
                                    • Strategi PPC (Pay-Per-Click)
                                </li>
                                <li>
                                    • Optimasi Iklan dan Pengukuran ROI
                                </li>

                            </ul>
                        </div>
                        <div className="w-1/5 h-full absolute right-16 top-2 hidden md:block">
                            <Image src={ProgramImg4} className="w-full" alt='image' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex-none py-4 relative flex">
                        <div className="absolute bg-white pr-6  rounded-full -top-2 -left-4 flex items-center justify-center gap-2">
                            <div className="font-PoppinsBold text-xl w-10 h-10 text-white rounded-full bg-black flex justify-center items-center">
                                5
                            </div>
                            Email Marketing
                        </div>
                        <div className="w-full md:w-4/5 bg-Back py-6 px-8 flex rounded-3xl font-PoppinsBold text-xs">
                            <ul>
                                <li>
                                    • Membuat Daftar Email yang Efekti
                                </li>
                                <li>
                                    • Segmentasi dan Personalisasi Konten
                                </li>
                                <li>
                                    • Automasi Email Marketing
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/5 h-full absolute right-16 top-2 hidden md:block">
                            <Image src={ProgramImg5} className="w-full" alt='image' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex-none py-4 relative flex">
                        <div className="absolute bg-white pr-6  rounded-full -top-2 -left-4 flex items-center justify-center gap-2">
                            <div className="font-PoppinsBold text-xl w-10 h-10 text-white rounded-full bg-black flex justify-center items-center">
                                6
                            </div>
                            Content Marketing
                        </div>
                        <div className="w-full md:w-4/5 bg-Back py-6 px-8 flex rounded-3xl font-PoppinsBold text-xs">
                            <ul>
                                <li>
                                    • Membuat Strategi Content Marketing
                                </li>
                                <li>
                                    • Menulis Konten yang Menarik dan Relevan
                                </li>
                                <li>
                                    • Konten yang Efektif
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/5 h-full absolute right-16 top-2 hidden md:block">
                            <Image src={ProgramImg6} className="w-full" alt='image' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex-none py-4 relative flex">
                        <div className="absolute bg-white pr-6  rounded-full -top-2 -left-4 flex items-center justify-center gap-2">
                            <div className="font-PoppinsBold text-xl w-10 h-10 text-white rounded-full bg-black flex justify-center items-center">
                                7
                            </div>
                            Affiliate Marketing
                        </div>
                        <div className="w-full md:w-4/5 bg-Back py-6 px-8 flex rounded-3xl font-PoppinsBold text-xs">
                            <ul>
                                <li>
                                    • Pengantar Affiliate Marketing
                                </li>
                                <li>
                                    • Memilih Program Afiliasi yang Tepat
                                </li>
                                <li>
                                    • Strategi Sukses dalam Affiliate Marketing
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/5 h-full absolute right-16 top-2 hidden md:block">
                            <Image src={ProgramImg7} className="w-full" alt='image' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex-none py-4 relative flex">
                        <div className="absolute bg-white pr-6  rounded-full -top-2 -left-4 flex items-center justify-center gap-2">
                            <div className="font-PoppinsBold text-xl w-10 h-10 text-white rounded-full bg-black flex justify-center items-center">
                                8
                            </div>
                            Analisis dan Pelaporan Digital Marketing
                        </div>
                        <div className="w-full md:w-4/5 bg-Back py-6 px-8 flex rounded-3xl font-PoppinsBold text-xs">
                            <ul>
                                <li>
                                    • Memahami Metrik Utama dalam Digital Marketing
                                </li>
                                <li>
                                    • Menyusun Laporan Kinerja Digital Marketing
                                </li>
                                <li>
                                    • Mengambil Keputusan Berdasarkan Data
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/5 h-full absolute right-16 top-2 hidden md:block">
                            <Image src={ProgramImg8} className="w-full" alt='image' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex-none py-4 relative flex">
                        <div className="absolute bg-white pr-6  rounded-full -top-2 -left-4 flex items-center justify-center gap-2">
                            <div className="font-PoppinsBold text-xl w-10 h-10 text-white rounded-full bg-black flex justify-center items-center">
                                9
                            </div>
                            Strategi dan Perencanaan Kampanye Digital
                        </div>
                        <div className="w-full md:w-4/5 bg-Back py-6 px-8 flex rounded-3xl font-PoppinsBold text-xs">
                            <ul>
                                <li>
                                    • Merancang Kampanye Digital yang Efektif
                                </li>
                                <li>
                                    • Mengelola Anggaran dan Sumber Daya
                                </li>
                                <li>
                                    • Studi Kasus dan Praktek Langsung
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/5 h-full absolute right-16 top-2 hidden md:block">
                            <Image src={ProgramImg9} className="w-full" alt='image' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
