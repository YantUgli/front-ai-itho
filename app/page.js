import Chatbox from "@/Components/Chat";
import Daftar from "@/Components/Daftar";
import Footer from "@/Components/Footer";
import Galeri from "@/Components/Galeri";
import Hero from "@/Components/Hero";
import Keunggulan from "@/Components/Keunggulan";
import Navbar from "@/Components/Navbar";
import Program from "@/Components/Program";
import Tentang from "@/Components/Tentang";
import WhatIs from "@/Components/WhatIs";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <Navbar />
      <Chatbox />
      <main>
        <Hero />
        <WhatIs />
        <Program />
        <Keunggulan />
        <Galeri />
        <Daftar />
        <Tentang />
        <Footer />
      </main>
    </div>
  );
}
