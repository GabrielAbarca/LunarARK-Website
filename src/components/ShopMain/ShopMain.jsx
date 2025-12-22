import ParallaxSlider from "../ParallaxSlider/ParallaxSlider.jsx";
import { motion } from "framer-motion";

export default function ShopMain() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <ParallaxSlider />
      </motion.div>
    </main>
  );
}
