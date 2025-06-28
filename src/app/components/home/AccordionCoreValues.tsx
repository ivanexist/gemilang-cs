"use client";

import { useState } from "react";
import { Collapse } from "antd";
import { ReactSVG } from "react-svg";

const { Panel } = Collapse;

interface CoreValueItem {
  key: string;
  label: string;
  icon: string;
  children: React.ReactNode;
}

const items: CoreValueItem[] = [
  {
    key: "1",
    label: "Glory",
    icon: "glory.svg",
    children: (
      <p>
        Berusaha meraih kemuliaan dalam setiap usaha yang dilakukan, dengan
        tujuan mencapai hasil terbaik yang dapat dibanggakan.
      </p>
    ),
  },
  {
    key: "2",
    label: "Excellent",
    icon: "excellence.svg",
    children: (
      <p>
        Selalu berusaha memberikan hasil yang sangat baik, dengan standar tinggi
        yang tak tergoyahkan dalam setiap langkah yang diambil.
      </p>
    ),
  },
  {
    key: "3",
    label: "Modest",
    icon: "modest.svg",
    children: (
      <p>
        Meskipun telah mencapai banyak kesuksesan, tetap mempertahankan sikap
        rendah hati dan tidak berlebihan dalam merayakan pencapaian.
      </p>
    ),
  },
  {
    key: "4",
    label: "Innovative",
    icon: "innovative.svg",
    children: (
      <p>
        Selalu terbuka untuk ide-ide baru dan berfokus pada penciptaan solusi
        inovatif yang dapat membawa perubahan positif di masa depan.
      </p>
    ),
  },
  {
    key: "5",
    label: "Loyal",
    icon: "loyal.svg",
    children: (
      <p>
        Memiliki kesetiaan yang kuat terhadap nilai-nilai yang diyakini, serta
        tetap teguh pada prinsip meski dalam berbagai tantangan.
      </p>
    ),
  },
  {
    key: "6",
    label: "Accurate",
    icon: "accuracy.svg",
    children: (
      <p>
        Menjaga ketepatan dan keakuratan dalam setiap tindakan, karena kualitas
        tersebut sangat penting untuk hasil yang maksimal.
      </p>
    ),
  },
  {
    key: "7",
    label: "Networking",
    icon: "networking.svg",
    children: (
      <p>
        Membangun hubungan yang kuat dan saling menguntungkan, yang dapat
        mendukung pengembangan dan kemajuan bersama.
      </p>
    ),
  },
  {
    key: "8",
    label: "Growth",
    icon: "growth.svg",
    children: (
      <p>
        Berfokus pada perkembangan yang berkelanjutan, dengan selalu mencari
        peluang untuk tumbuh lebih baik dalam segala aspek.
      </p>
    ),
  },
];

const AccordionCoreValues = () => {
  const [activeKey, setActiveKey] = useState<string[]>(["1"]);

  const handleChange = (key: string | string[]) => {
    setActiveKey(typeof key === "string" ? [key] : key);
  };
  return (
    <Collapse activeKey={activeKey} onChange={handleChange} ghost accordion>
      {items.map((item) => (
        <Panel
          key={item.key}
          showArrow={false}
          header={
            <div
              className={`p-4 flex rounded-lg shadow-sm text-lg font-PlayfairDisplay font-bold transition-colors duration-300 w-[30rem] ${
                activeKey.includes(item.key)
                  ? "bg-blue-500 text-white border-r-malachite-600 border-r-8"
                  : "bg-gray-200 text-blue-600"
              }`}
            >
              <span className="w-8 h-8 mr-4">
                <ReactSVG
                  className="w-8 h-8 group-hover:text-white text-blue-500 transition-colors duration-300"
                  src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/corevalues/${item.icon}`}
                />
              </span>{" "}
              <span className="font-semibold text-xl">{item.label}</span>
            </div>
          }
        >
          <p className="border border-malachite-600 p-4 text-lg font-openSans w-[30rem] text-left">
            {item.children}
          </p>
        </Panel>
      ))}
    </Collapse>
  );
};
export default AccordionCoreValues;
