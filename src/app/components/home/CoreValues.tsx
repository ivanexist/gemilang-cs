// import Image from "next/image";
import CoreValuesCard from "./CoreValuesCard";

interface CoreValueItem {
  key: number;
  label: string;
  icon: string;
  description: string;
}

const CoreValuesItems: CoreValueItem[] = [
  {
    key: 1,
    label: "Glory",
    icon: "glory.svg",
    description: "Berusaha meraih hasil terbaik yang membanggakan.",
  },
  {
    key: 2,
    label: "Excellent",
    icon: "excellence.svg",
    description: "Selalu memberikan hasil terbaik dengan standar tinggi.",
  },
  {
    key: 3,
    label: "Modest",
    icon: "modest.svg",
    description: "Tetap rendah hati meski telah meraih kesuksesan.",
  },
  {
    key: 4,
    label: "Innovative",
    icon: "innovative.svg",
    description: "Terbuka pada ide baru dan solusi yang membawa perubahan.",
  },
  {
    key: 5,
    label: "Loyal",
    icon: "loyal.svg",
    description: "Setia pada nilai dan prinsip dalam segala tantangan.",
  },
  {
    key: 6,
    label: "Accurate",
    icon: "accuracy.svg",
    description: "Menjaga ketepatan demi hasil yang maksimal.",
  },
  {
    key: 7,
    label: "Networking",
    icon: "networking.svg",
    description: "Membangun hubungan yang kuat dan saling mendukung.",
  },
  {
    key: 8,
    label: "Growth",
    icon: "growth.svg",
    description: "Fokus pada perkembangan berkelanjutan di segala aspek.",
  },
];

const CoreValues = () => {
  return (
    <div className="flex flex-col sm:mb-16 md:mb-0 sm:py-0 md:py-16 bg-[linear-gradient(to_right,rgba(255,255,255,0.5),rgba(255,255,255,0.7)),url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="font-semibold ml-4 mb-4 pb-2 text-blue-600 text-4xl font-PlayfairDisplay  uppercase text-center">
          Core Values
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-screen-xl mx-auto text-center sm:mb-6 lg:mb-20 sm:mt-4 lg:mt-12">
          {CoreValuesItems.map((coreValuesItems) => (
            <CoreValuesCard
              key={coreValuesItems.key}
              coreValuesItems={coreValuesItems}
              coreValuesItemsId={coreValuesItems.key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CoreValues;
