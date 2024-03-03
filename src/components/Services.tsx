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
      <div className="services-item-content">
        <div className="services-img-content">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            loading="eager"
          />
        </div>
        <div className="services-content-item">
          <div className="services-content-wrap">
            <div className="pb-2">
              <h3 className="services-item-header">{title}</h3>
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
      <div className="services-container">
        <div className="services-header-container">
          <div className="services-header-width">
            <h2 className="services-header">
              Services we can provide for you!
            </h2>
          </div>
          <div className="services-description-container">
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
              className="services-btn rounded-md"
            />
          </div>
        </div>
        <div className="relative mx-auto">
          <div className="services-item-container">
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
