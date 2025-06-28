"use client";

import { Project } from "@/generated/prisma";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { ReactSVG } from "react-svg";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectsDetailsContent = ({ project }: ProjectDetailsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = Array.isArray(project.images)
    ? (project.images as string[])
    : [];
  const projectDescription = Array.isArray(project.description)
    ? (project.description as string[])
    : [];

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <section className="flex items-center bg-inherit">
      <div className="max-w-screen-xl md:mx-auto w-screen">
        <div className="justify-center flex-1 max-w-7xl mx-auto overflow-x-hidden">
          {/* Image Gallery with Swiper and Framer Motion */}
          <div className="grid sm:grid-cols-1 md:grid-cols-5">
            <div className="relative col-span-3">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onSlideChange={handleSlideChange}
                initialSlide={currentIndex}
                className="relative sm:h-80 md:h-[500px] lg:h-[800px] px-1"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${image}`}
                          alt={`slide-${index}`}
                          width={5000}
                          height={3000}
                          className="w-full h-full object-cover object-center shadow-lg"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-span-2 sm:px-4 lg:ml-4">
              <div>
                {/* <h1 className="font-semibold text-2xl border-b-2 border-b-atlantis-500 text-blue-600 pb-4 uppercase text-center font-PlayfairDisplay mb-4 w-fit">
                  {project.name}
                </h1> */}
                <div className="text-lg text-masala-800 text-left font-openSans">
                  <p className="pb-2">{projectDescription[0]?.paragraph_1}</p>
                </div>
              </div>
              <div className="col-span-1 my-4">
                <div className="container sm:mx-4 lg:mx-auto mt-4">
                  <div className="flex flex-col gap-4 font-openSans text-lg">
                    <div className="flex pt-4">
                      <p className="flex font-semibold text-blue-600">
                        <ReactSVG
                          src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/client.svg`}
                        />
                        <span className="font-medium ml-4 text-masala-800">
                          {project.Client.name}
                        </span>
                      </p>
                    </div>
                    <div className="flex">
                      <p className="font-semibold text-blue-600">
                        Location
                        <span className="font-medium ml-4 text-masala-800">
                          {project.location}
                        </span>
                      </p>
                    </div>
                    <div className="flex">
                      <p className="font-semibold text-blue-600">
                        <ReactSVG
                          className="text-center text-blue-500 transition-colors duration-300"
                          src={`https://github.com/ivanexist/gemilang-cs/blob/master/public/assets/icons/kategori.svg`}
                        />
                        <span className="font-medium ml-4 text-masala-800">
                          {project.Service.name}
                        </span>
                      </p>
                    </div>
                    <div className="flex">
                      <p className="font-semibold text-blue-600">
                        <ReactSVG
                          className="text-center text-blue-500 transition-colors duration-300"
                          src={`https://github.com/ivanexist/gemilang-cs/blob/master/public/assets/icons/date.svg`}
                        />
                        <span className="font-medium ml-4 text-masala-800">
                          {project.yearcompleted.join(", ")}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetailsContent;
