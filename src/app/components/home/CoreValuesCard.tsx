"use client";

import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

type CoreValueItems = {
  key: number;
  label: string;
  icon: string;
  description: string;
};

type CoreValuesCardProps = {
  coreValuesItems: CoreValueItems;
  coreValuesItemsId: string;
  index: number;
};

const CoreValuesCard: React.FC<CoreValuesCardProps> = ({
  coreValuesItems,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
    >
      {/* Top Gradient Bar Reveal on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-malachite-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Background Accent */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50/50 rounded-full group-hover:bg-blue-100/50 transition-colors duration-500 blur-2xl" />

      <div className="relative z-10 flex flex-col items-center text-center h-full">
        {/* Icon Container */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-malachite-600 to-blue-700 border border-blue-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all duration-500">
          <ReactSVG
            className="h-8 w-8 text-blue-600 [&_svg]:fill-currentColor [&_svg]:w-8 [&_svg]:h-8 transition-colors duration-500"
            src={`https://raw.githubusercontent.com/ivanexist/gemilang-cs/refs/heads/master/public/assets/icons/corevalues/${coreValuesItems.icon}`}
          />
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col items-center">
          <h3 className="text-xl font-bold text-masala-900 mb-3 font-PlayfairDisplay group-hover:text-blue-700 transition-colors duration-300">
            {coreValuesItems.label}
          </h3>
          <p className="text-masala-500 text-sm md:text-base font-openSans font-light leading-relaxed group-hover:text-masala-600 transition-colors duration-300">
            {coreValuesItems.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CoreValuesCard;
