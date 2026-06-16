"use client";

import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Gedung-Barak-Siswa-Lantamal-VI/Side-2.jpg",
    title: "Membangun Fondasi Masa Depan",
    subtitle: "Inovasi dan Keunggulan dalam Setiap Konstruksi",
    description: "Kami menghadirkan solusi konstruksi terpadu dengan standar kualitas tinggi, keamanan terjamin, dan komitmen penuh terhadap kepuasan klien."
  },
  {
    id: 2,
    image: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Side-1.jpg",
    title: "Ahli Infrastruktur & Sipil",
    subtitle: "Pembangunan Berkelanjutan di Seluruh Indonesia",
    description: "Lebih dari 10 tahun pengalaman mengerjakan proyek skala nasional dengan tim ahli yang profesional dan tersertifikasi."
  },
  {
    id: 3,
    image: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Pembangunan-Jalan/Proses-2-jalan.jpeg",
    title: "Komitmen pada Kualitas",
    subtitle: "Dari Perencanaan Hingga Serah Terima",
    description: "Dengan sumber daya dan relasi yang luas, kami siap bersinergi menawarkan kerjasama yang produktif untuk menghasilkan karya terbaik."
  }
];

interface SlideContentProps {
  isVisible: boolean;
  slide: typeof slides[0];
}

const SlideContent = memo(({ isVisible, slide }: SlideContentProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-malachite-400 mr-2 animate-pulse" />
                <span className="text-white text-sm font-medium font-openSans tracking-wide">
                  {slide.subtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-PlayfairDisplay leading-tight drop-shadow-xl"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-gray-200 font-openSans font-light leading-relaxed mb-10 max-w-2xl drop-shadow-md"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/kontak"
                  className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 hover:-translate-y-1"
                >
                  Mulai Proyek Anda
                </Link>
                <Link
                  href="/proyek"
                  className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  Lihat Portofolio
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
});
SlideContent.displayName = "SlideContent";

const HeroMain = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-gray-900">
      <Swiper
        onSlideChange={(swiper: SwiperType) => setCurrentIndex(swiper.realIndex)}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, type: "bullets" }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: currentIndex === index ? 1 : 1.1 }}
                transition={{ duration: 6, ease: "linear" }}
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Premium Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10" />
            </div>

            <SlideContent isVisible={currentIndex === index} slide={slide} />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="hidden md:flex absolute bottom-12 right-12 z-30 space-x-4">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </Swiper>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest mb-2 font-openSans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroMain;
