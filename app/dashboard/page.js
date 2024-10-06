import WaveImg from "@/Assets/Img/wave.png";
import WaveImg2 from "@/Assets/Img/wave2.png";
import PatternImg from "@/Assets/Img/pattern.png";
import PatternImg2 from "@/Assets/Img/pattern2.png";
import MainImg from "@/Assets/Img/1.png";
import InteractImg from "@/Assets/Img/Interact.png";
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
import LogoAcademy from '@/Assets/Img/logoAcademy.png'
import CircleImg from '@/Assets/Img/circle1.png';
import KeunggulanImg1 from '@/Assets/Img/Keunggulan1.png';
import KeunggulanImg2 from '@/Assets/Img/Keunggulan2.png';
import KeunggulanImg3 from '@/Assets/Img/Keunggulan3.png';
import KeunggulanImg4 from '@/Assets/Img/Keunggulan4.png';
import KeunggulanImg5 from '@/Assets/Img/Keunggulan5.png';
import KeunggulanImg6 from '@/Assets/Img/Keunggulan6.png';
import SquareImg from "@/Assets/Img/square.png";
import PatternImg3 from "@/Assets/Img/pattern3.png";
import ExampleImg from "@/Assets/Img/Example.png";
import PerkantoranImg from '@/Assets/Img/perkantoran.jpg'
import LogoWA from "@/Assets/Img/waLogo.png";
import PerkantoranImg2 from "@/Assets/Img/perkantoran2.jpg";
import PerkantoranImg3 from "@/Assets/Img/perkantoran3.jpg";
import LogoWhite from "@/Assets/Img/logoAcademyWhite.png";
import LogoIG from "@/Assets/Img/ig.png";
import LogoTiktok from "@/Assets/Img/tiktok.png";
// import LogoWA from "@/Assets/Img/waLogo.png";

import Image from "next/image";

export default function Hero() {
    return (
        <>
            <section className="w-full h-screen  flex justify-center items-center relative overflow-hidden">
                <Image src={WaveImg} className="w-full h-32 z-10 absolute bottom-0 " alt='image' />
                <Image src={WaveImg2} className="w-full h-40  absolute bottom-0 " alt='image' />
                <Image src={PatternImg} className="w-full  absolute bottom-0 " alt='image' />
                <Image src={PatternImg2} className="w-full md:w-2/5  absolute -bottom-10 md:bottom-0 md:-right-36" alt='image' />

                <div className="md:flex w-full md:w-[90%] md:gap-10 h-3/5 md:h-4/5  ">
                    <div className="w-full md:w-1/2 md:flex justify-center items-start gap-6 md:relative">
                        <Image src={MainImg} className="w-full m-auto  object-cover " alt='image' />
                    </div>

                    <div className="w-full md:w-1/2 md:relative">
                        <Image src={InteractImg} className=" absolute md:bottom-10 md:-right-10" alt='image' />
                    </div>
                </div>
            </section>
            <nav className="bg-Primer border-gray-200 fixed z-20 w-full top-0 left-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pb-4 px-4">
                    {/* <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <img src="/resources/Assets/Img/logoAcademy.png" className="w-24 h-fit " />
    </a>  */}
                    <div className="w-40 h-12 bg-putih rounded-b-xl">
                        <Image src={LogoAcademy} className="w-full h-full " alt='image' />
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   " aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto pt-2" id="navbar-default">
                        <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">Beranda</a>
                            </li>
                            <li>
                                <a href="#program" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Program</a>
                            </li>
                            <li>
                                <a href="#galeri" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Galeri</a>
                            </li>
                            <li>
                                <a href="#tentang" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Tentang</a>
                            </li>
                            <li>
                                <a href="#daftar" className="block py-2 px-4 bg-Orange rounded-lg font-PoppinsBold text-white hover:bg-orange-600">Daftar Sekarang!</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="w-full bg-Primer">

                <div className="flex justify-center">
                    <h1 className="  bg-Orange text-white px-6 py-3 rounded-full ">
                        Apa Itu ITHO ACADEMY?

                    </h1>
                </div>
                <div className="mt-4">
                    <p className="text-center bg-Orange max-w-3xl mx-auto  text-white text-xs md:text-lg py-2 px-6 rounded-md ">
                        ITHO Academy adalah program pendidikan praktis digital yang dirancang khusus untuk mempersiapkan siswa SMK menghadapi dunia kerja dengan keterampilan yang relevan dan pengalaman nyata di bidang digital dan digital marketing.
                    </p>
                </div>

            </section>
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
            <section id="tentang">
                <div className="py-12 container mx-auto">
                    <div className="flex justify-start">
                        <h1 className="font-PoppinsBold py-4 px-8 bg-Orange rounded-full text-white">
                            Tentang Kami
                        </h1>
                    </div>
                    <div className='flex-col-reverse flex gap-4 md:gap-0 md:flex-row px-10 my-8'>
                        <div className='w-full md:w-1/2'>
                            <h1 className='text-xl md:text-3xl font-bold md:w-4/6 w-full mb-4 md:mb-8'>Latar Belakang</h1>
                            <p className='text-xs md:text-base'>
                                ITHO Academy adalah inisiatif pendidikan dari PT ITHO INDOSTOCK, perusahaan yang telah beroperasi sejak tahun 2002 dengan fokus utama pada teknologi informasi dan pendidikan. ITHO Academy hadir sebagai solusi praktis untuk membantu lulusan Sekolah Menengah Kejuruan (SMK) mempersiapkan diri secara efektif menghadapi tantangan dunia kerja modern, khususnya di bidang digital.
                            </p>
                        </div>
                        <div className='w-full md:w-1/2 md:px-6'>
                            <Image src={PerkantoranImg2} alt="" className='w-full h-[125px] md:h-[300px] object-cover' />
                        </div>
                    </div>
                    <div className='  md:flex px-10 pt-8 pb-12'>
                        <div className='w-full md:w-1/2 md:px-6 md:flex-none'>
                            <Image src={PerkantoranImg3} alt="" className='w-full h-[125px] md:h-[340px] object-cover' />
                        </div>
                        <div className='grow md:p-6'>
                            <div className="w-full my-2">
                                <h2 className="mb-2 text-lg font-semibold ">Misi</h2>
                                <p className="text-xs md:text-base">
                                    Memberikan pendidikan praktis yang relevan dengan kebutuhan industri digital melalui kurikulum yang disesuaikan dengan perkembangan teknologi terkini, serta membekali siswa dengan keterampilan nyata dan pengalaman langsung di dunia digital marketing.
                                </p>
                            </div>
                            <div className="w-full my-2">
                                <h2 className="mb-2 text-lg font-semibold ">Visi</h2>
                                <p className="text-xs md:text-base">
                                    Menciptakan generasi profesional yang siap kerja, kompetitif, dan memiliki keterampilan yang terakreditasi di bidang digital, sehingga mampu beradaptasi dan sukses di era industri 4.0.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
        </>
    )
}