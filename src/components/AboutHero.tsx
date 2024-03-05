/* eslint-disable react/no-unescaped-entities */
/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import React from 'react';

export const MISSION_VALUES = [
  {
    title: 'Mission',
    description:
      "Create web solutions that not only elevate our clients' online presence but also contribute positively to the community we serve. We believe in accountability to our employees, customers, and fellow citizens, ensuring that every interaction adds value to their lives and the common wealth of society.",
  },
  {
    title: 'Vision',
    description:
      "To be a leading force in reshaping the digital landscape, delivering innovative web solutions that empower businesses to thrive online. We aim to set new standards of excellence in web development and maintenance, ensuring our clients' success while contributing positively to the digital realm and beyond.",
  },
  {
    title: 'Values',
    description:
      'Our core values are the cornerstone of our business, guiding our decisions, molding our culture, and defining who we are. We are committed to constant learning, believing that experimentation is key to progress. Transparency is integral to our ethos, encouraging honest and respectful dialogue. We value speaking up when something feels off. Above all, your happiness is our priority, as we understand that nothing else truly matters',
  },
];

type Item = {
  title: string;
  description: string;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Item = ({ title, description }: Item) => {
  return (
    <div className="flex flex-col items-start lg:max-w-[30rem] lg:flex-row">
      <div className="mt-[1.5rem] lg:ml-[1.5rem] lg:mt-0">
        <h3 className="bold-20 lg:bold-32 mb-[0.75rem] capitalize">{title}</h3>
        <p className="regular-16 leading-7">{description}</p>
      </div>
    </div>
  );
};

const AboutHero = () => {
  return (
    <>
      <section className="relative mx-auto">
        <div className="max-container padding-container py-[2rem] lg:py-[4rem]">
          <div className="pb-[2rem] text-center lg:pb-[4rem]">
            <h1 className="text-4xl font-medium leading-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
              Meeting your <span className="text-text">needs.</span>
            </h1>
          </div>
          <div className="relative grid grid-cols-1 items-center md:grid-cols-2 lg:gap-5">
            <div className="flex justify-center">
              <Image
                className="mb-[1rem] h-auto w-[75%] max-w-full rounded-md lg:w-full xl:w-[75%]"
                src="/custom-web-dev.webp"
                alt="Computer with diagrams"
                width={640}
                height={357}
                loading="eager"
              />
            </div>
            <div>
              <h2 className="bold-20 lg:bold-32 mb-[0.75rem] capitalize">
                Our Story
              </h2>
              <p>
                Welcome to Stakis, your go-to destination for top-notch web
                development and maintenance services. Established in 2023, our
                journey began with a vision crafted in 2020 to revolutionize the
                digital landscape. We've built our reputation on our dedication
                to client satisfaction and our continuous embrace of the latest
                trends and technologies. Whether you're in need of bespoke web
                development from the ground up or reliable web maintenance
                services, we're here to bring your digital vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden">
        <div className="max-container padding-container pb-[4rem] lg:pb-[8rem]">
          <div className="relative grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-3">
            {MISSION_VALUES.map((mission) => (
              <Item
                key={mission.title}
                title={mission.title}
                description={mission.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
