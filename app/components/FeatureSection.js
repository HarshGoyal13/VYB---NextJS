import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        {/* Centered Title */}
        <div className="flex justify-center items-center w-full md:w-1/3">
          <h2 className="text-lg sm:text-xl md:text-4xl mt-[300px] font-bold text-green-400 text-center ">
            From Creation to
            Monetization: 
            Vyb Store Has It All
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full md:w-2/3">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mt-4">Trusted By Influencers</h3>
            <p className="text-sm mt-2">
              A trusted platform for influencers to grow and earn.
            </p>
            <Image
              className="mt-[20px]"
              src="/images/influ.png"
              alt="Trusted By Influencers"
              width={190}
              height={160}
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mt-4">Secured Data</h3>
            <p className="text-sm mt-2">
              Advanced security measures to protect your valuable data.
            </p>
            <Image
              className="mt-[20px]"
              src="/images/laptop.png"
              alt="Secured Data"
              width={190}
              height={160}
            />
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mt-4">Authentic Payment Partner</h3>
            <p className="text-sm mt-2">
              Reliable, fast, and secure payments you can trust.
            </p>
            <Image
              className="mt-[20px]"
              src="/images/phone.png"
              alt="Authentic Payment Partner"
              width={190}
              height={160}
            />
          </div>

          {/* Card 4 */}
          <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mt-4">Monetize Your Influence</h3>
            <p className="text-sm mt-2">
              Seamlessly turn your influence into consistent revenue.
            </p>
            <Image
              className="mt-[20px]"
              src="/images/money.png"
              alt="Monetize Your Influence"
              width={190}
              height={160}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
