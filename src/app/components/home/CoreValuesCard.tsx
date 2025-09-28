"use client";
import { ReactSVG } from "react-svg";

type CoreValueItems = {
  key: number;
  label: string;
  icon: string;
  description: string;
};

type CoreValuesCardProps = {
  coreValuesItems: CoreValueItems;
  coreValuesItemsId: string;
};

const CoreValuesCard: React.FC<CoreValuesCardProps> = ({
  coreValuesItems,
  // coreValuesItemsId,
}) => {
  return (
    <div
      key={coreValuesItems.key}
      className="flex flex-col justify-center items-center text-center sm:my-8 sm:mx-4 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
    >
      {/* <div className="mr-4 w-32 h-32 bg-blue-500 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] border-4 border-white ">
        <ReactSVG
          className="m-4 mt-6 group-hover:text-white text-blue-500 transition-colors duration-300"
          src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/corevalues/${coreValuesItems.icon}`}
        />
      </div> */}
      {/* Hexagon border for icon */}
      {/* <div className="group relative w-40 aspect-square  hover:scale-105 transition-all duration-300">
        <div className="absolute inset-0 bg-blue-500 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] z-0"></div>

        <div className="absolute inset-[2px] bg-white/5 backdrop-blur-lg [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center z-10 transition-all duration-300">
          <ReactSVG
            className="m-6 transition-colors duration-300"
            src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/corevalues/${coreValuesItems.icon}`}
          />
        </div>
      </div> */}

      <div className="bg-gradient-to-br from-[hsl(207,90%,54%)] to-[hsl(120,85%,45%)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        <ReactSVG
          className="h-8 w-8 text-white"
          src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/corevalues/${coreValuesItems.icon}`}
        />
      </div>

      <p className="text-2xl text-masala-800 font-bold mb-4">
        {coreValuesItems.label}
      </p>
      <p className="text-base text-masala-500">{coreValuesItems.description}</p>
    </div>
  );
};
export default CoreValuesCard;
