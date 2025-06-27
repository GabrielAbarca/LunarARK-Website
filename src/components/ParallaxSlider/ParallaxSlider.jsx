import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import lunarBg from "../../assets/lunar-bg.png";
import "./ParallaxSlider.css";

export default function ParallaxSlider() {
  return (
    <div className="parallax-slider-wrapper">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${lunarBg})`,
          }}
          data-swiper-parallax-y="-23%"
        ></div>
        <SwiperSlide>
          <div className={"title title-h1"} data-swiper-parallax-y="-300">
            <h1>Lunar Shop</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="purple-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Stardust
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li>Lunar Whitelist</li>
              <li>2x Points each 15 Min</li>
              <li>+50% Turret Fill Range</li>
              <li>x3 PvP Kit (Balanced Damage)</li>
            </ul>
          </div>
          <p className="bundle-price">$5</p>

          <button className="buy-button">Buy Now</button>
        </SwiperSlide>
        <SwiperSlide className="blue-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Blue Moon
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li>Lunar Whitelist</li>
              <li>3x Points each 15 Min</li>
              <li>+100% Turret Fill Range</li>
              <li>+5% Discount Ingame Shop</li>
              <li>+2000 Ingame Points</li>
              <li>Nebula Rebuild kits</li>
              <li>1 Weapon +350 Damage</li>
            </ul>
          </div>
          <p className="bundle-price">$10</p>

          <button className="buy-button">Buy Now</button>
        </SwiperSlide>
        <SwiperSlide className="dark-purple-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Dark Void
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li>Lunar Whitelist</li>
              <li>4x Points each 15 Min</li>
              <li>+150% Turret Fill Range</li>
              <li>+10% Discount Ingame Shop</li>
              <li>+6000 Ingame Points</li>
              <li>Blue Moon Rebuild kits</li>
              <li>5.000 Element (24h)</li>
              <li>1 Cap Flak Kit</li>
            </ul>
          </div>
          <p className="bundle-price">$15</p>

          <button className="buy-button">Buy Now</button>
        </SwiperSlide>
        <SwiperSlide className="reddish-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Red Giant
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li>Lunar Whitelist</li>
              <li>5x Points each 15 Min</li>
              <li>+150% Turret Fill Range</li>
              <li>+15% Discount Ingame Shop</li>
              <li>+10000 Ingame Points</li>
              <li>Infinite Dino Paints</li>
              <li>Red Giant Rebuild kits</li>
              <li>15.000 Element (24h)</li>
              <li>500 Mutagen (24h)</li>
              <li>1 BP +350% Damage</li>
              <li>Stryder (24h)</li>
            </ul>
          </div>
          <p className="bundle-price">$25</p>

          <button className="buy-button">Buy Now</button>
        </SwiperSlide>
        <SwiperSlide className="yellowish-theme">
          <div className="title" data-swiper-parallax-y="-300">
            Supernova
          </div>
          <div className="text" data-swiper-parallax-y="-100">
            <ul className="bundle-info">
              <li>Lunar Whitelist</li>
              <li>6x Points each 15 Min</li>
              <li>+400% Turret Fill Range</li>
              <li>+20% Discount Ingame Shop</li>
              <li>+15000 Ingame Points</li>
              <li>Infinite Dino Paints</li>
              <li>Supernova Rebuild kits</li>
              <li>20.000 Element (24h)</li>
              <li>1000 Mutagen (24h)</li>
              <li>5 Cap BP</li>
              <li>Stryder (24h)</li>
              <li>Tek Forge (24h)</li>
            </ul>
          </div>
          <p className="bundle-price">$40</p>

          <button className="buy-button">Buy Now</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
