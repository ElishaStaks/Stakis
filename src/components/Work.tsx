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
    image: '/spiff.webp',
    href: '/case-study/spiff-commerce',
    hasTarget: false,
    category: 'Web Application',
  },
  {
    title: 'The Eggsperts',
    description:
      'A Melbourne-based business at Victoria Market, showcasing their premium range of eggs and honey.',
    image: '/eggsperts.webp',
    href: 'https://the-eggsperts.com.au',
    hasTarget: true,
    category: 'UI/UX Design',
  },
  {
    title: 'Elishagram',
    description:
      'A sleek Instagram clone, offering users the familiar experience of connecting with others in a seamless social media environment.',
    image: '/elishagram.webp',
    href: '/case-study/elisha-gram',
    hasTarget: false,
    category: 'Web Application',
  },
];

type WorkItem = {
  title: string;
  image: string;
  href: string;
  hasTarget: boolean;
  category: string;
};

const WorkItem = ({ title, image, href, hasTarget, category }: WorkItem) => {
  return (
    <Link
      href={href}
      target={`${hasTarget ? '_blank' : ''}`}
      className="inline-block max-w-[100%]"
    >
      <div className="mb-10 cursor-pointer rounded-xl shadow-lg hover:shadow-xl sm:mb-0">
        <div className="relative h-full">
          <Image
            src={image}
            className=" rounded-t-xl border-none object-cover"
            alt="Single Project"
            layout="responsive"
            width={100}
            height={90}
            loading="eager"
            sizes="(min-width: 1680px) 420px, (min-width: 1380px) 367px, (min-width: 1040px) 27.19vw, (min-width: 640px) calc(50vw - 34px), calc(100vw - 48px)"
          />
        </div>
        <div className="rounded-b-xl bg-white py-4 text-center">
          <p className="mb-2 text-xl font-medium leading-tight text-text md:text-2xl">
            {title}
          </p>
          <span className="text-lg leading-tight text-black">{category}</span>
        </div>
      </div>
    </Link>
  );
};

const Work = () => {
  return (
    <section id="work" className="relative mx-auto">
      <div className="max-container padding-container pb-[4rem] lg:pb-[8rem]">
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
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {portfolioList.map((portfolio) => (
                <WorkItem
                  key={portfolio.title}
                  title={portfolio.title}
                  image={portfolio.image}
                  href={portfolio.href}
                  hasTarget={portfolio.hasTarget}
                  category={portfolio.category}
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
