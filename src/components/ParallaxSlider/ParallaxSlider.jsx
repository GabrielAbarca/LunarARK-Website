import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import lunarBg from "../../assets/lunar-bg-2.png";
import LunarFerox from "../../assets/LunarFerox.png";
import "./ParallaxSlider.css";
import BuildingShop from "../Icons/BuildingShop";

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
            <h1>Lunar Shop</h1>
          </div>
          <a
            href="https://lunarark-50x-ase.tebex.io/category/ranks"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
          >
            <BuildingShop className="building-shop-icon" />
           <p>Visit Shop</p>
          </a>
        </SwiperSlide>
        <SwiperSlide className="purple-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Stardust
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li>Lunar Whitelist</li>
              <li>+10000 Instant Points</li>
              <li>600 Points per hour</li>
              <li>Stardust Discord Role</li>
              <li>Stardust Ingame Tag</li>
              <li>Lifetime Supporter Role</li>
              <li>Bundle lasts 28 days</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="blue-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Nebula
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li>Lunar Whitelist</li>
              <li>+25000 Instant Points</li>
              <li>800 Points per hour</li>
              <li>VIP Starter Kit</li>
              <li>Rank Farm Kit</li>
              <li>Nebula Discord Role</li>
              <li>Nebula Ingame Tag</li>
              <li>Lifetime Supporter Role</li>
              <li>Bundle lasts 28 days</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="dark-purple-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Comet
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li>Lunar Whitelist</li>
              <li>+40000 Instant Points</li>
              <li>1000 Points per hour</li>
              <li>VIP Starter Kit</li>
              <li>Rank Farm Kit</li>
              <li>Comet Discord Role</li>
              <li>Comet Ingame Tag</li>
              <li>Lifetime Supporter Role</li>
              <li>Bundle lasts 28 days</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="reddish-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Cosmos
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li>Lunar Whitelist</li>
              <li>+60000 Instant Points</li>
              <li>1200 Points per hour</li>
              <li>VIP Starter Kit</li>
              <li>MVP Starter Kit</li>
              <li>3x Cosmos Maewing Kit [LvL 150 Maewing]</li>
              <li>Rank Taming Kit</li>
              <li>QOL Kit</li>
              <li>Rank Farm Kit</li>
              <li>Better Rank Farm Kit</li>
              <li>Cosmos Utilities Kit [Element + Mutagen]</li>
              <li>Cosmos Discord Role</li>
              <li>Cosmos Ingame Tag</li>
              <li>Lifetime Supporter Role</li>
              <li>Bundle lasts 28 days</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="yellowish-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Supernova
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li>Lunar Whitelist</li>
              <li>+120000 Instant Points</li>
              <li>1300 Points per hour</li>
              <li>VIP Starter Kit</li>
              <li>MVP Starter Kit</li>
              <li>3x Supernova Maewing Kit [LvL 180 Maewing]</li>
              <li>Rank Taming Kit</li>
              <li>QOL Kit</li>
              <li>Rank Farm Kit</li>
              <li>Better Rank Farm Kit</li>
              <li>Supernova Utilities Kit [Element + Mutagen]</li>
              <li>Supernova Discord Role</li>
              <li>Supernova Ingame Tag</li>
              <li>Lifetime Supporter Role</li>
              <li>Bundle lasts 28 days</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="dark-green-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Singularity
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li>Lunar Whitelist</li>
              <li>+250000 Instant Points</li>
              <li>1700 Points per hour</li>
              <li>VIP Starter Kit</li>
              <li>MVP Starter Kit</li>
              <li>3x Singularity Maewing Kit [LvL 224 Maewing]</li>
              <li>Rank Taming Kit</li>
              <li>QOL Kit</li>
              <li>Rank Farm Kit</li>
              <li>Better Rank Farm Kit</li>
              <li>Singularity Utilities Kit [Element + Mutagen]</li>
              <li>Singularity Discord Role</li>
              <li>Singularity Ingame Tag</li>
              <li>Lifetime Supporter Role</li>
              <li>Bundle lasts 28 days</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
