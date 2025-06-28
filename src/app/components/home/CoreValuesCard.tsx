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
  coreValuesItemsId,
}) => {
  return (
    <div key={coreValuesItems.key} className="flex sm:my-8 sm:mx-4">
      {/* <div className="mr-4 w-32 h-32 bg-blue-500 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] border-4 border-white ">
        <ReactSVG
          className="m-4 mt-6 group-hover:text-white text-blue-500 transition-colors duration-300"
          src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/corevalues/${coreValuesItems.icon}`}
        />
      </div> */}
      <div className="group relative w-40 aspect-square">
        {/* Hexagon Border */}
        <div className="absolute inset-0 bg-blue-500 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] z-0"></div>

        {/* Hexagon Inner Background + Centered Icon */}
        <div className="absolute inset-[2px] bg-white group-hover:bg-blue-500 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center z-10 transition-colors duration-300">
          <ReactSVG
            className="m-6 transition-colors duration-300"
            src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/corevalues/${coreValuesItems.icon}`}
          />
        </div>
      </div>

      <div className="flex flex-col text-left pt-2 ml-6">
        <div className="text-2xl font-bold mb-4 text-malachite-600">
          {coreValuesItems.label}
        </div>
        <div className="text-base text-slate-700">
          {coreValuesItems.description}
        </div>
      </div>
    </div>
  );
};
export default CoreValuesCard;
