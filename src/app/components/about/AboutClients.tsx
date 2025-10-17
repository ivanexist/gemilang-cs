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
    <section className="flex justify-center">
      <div className=" flex-1 max-w-7xl py-4 mx-auto md:px-6">
        <div className="flex justify-center items-center sm:text-2xl md:text-3xl text-blue-600 font-bold mt-8">
          <h2 className="">Klien Kami</h2>
        </div>
        <div className="text-center text-masala-400 font-openSans leading-7 text-lg mt-4 px-4 mb-12">
          Membangun kepercayaan dengan organisasi dan institusi terkemuka di
          Indonesia.
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 sm:mx-8 md:mx-0 lg:max-w-7xl sm:place-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex m-4 h-28 sm:w-76 lg:w-88 relative p-4 bg-white shadow rounded-lg items-center"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={208}
                height={56}
                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                className="object-contain h-12 w-auto"
                priority={index < 4} // Prioritize loading for first 4 images
              />
              <h3 className="font-semibold ml-4 text-masala-700">
                {client.alt}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
