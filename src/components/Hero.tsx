'use client';

import Image from 'next/image';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

const companyLogos = [
  'vegemite.webp',
  'ricoh.webp',
  'lindt.webp',
  'kokoblack.webp',
  'coke.webp',
  'brewtopia.webp',
  'bega.webp',
  'hand-dyed.webp',
  'theeggsperts.webp',
];

const Hero = () => {
  return (
    <section className="relative mx-auto">
      <div className="hero-container">
        <div className="hero-header-container">
          <div className="hero-header-width">
            <h1 className="hero-header">
              Creating Outstanding Web Experiences for Your{' '}
              <span className="text-text">Success</span>
            </h1>
          </div>
        </div>
        <div className="carousel-slider">
          <div className="carousel-slider-items">
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <Image
                key={index}
                src={`/${logo}`}
                alt={`logo-${index}`}
                width={400}
                height={400}
                className="carousel-img"
                sizes="(min-width: 1680px) 650px, (min-width: 1380px) 570px, (min-width: 1040px) 40.63vw, (min-width: 780px) calc(50vw - 24px), calc(100vw - 48px)"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
