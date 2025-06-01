import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Hbo_nav from "@/components/molecules/navbar";
import Carousel from "@/components/molecules/Carousel";
import { B_item } from "@/components/atoms/miniatura_mia";
import { Movie_row } from "@/components/molecules/Movie_row";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  return (
    <>
    <section>
      <Hbo_nav/>
      <Carousel/>
    </section>
    <Movie_row Title="SI"/>
    </>

  );
}
