/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

'use client';

import Image from 'next/image';

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
    <section
      className="relative mx-auto"
      // initial={{ opacity: 0, y: -50 }} // Initial state (opacity 0 and move up 50px)
      // animate={{ opacity: 1, y: 0 }}
      // whileInView={{ opacity: 1 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.5 }} // Transition duration
    >
      <div className="hero-container">
        <div className="hero-header-container">
          <div className="hero-header-width">
            <h1 className="hero-header">
              Organizations that have placed their trust in{' '}
              <span className="text-text">STAKIS</span>
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
                width={300}
                height={300}
                loading="eager"
                className="carousel-img"
                sizes="(min-width: 768px) 400px, (min-width: 640px) 300px"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
