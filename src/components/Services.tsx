/* eslint-disable @typescript-eslint/no-redeclare */
import Image from 'next/image';
import React from 'react';

import Button from './Button';

const servicesList = [
  {
    title: 'Custom Web Development',
    description:
      "We specialize in developing highly scalable and meticulously crafted websites. Share your designs with us, and we'll transform them into pixel-perfect, seamless online experiences tailored to your needs.",
    image: '/custom-web-dev.webp',
  },
  {
    title: 'Web Maintenance',
    description:
      'From routine updates to proactive enhancements, we ensure your website remains secure, performs optimally, and continues to support your business growth.',
    image: '/web-maintenance-gears.webp',
  },
];

type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

const ServiceItem = ({ title, description, image }: ServiceItem) => {
  return (
    <div className="relative inset-0">
      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <div className="relative inset-0 flex w-full flex-col justify-center px-[10%] md:pl-0">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            loading="eager"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-none md:max-w-[26.25rem]">
            <div className="pb-2">
              <h3 className="text-3xl font-medium leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
                {title}
              </h3>
            </div>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative mx-auto">
      <div className="max-container padding-container pb-[4rem] lg:pb-[8rem]">
        <div className="relative mb-[4rem] flex w-full flex-col justify-between gap-4 md:mb-[3rem] md:flex-row md:gap-y-4 lg:mb-[5.5rem] lg:max-w-[79.125rem] lg:gap-6">
          <div className="max-w-none md:max-w-[20.25rem] lg:max-w-[26.25rem]">
            <h2 className="text-4xl font-medium leading-tight sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
              Services we can provide for you!
            </h2>
          </div>
          <div className="flex max-w-none flex-col items-start md:max-w-[30.625rem]">
            <div className="pb-4">
              <p>
                Explore our tailored web development services designed to
                enhance your online presence and elevate your business growth.
              </p>
            </div>
            <Button
              href="/contact"
              type="button"
              title="LETS CHAT"
              variant=""
              className="rounded-md border-2 p-3 tracking-tight hover:bg-buttonHover md:text-sm"
            />
          </div>
        </div>
        <div className="relative mx-auto">
          <div className="sticky top-0 flex w-full flex-col gap-10">
            {servicesList.map((service) => (
              <ServiceItem
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
