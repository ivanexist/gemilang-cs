"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Project = {
  project_id: string;
  client_id: string;
  service_id: string;
  project_name: string;
  project_images: string[];
};

interface ImageItem {
  src: string;
  title: string;
  description?: string;
}

const images: ImageItem[] = [
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Pembangunan-Jalan/Proses-1.jpg",
    title: "Pembangunan Jalan Terminal Teluk Lamong",
    description:
      "Mempermudah akses ke pelabuhan dan membantu ekonomi serta transportasi warga sekitar",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Gedung-Barak-Kowal-Lantamal-VI/Gedung-1.jpeg",
    title: "Gedung Barak Kowal Lantamal VI",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Pipa-Pelindo-Energi-Logistik/Side-1.jpg",
    title: "Perbaikan Pipa Bahan Bakar",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Posal-Gili-Air/Side-1.jpg",
    title: "Pembangunan Gedung Pos Angkatan Laut",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Rumneg-T45-Lantamal-V/Proses.jpeg",
    title: "Pembangunan Rumah Negara T45 Wonosari",
  },
];

const GridItem: React.FC<ImageItem & { index: number }> = ({
  src,
  title,
  description,
  index,
}) => {
  // Example dynamic logic: every 5th image spans 2 columns and rows
  const isLarge = index % 5 === 0;
  const colSpanClass = isLarge ? "md:col-span-2" : "";
  const rowSpanClass = isLarge ? "md:row-span-2" : "";

  return (
    <div
      className={`relative overflow-hidden shadow-lg group ${colSpanClass} ${rowSpanClass}`}
    >
      <Image
        src={`${src}?w=1080&auto=format`}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-600">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
          <h4 className="text-xl font-bold text-white">{title}</h4>
          {description && <p className="text-white">{description}</p>}
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects: React.FC = () => {
  return (
    <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1610164989165-0c4701bc4ce2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
      <div className="container max-w-screen-xl text-center mx-auto px-4 py-20">
        <h1 className="font-semibold my-4 mb-16 pb-2 text-white text-3xl font-PlayfairDisplay w-fit text-center mx-auto">
          FEATURED PROJECTS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <GridItem key={index} {...img} index={index} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-16">
          <Link href="/projects">
            <button className="py-4 px-8 bg-malachite-600 hover:bg-malachite-500 text-white font-semibold text-xl cursor-pointer uppercase">
              All Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
