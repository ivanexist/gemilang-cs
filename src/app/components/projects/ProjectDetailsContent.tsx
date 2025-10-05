"use client";

// import { Project } from "@/generated/prisma";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { ReactSVG } from "react-svg";
// import RelatedProjects from "./RelatedProjects";
import Link from "next/link";
import { Project, Client, Service, ProjectDescription } from "@/store/useStore";
import { useStore } from "@/store/useStore";
import { useParams } from "next/navigation";

// interface Props {
//   project: Project & {
//     Client: Client;
//     Service: Service;
//   };
// }

// interface ProjectDetailsProps {
//   project: Project;
// }
// type DescriptionItem = {
//   summary: string;
//   // maybe other fields later
// };

const ProjectsDetailsContent = () => {
  const params = useParams();
  const currentSlug = typeof params.slug === "string" ? params.slug : "";
  const {
    getProjectByUrl,
    getClientById,
    getServiceById,
    getProjectsByServiceId,
  } = useStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Debug: Log project, client, service, and related projects
  useEffect(() => {
    const project = getProjectByUrl(currentSlug);
    console.log("ProjectsDetailsContent Slug:", currentSlug);
    console.log("ProjectsDetailsContent Project:", project);
    if (project) {
      console.log(
        "ProjectsDetailsContent Client:",
        getClientById(project.clientid)
      );
      console.log(
        "ProjectsDetailsContent Service:",
        getServiceById(project.serviceid)
      );
      console.log(
        "ProjectsDetailsContent Related Projects:",
        getProjectsByServiceId(project.serviceid)
      );
    }
  }, [
    currentSlug,
    getProjectByUrl,
    getClientById,
    getServiceById,
    getProjectsByServiceId,
  ]);
  const project = getProjectByUrl(currentSlug);
  if (!project) {
    return null; // Handled by ProjectDetailsPage
  }
  const client = getClientById(project.clientid);
  const service = getServiceById(project.serviceid);
  const images = Array.isArray(project.images) ? project.images : [];
  const projectDescription: ProjectDescription[] = Array.isArray(
    project.description
  )
    ? project.description.every(
        (desc) =>
          typeof desc === "object" &&
          "summary" in desc &&
          "overview" in desc &&
          "paragraph_1" in desc &&
          "paragraph_2" in desc &&
          "paragraph_3" in desc
      )
      ? (project.description as ProjectDescription[])
      : []
    : [];

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <section className=" bg-[url('https://euildint.vercel.app/assets/images/testimonial/testi-bg.jpg')] bg-cover bg-center bg-repeat mb-16">
      <div className=" max-w-screen-xl md:mx-auto w-screen">
        <div className="flex items-center justify-center flex-1 max-w-7xl mx-auto overflow-x-hidden">
          {/* Image Gallery with Swiper and Framer Motion */}
          <div className="grid sm:grid-cols-1 md:grid-cols-6">
            <div className="relative col-span-3">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true, type: "bullets" }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onSlideChange={handleSlideChange}
                initialSlide={currentIndex}
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
                          className="w-full h-120 object-cover object-center"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-span-3 sm:px-4 lg:ml-4">
              <div>
                {/* <h1 className="font-semibold text-2xl border-b-2 border-b-atlantis-500 text-blue-600 pb-4 uppercase text-center font-PlayfairDisplay mb-4 w-fit">
                  {project.name}
                </h1> */}
                <div className="flex mb-4">
                  <div className="bg-malachite-600 rounded-full py-2 px-4 text-sm text-white font-semibold">
                    <p>{service?.name ?? "Unknown Service"}</p>
                  </div>
                  <div className="ml-4 pt-1">
                    <div className="flex text-blue-600">
                      <ReactSVG
                        className="text-center text-blue-500 transition-colors duration-300"
                        src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/date-gray.svg`}
                      />
                      <span className="text-sm font-semibold text-gray-800 p-1">
                        {project.yearcompleted.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
                <h1 className="font-bold text-2xl text-blue-600 font-PlayfairDisplay mt-6">
                  {project.name}
                </h1>
              </div>
              <div className="mt-4">
                {/* Project Description */}
                <div className="text-medium text-masala-800 text-left font-openSans pt-2">
                  <p className="font-light pb-2">
                    {projectDescription[0]?.summary}
                  </p>
                </div>
              </div>
              <div className="col-span-1 my-4">
                <div className="container sm:mx-4 lg:mx-auto mt-4">
                  <div className="flex justify-between mt-8 font-openSans text-medium">
                    <div className="flex">
                      <div className="flex text-blue-600">
                        <ReactSVG
                          src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/client-gray.svg`}
                        />
                        <span className=" ml-1 text-gray-800 p-1">
                          {client.name}
                        </span>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex text-blue-600">
                        <ReactSVG
                          className="text-blue-500 transition-colors duration-300"
                          src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/location-gray.svg`}
                        />
                        <span className="font-medium ml-1 text-gray-800 p-1">
                          {project.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-8">
                <Link
                  href={"/"}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Liat Pelayanan Terkait
                </Link>
                <Link
                  href={"/"}
                  className="ml-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  Diskusikan Proyek Serupa
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <RelatedProjects selectedProject={project} />
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsDetailsContent;
