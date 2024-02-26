/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/no-unescaped-entities */

'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Daniel Perogiannis',
    businessName: 'Business Owner, The Eggsperts',
    quote:
      "Working with Stakis has been a game changer for our business. Their expertise in website development has transformed our online presence, bringing our vision to life with precision and creativity. We couldn't be happier with the results!",
    image: '/daniel-portrait.webp',
  },
];

type TestimonialItem = {
  name: string;
  businessName: string;
  quote: string;
  image: string;
};

const TestimonialItem = ({
  name,
  businessName,
  quote,
  image,
}: TestimonialItem) => {
  return (
    <div className="mx-[auto] flex flex-none items-stretch justify-center self-stretch">
      <div className="gradient-border relative flex h-full flex-1 flex-col items-stretch justify-center p-[4.5rem] px-[4rem] pb-[5rem]">
        <div className="flex flex-col items-start transition-opacity duration-200">
          <div className="mb-[1.5rem] flex items-center">
            <div className="size-[4rem] max-w-[4rem] overflow-hidden rounded-full">
              <Image
                src={image}
                alt="Testimonial member portrait"
                className="size-full object-cover"
                width={100}
                height={100}
                loading="eager"
              />
            </div>
            <div className="ml-5 flex flex-col items-start">
              <div className="text-base font-bold text-white">{name}</div>
              <div className="text-white">{businessName}</div>
            </div>
          </div>
          <p className="text-2xl italic leading-relaxed text-white">
            "{quote}"
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="relative mx-auto mb-[-2px] overflow-hidden">
      <div className="max-container padding-container py-[4rem]">
        <div className="relative mx-auto max-w-[970px]">
          <div className="mx-auto mb-[4.5rem] max-w-[38.75rem] text-center lg:max-w-[45rem]">
            <h2 className="text-4xl font-medium leading-tight sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
              What Our Clients say about Us
            </h2>
          </div>
          <div className="relative">
            <div className="relative flex flex-col items-stretch justify-start overflow-visible">
              <div className="flex-1 flex-row items-end justify-between">
                {testimonials.map((testimony, index) => (
                  <div
                    key={testimony.name}
                    className={index === currentIndex ? 'block' : 'hidden'}
                  >
                    <TestimonialItem
                      name={testimony.name}
                      businessName={testimony.businessName}
                      quote={testimony.quote}
                      image={testimony.image}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="ml-auto mt-[1.5rem] flex justify-between gap-5">
              <button
                type="button"
                className="flex min-h-[4rem] w-[5rem] items-center justify-center border-2 border-[#ff66cc] text-2xl text-white"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <div className="gradient-border flex w-full items-center justify-center text-base">
                <div className="text-1xl text-white">{currentIndex + 1}</div>
                <div className="text-1xl text-white">/</div>
                <div className="text-1xl text-white">{testimonials.length}</div>
              </div>
              <button
                type="button"
                className="flex min-h-[3rem] w-[5rem] items-center justify-center border-2 border-[#66ccff] text-2xl text-white"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
