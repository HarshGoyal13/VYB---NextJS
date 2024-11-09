import React from 'react';
import Image from 'next/image';

const TravelSection = () => {
  return (
    <div className="text-white font-urbanist w-full mt-4">
      {/* Header Section */}
      <div
        className="text-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/images/Travel.png')",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1 className="mb-4 font-urbanist font-extrabold text-5xl sm:text-7xl lg:text-[180px]">
          TRAVEL
        </h1>
        <p className="max-w-[90%] md:max-w-[700px] mx-auto font-extrabold text-lg sm:text-xl lg:text-2xl">
          Turn your travel experience into an itinerary, travel package with VYB Store and share it with your true followers.
        </p>
      </div>

      {/* Explore Itineraries Section */}

{/* Explore Itineraries Section */}
<div className="text-center py-8 bg-black mx-auto px-4 md:px-8">
  <h2 className="text-xl md:text-2xl font-bold mb-6">Explore Our Curated Travel Itineraries</h2>
  
  {/* Horizontal scrolling on small screens, grid layout on larger screens */}
  <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible px-4">
    {/* Itinerary Cards */}
    {['frame1.png', 'frame2.png', 'fame3.png', 'frame1.png'].map((frame, index) => (
      <div
        key={index}
        className="min-w-[200px] sm:w-[250px] md:w-[270px] h-[360px] sm:h-[450px] md:h-[480px] bg-cover bg-center rounded-lg shadow-lg relative"
        style={{ backgroundImage: `url('/images/${frame}')` }}
      >
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 rounded-b-lg">
          <h3 className="text-lg font-semibold">Itinerary Title {index + 1}</h3>
          <p className="text-sm">Location</p>
          <p className="text-xs mt-2">Samira Hodal</p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* How to List Section with Background */}
      <div
        className="text-center py-12 w-full relative flex flex-col items-center justify-center bg-slate-900"
        style={{
          background: "linear-gradient(90deg, rgba(255,95,227,0.4) 0%, rgba(0,0,0,1) 100%)",
          backgroundImage: "url('/images/travel2.png')",
          backgroundSize: "cover",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          height: "547px",
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-[200px]">
          How to list?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-4  sm:mt-[100px]">
          {['Create Itinerary', 'Convert into Travel Package', 'Earn by Sharing'].map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold bg-gray-800">
                {`0${index + 1}`}
              </div>
              <p className="mt-4 text-lg md:text-2xl font-semibold text-center w-32 md:w-auto">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Airplane Path */}
        <div className="relative w-full mt-8">
          <svg
            width="100%"
            height="100"
            viewBox="0 0 1200 150"
            className="mx-auto"
          >
            <path
              d="M 50 50 Q 600 200 1150 50"
              stroke="gray"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
            {[200, 600, 1000].map((xPos, index) => (
              <image
                key={index}
                x={xPos}
                y={xPos === 600 ? "130" : "20"}
                href="/images/airplane.png"
                width="30"
                height="30"
                className="rotate-45"
              />
            ))}
          </svg>
        </div>

        <div className="text-center py-4 text-lg text-white mt-[50px]">
        You Curate Experience, We Make It Happen
      </div>
      </div>


   
    </div>
  );
};

export default TravelSection;
