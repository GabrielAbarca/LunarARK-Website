import "./ShopMain.css";
import { useEffect, useState } from "react";
import ParallaxSlider from "../ParallaxSlider/ParallaxSlider.jsx";

export default function ShopMain() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);
  return (
    <>
      <main>
        {/* <div className="shop-title_container">
          <h1 className={`shop-title ${isLoaded ? "loaded" : ""}`}>
            Lunar Shop
          </h1>
        </div> */}
      </main>
      <ParallaxSlider />
    </>
  );
}
