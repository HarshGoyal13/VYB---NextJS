"use client";

import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How much does it cost to set up a store?',
      answer: 'Setting up a store is completely free. You only pay a commission on sales.',
    },
    {
      question: 'What kind of digital products can I sell?',
      answer: 'You can sell various digital products, including eBooks, courses, and templates.',
    },
    {
      question: 'Do I need technical skills to use the platform?',
      answer: 'No, our platform is user-friendly and easy to navigate, requiring no technical expertise.',
    },
    {
      question: 'Is there a limit to the number of products I can list?',
      answer: 'There is no limit. You can list as many products as you like.',
    },
    {
      question: 'How do I receive payments for my sales?',
      answer: 'Payments are processed through secure gateways directly to your bank account.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-black text-white py-12 px-4 flex flex-col items-center">
    

      {/* Use Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        
        {/* Left side: Heading */}
        <div className="space-y-4 mt-[150px]">
        <h2 className="text-green-400 text-4xl font-extrabold font-urbanist mb-4 w-[300px]">Frequently Asked Questions</h2>
      <p className="text-gray-300 w-[400px] font-urbanist text-sm  ">
        Quick answers to questions you may have. Can’t find what you’re looking for? Check out our full documentation.
      </p>
        </div>

        {/* Right side: Question List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`cursor-pointer bg-white p-4 rounded-lg ${activeIndex === index ? 'bg-white' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-black font-urbanist">{faq.question}</h3>
                <span className={`transform text-black transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                  +
                </span>
              </div>
              {activeIndex === index && (
                <div className="mt-2 text-sm text-black">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
