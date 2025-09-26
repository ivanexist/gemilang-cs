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
    <div className="flex flex-col sm:mb-16 md:mb-0 sm:py-0 md:py-16 bg-inherit">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="font-semibold ml-4 mb-4 pb-2 text-blue-600 text-4xl font-PlayfairDisplay   text-center">
          Core Values
        </h1>
        <h2 className="text-masala-400 text-xl font-openSans font-light max-w-3xl mx-auto mb-8">
          Prinsip-prinsip dasar ini menjadi pedoman dalam setiap keputusan
          diambil dan setiap proyek yang kami kerjakan.
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-screen-xl mx-auto text-center sm:mb-6 lg:mb-0 sm:mt-4 lg:mt-12">
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
