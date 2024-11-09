import React from 'react';
import Image from 'next/image';

const StoreFrontCard = ({ title, description, graphImage, bgColor, width, height }) => {
  return (
    <div
      className="w-full md:max-w-[840px] flex flex-col md:flex-row items-center p-8 rounded-[17px] shadow-xl mx-auto space-y-6 md:space-y-0 md:space-x-6"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white">{description}</p>
      </div>

      <div className="flex-1">
  <Image
    src={graphImage}
    alt="Graph"
    style={{ width: width, height: height }}
    className="rounded-xl object-cover ml-[40px]  sm:w-[150px] sm:h-[200px] w-auto h-auto"
  />
</div>

    </div>
  );
};

export default StoreFrontCard;
