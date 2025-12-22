import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import lunarBg from "../../assets/lunar-bg-2.png";
import LunarFerox from "../../assets/LunarFerox.png";
import LearnMoreArrow from "../Icons/LearnMoreArrow.jsx";
import { cn } from "../../lib/utils";

export default function ParallaxSlider() {
  const isMobile = window.innerWidth <= 1025;
  const backgroundToUse = isMobile ? LunarFerox : lunarBg;

  return (
    <div className="relative h-screen w-full overflow-hidden mt-12">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={false}
        navigation={true}
        allowTouchMove={false}
        modules={[Parallax, Pagination, Navigation]}
        className="w-full h-full"
        
      >
        <div
          slot="container-start"
          className="absolute top-0 w-[110%] h-full bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${backgroundToUse})`,
          }}
          data-swiper-parallax-y="-10%"
        ></div>

        <SwiperSlide className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center gap-8 p-4">
            <div className="text-4xl md:text-7xl font-black tracking-wider text-center text-neon-blue drop-shadow-[0_0_10px_rgba(0,255,213,0.5)]">
              <h1>Lunar Crew</h1>
            </div>
            <a
              href="https://lunarark-50x-ase.tebex.io/category/ranks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-40 h-16 md:w-60 md:h-24 border border-neon-blue text-neon-blue rounded-xl text-lg md:text-2xl hover:shadow-[0_0_10px_rgba(0,255,213,0.5)] transition-shadow duration-300"
            >
              <p>Learn more</p>
              <LearnMoreArrow className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center gap-4 p-4">
            <div className="text-3xl md:text-6xl font-bold text-center text-purple-400 drop-shadow-[0_0_10px_rgba(192,139,250,0.5)]">
              Head of Operations
            </div>
            <div className="text-center">
              <ul className="mt-4 flex flex-col gap-2">
                <li className="text-2xl md:text-4xl font-gugi text-purple-400 drop-shadow-[0_0_15px_rgba(192,139,250,0.7)]">miner44</li>
                <li className="text-2xl md:text-4xl font-gugi text-purple-400 drop-shadow-[0_0_15px_rgba(192,139,250,0.7)]">DGLeon</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center gap-4 p-4">
            <div className="text-3xl md:text-6xl font-bold text-center text-neon-blue drop-shadow-[0_0_10px_rgba(0,255,213,0.5)]">
              Head of Development
            </div>
            <div className="text-center">
              <ul className="mt-4 flex flex-col gap-2">
                <li className="text-2xl md:text-4xl font-gugi text-neon-blue drop-shadow-[0_0_15px_rgba(0,255,213,0.7)]">556ms</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center gap-4 p-4">
            <div className="text-3xl md:text-6xl font-bold text-center text-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
              Head of Staff
            </div>
            <div className="text-center">
              <ul className="mt-4 flex flex-col gap-2">
                <li className="text-2xl md:text-4xl font-gugi text-indigo-500 drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Albin</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center gap-4 p-4">
            <div className="text-3xl md:text-6xl font-bold text-center text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
              Lead Developer
            </div>
            <div className="text-center">
              <ul className="mt-4 flex flex-col gap-2">
                <li className="text-2xl md:text-4xl font-gugi text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]">Nielsvdb01</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center gap-4 p-4">
            <div className="text-3xl md:text-6xl font-bold text-center text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">
              Lead Admin
            </div>
            <div className="text-center">
              <ul className="mt-4 flex flex-col gap-2">
                <li className="text-2xl md:text-4xl font-gugi text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.7)]">Nikii</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center gap-4 p-4">
            <div className="text-3xl md:text-6xl font-bold text-center text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">
              Event Manager
            </div>
            <div className="text-center">
              <ul className="mt-4 flex flex-col gap-2">
                <li className="text-2xl md:text-4xl font-gugi text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.7)]">Optimist24-7</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
