"use client";

import Image from "next/image";

interface Client {
  src: string;
  alt: string;
}

const clients: Client[] = [
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/tni-al.jpg",
    alt: "TNI AL",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/pelindo_energi_log.jpg",
    alt: "Pelindo Energi Logistik",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/pt-terminal-teluk-lamong.jpg",
    alt: "PT Terminal Teluk Lamong",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/peti_kemas_logo.jpg",
    alt: "Terminal Peti Kemas Surabaya",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/lamong-energi-logo.jpg",
    alt: "PT Lamong Energi Indonesia",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/BMS.png",
    alt: "PT Berlian Manyar Sejahtera",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Disfaslanal.png",
    alt: "Disfaslanal",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Kodiklatal.jpg",
    alt: "Kodiklatal",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Kodikmar.png",
    alt: "Kodikmar",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Lantamal V.png",
    alt: "Lantamal V",
  },
];

export default function AboutClients() {
  return (
    <section className="flex items-center">
      <div className="justify-center flex-1 max-w-7xl py-4 mx-auto md:px-6">
        <div className="flex justify-center items-center sm:text-xl md:text-4xl text-blue-600 font-bold mb-12 mt-12 uppercase">
          <p className="border-b-2 pb-4 border-b-atlantis-500">Our Clients</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8 my-8 sm:mx-8 md:mx-0 lg:max-w-7xl sm:place-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex justify-center items-center self-center m-4 h-52 w-52 p-4 bg-white rounded-full shadow-lg relative"
            >
              <Image
                src={client.src}
                alt={client.alt}
                fill
                sizes="(max-width: 768px) 208px, 208px"
                className="object-contain rounded-full p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
