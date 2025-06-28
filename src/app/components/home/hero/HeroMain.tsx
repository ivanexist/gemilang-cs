"use client";

import { memo, ReactNode, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import type { Swiper as SwiperType } from "swiper/types";

interface SlideWithMotionProps {
  isVisible: boolean;
  children: ReactNode;
}

const SlideWithMotion = memo(
  ({ isVisible, children }: SlideWithMotionProps) => {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
SlideWithMotion.displayName = "SlideWithMotion";

const HeroMain = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
  };
  return (
    <div className="swiper-container relative overflow-x-hidden h-screen">
      <div className="swiper-wrapper">
        <Swiper
          //   ref={swiperRef}
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          initialSlide={0}
          loop
          centeredSlides
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
        >
          <SwiperSlide>
            <SlideWithMotion isVisible={currentIndex === 0}>
              <Hero1 />
            </SlideWithMotion>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWithMotion isVisible={currentIndex === 1}>
              <Hero2 />
            </SlideWithMotion>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWithMotion isVisible={currentIndex === 2}>
              <Hero3 />
            </SlideWithMotion>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default HeroMain;
