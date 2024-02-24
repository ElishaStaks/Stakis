/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-redeclare */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const portfolioList = [
  {
    title: 'Spiff Commerce',
    description:
      'A platform that helps brands create customized experiences for customers.',
    image: '/spiff-hero-screenshot.webp',
    href: '/case-study/spiff-commerce',
    hasTarget: false,
    borderGradient: 'border-gradient-pink-blue',
  },
  {
    title: 'The Eggsperts',
    description:
      'A Melbourne-based business at Victoria Market, showcasing their premium range of eggs and honey.',
    image: '/eggsperts-screenshot.webp',
    href: 'https://the-eggsperts.com.au',
    hasTarget: true,
    borderGradient: 'border-gradient-blue-pink',
  },
  {
    title: 'Elishagram',
    description:
      'A sleek Instagram clone, offering users the familiar experience of connecting with others in a seamless social media environment.',
    image: '/elishagram-screenshot.webp',
    href: '/case-study/elishagram',
    hasTarget: false,
    borderGradient: 'border-gradient-blue-pink',
  },
];

type WorkItem = {
  title: string;
  description: string;
  image: string;
  href: string;
  hasTarget: boolean;
  borderGradient: string;
};

const WorkItem = ({
  title,
  description,
  image,
  href,
  hasTarget,
  borderGradient,
}: WorkItem) => {
  return (
    <Link
      href={href}
      target={`${hasTarget ? '_blank' : ''}`}
      className="inline-block w-[48%] max-w-[100%]"
    >
      <div className={`${borderGradient} p-1`}>
        <div className="relative overflow-hidden pb-[77%]">
          <Image
            src={image}
            alt="test"
            className="absolute inset-0 size-full object-cover"
            width={1000}
            height={1000}
            loading="eager"
          />
        </div>
      </div>
      <div className="mt-[1.5rem] flex flex-col">
        <h3 className="mb-2 text-3xl font-medium leading-tight lg:text-4xl">
          {title}
        </h3>
        <p className="text-white">{description}</p>
      </div>
    </Link>
  );
};

const Work = () => {
  return (
    <section id="work" className="relative mx-auto">
      <div className="max-container padding-container pb-[4rem] pt-[5rem]">
        <div className="w-full max-w-[81.25rem]">
          <div className="relative">
            <div className="grid-row-2 mb-[3rem] grid max-w-[64.5rem] flex-col justify-between gap-x-4 gap-y-8">
              <h2 className="text-4xl font-medium leading-tight sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                Our Work
              </h2>
              <div className="max-w-[30rem] md:max-w-[40rem]">
                <p>
                  Discover our portfolio showcasing the latest projects,
                  demonstrating our commitment to delivering high-quality web
                  solutions for diverse businesses.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex flex-wrap justify-between gap-y-16">
              {portfolioList.map((portfolio) => (
                <WorkItem
                  key={portfolio.title}
                  title={portfolio.title}
                  description={portfolio.description}
                  image={portfolio.image}
                  href={portfolio.href}
                  hasTarget={portfolio.hasTarget}
                  borderGradient={portfolio.borderGradient}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
