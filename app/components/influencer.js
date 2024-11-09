import React from 'react';
import Image from 'next/image';

const InfluencersSection = () => {
  return (
    <div className="bg-black text-white py-12 px-4 text-center">
      {/* Section Title */}
      <h2 className="text-green-400 text-xl md:text-2xl font-bold mb-8">Our Influencers</h2>

      {/* Influencer Images */}
      <div className="flex justify-center gap-6 flex-nowrap overflow-x-auto w-full px-4">
        {/* Influencer 1 */}
        <div className="relative w-[250px] h-[250px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden group flex-shrink-0">
          <Image
            src="/images/ladki.png"
            alt="Influencer 1"
            width={250}
            height={250}
            className="object-cover w-full h-full filter grayscale group-hover:filter-none transition-all duration-300"
          />
          {/* Hover Effect */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-black bg-white px-2 py-1 rounded-sm font-semibold">Samira ↗</span>
          </div>
        </div>

        {/* Additional Influencers */}
        {/* Repeat similar structure for additional influencers */}
        <div className="relative w-[250px] h-[250px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden group flex-shrink-0">
          <Image
            src="/images/ladka.png"
            alt="Influencer 2"
            width={250}
            height={250}
            className="object-cover w-full h-full filter grayscale group-hover:filter-none transition-all duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-black bg-white px-2 py-1 rounded-sm font-semibold">Alex ↗</span>
          </div>
        </div>

        <div className="relative w-[250px] h-[250px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden group flex-shrink-0">
          <Image
            src="/images/ladki2.png"
            alt="Influencer 3"
            width={250}
            height={250}
            className="object-cover w-full h-full filter grayscale group-hover:filter-none transition-all duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-black bg-white px-2 py-1 rounded-sm font-semibold">Lara ↗</span>
          </div>
        </div>

        <div className="relative w-[250px] h-[250px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden group flex-shrink-0">
          <Image
            src="/images/ladki.png"
            alt="Influencer 4"
            width={250}
            height={250}
            className="object-cover w-full h-full filter grayscale group-hover:filter-none transition-all duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-black bg-white px-2 py-1 rounded-sm font-semibold">Samira ↗</span>
          </div>
        </div>
      </div>


    </div>
  );
};

export default InfluencersSection;
