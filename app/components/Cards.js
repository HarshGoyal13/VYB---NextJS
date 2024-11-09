"use client";

import React, { useRef, useEffect } from 'react';
import StoreFrontCard from './StoreFrontCard';

export default function HomePage() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardTop = card.offsetTop;
          if (scrollY >= cardTop - window.innerHeight / 2) {
            card.style.zIndex = index + 1;
          } else {
            card.style.zIndex = 0;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cardData = [
    {
      title: "SignUp and create your own store",
      description: "Join us via Google sign-in, verify your influencer status by entering your social media ID, and unlock your store at zero cost.",
      graphImage: '/images/1.png',
      bgColor: "#A94949",
      width: "212px",
      height: "305px"
    },
    {
      title: "Monetize your influencer status; Earn money adding real value to your true followers!",
      description: "Let VYB the money now! It's here, and you can withdraw it periodically.",
      graphImage: '/images/2.png',
      bgColor: "#5ED46A",
      width: "300px",
      height: "200px"
    },
    {
      title: "Call audience to your store. Easily integrate links into content.",
      description: "After setting up your products, it's time to go public. Put your store link in your Instagram bio and let’s make your first post together.",
      graphImage: '/images/3.png',
      bgColor: "#0ea5e9",
      width: "300px",
      height: "200px"
    },
    {
      title: "Build & customize your store front.",
      description: "Simply fill in the details to build your digital store. Once done, start selling your products to your audience.",
      graphImage: '/images/4.png',
      bgColor: "#0e7490",
      width: "200px",
      height: "300px"
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center py-10">
      {cardData.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="sticky top-0 rounded-[17px] "
          style={{ backgroundColor: card.bgColor }}
        >
          <StoreFrontCard
            title={card.title}
            description={card.description}
            graphImage={card.graphImage}
            width={card.width}
            height={card.height}
          />
        </div>
      ))}
    </div>
  );
}
