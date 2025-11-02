import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import lunarBg from "../../assets/lunar-bg-2.png";
import LunarFerox from "../../assets/LunarFerox.png";
import "./ParallaxSlider.css";
import LearnMoreArrow from "../Icons/LearnMoreArrow.jsx";

export default function ParallaxSlider() {
  const isMobile = window.innerWidth <= 1025;
  const backgroundToUse = isMobile ? LunarFerox : lunarBg;

  return (
    <div className="parallax-slider-wrapper">
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
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${backgroundToUse})`,
          }}
          data-swiper-parallax-y="-10%"
        ></div>
        <SwiperSlide>
          <div className={"title title-h1"} data-swiper-parallax-y="-300">
            <h1>Lunar Crew</h1>
          </div>
          <a
            href="https://lunarark-50x-ase.tebex.io/category/ranks"
            target="https://lunarark-50x-ase.tebex.io/category/misc"
            rel="noopener noreferrer"
            className="buy-button"
          >
           <p>Learn more</p>
            <LearnMoreArrow className="learn-more-icon" />
            
          </a>
        </SwiperSlide>
        <SwiperSlide className="purple-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Head of Operations
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li className="staff-name">miner44</li>
              <li className="staff-name">DGLeon</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="blue-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Head of Development
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li className="staff-name">556ms</li>
              
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="dark-purple-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Head of Staff
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li className="staff-name">Albin</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="reddish-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Lead Developer
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li className="staff-name">Nielsvdb01</li>
    
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="yellowish-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Lead Admin
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li className="staff-name">Nikii</li>

            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="dark-green-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Event Manager
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li className="staff-name">Optimist24-7</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
