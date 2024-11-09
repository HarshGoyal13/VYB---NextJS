import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div>


    

    <div className="w-full max-w-[1200px] mx-auto flex flex-col mt-2 md:flex-row items-start justify-between text-white p-6 font-urbanist space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Text Section */}
      <div className="space-y-8 text-left px-4 md:w-1/2 mt-[40px]">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight">
          <span className="flex justify-start space-x-2">
            <span className="bg-white text-black rounded-lg px-2">One</span>
            <span className="bg-white text-black rounded-lg px-2">Stop</span>
          </span>
          <span className="block bg-white text-black rounded-lg px-2 mt-2">Marketplace</span>
          <span className="block mt-3">
            <span className="bg-white text-black rounded-lg px-2">For</span>
            <span className="bg-green-400 text-black px-2 rounded-md ml-2">Influencers</span>
          </span>
        </h1>

        <p className="text-xl sm:text-xl md:text-2xl font-bold w-full md:w-[400px] mx-auto md:mx-0">
          "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content – All in One Hub."
        </p>

        <div className="flex space-x-4 md:space-x-6">
          <button className="bg-green-400 text-black font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-md text-lg sm:text-xl">
            Demo Store
          </button>
          <button className="relative text-lg sm:text-xl font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-[19px] ">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#FF5D5D] to-[#4794FF]">
                Join Waitlist
            </span>
            </button>



        </div>
      </div>

      {/* Right Image Section */}
      <div className="h-[550px] flex justify-start">
        <Image
          src="/images/heroSection.png"
          className="rounded-lg object-cover"
          height={100}
          width={400}
          alt="Influencer 1"
          layout="responsive"
        />
      </div>

    </div>

    <div className='bg-black h-[100px] md:w-[1200px] md:ml-[195px] rounded-[17px] text-white font-urbanist text-3xl flex font-extrabold mt-[20px] justify-between sm:w-[250px] w-full px-4 sm:px-0'>
  <span className="mt-[25px] ml-[10px]">
    <span className="border-b-2 border-[#00dc82] pb-[5px]">Travel</span>
  </span>
  <span className='mt-[25px] ml-[10px]'>Digital</span>
  <span className='mt-[25px] ml-[10px]'>Brand</span>
  <span className='mt-[25px] ml-[10px]'>Merch</span>
</div>


</div>

  );
};

export default HeroSection;
