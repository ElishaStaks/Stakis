/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from './Button';

const HomeHero = () => {
  return (
    <section className="relative mx-auto">
      <div className="max-container padding-container pb-[4rem] pt-[2rem] lg:pb-[8rem] lg:pt-[4rem]">
        <div className="relative z-10 flex flex-col justify-between">
          <div className="max-w-[53.75rem]">
            <h1 className="text-4xl font-medium leading-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
              Creating Outstanding Web Experiences for Your{' '}
              <span className="text-text">Success</span>
            </h1>
          </div>

          <div className="relative mt-[3rem] flex flex-col-reverse items-center justify-between md:mt-[1.6rem] md:flex-row">
            <div className="mt-0 flex w-auto max-w-none flex-col items-start md:w-[30%] md:max-w-[22.5rem]">
              <p className="line-1.5 my-[1.25rem] text-white">
                We specialize in empowering small and medium-sized businesses
                through cutting-edge web solutions. Elevate your online presence
                with our tailored web development services, designed for growth
                and success.
              </p>
              <Button
                href="/contact"
                className="rounded-md border-2 p-3 tracking-tight hover:bg-buttonHover md:text-sm"
                type="button"
                title="START A PROJECT"
                variant=""
              />
            </div>
            <div className="z-1 relative w-full max-w-none md:w-1/2 md:max-w-[42rem]">
              <Image
                src="/man-on-computer.webp"
                alt="Man web developing on a computer"
                layout="responsive"
                width={500}
                height={500}
                sizes="(min-width: 1680px) 650px, (min-width: 1380px) 570px, (min-width: 1040px) 40.63vw, (min-width: 780px) calc(50vw - 24px), calc(100vw - 48px)"
              />
            </div>
            <Link
              href="/#work"
              className="absolute inset-x-0 bottom-auto top-0 mb-0 flex w-auto max-w-[7rem] items-center justify-center md:relative md:inset-auto md:max-w-[6.25rem] lg:mt-[10vh] lg:max-w-[7.25rem] xl:max-w-[8.25rem] 2xl:max-w-[9.25rem]"
            >
              <div className="relative flex w-full animate-spin-slow items-center justify-center">
                <Image
                  className="z-1 relative w-full"
                  src="/svgs/cta-circular.svg"
                  alt="Spinning circular call to action"
                  width={50}
                  height={50}
                  loading="eager"
                />
              </div>
              <div className="z-1 absolute max-w-[2.25rem] lg:max-w-[3.25rem] xl:max-w-[4.25rem]">
                <Image
                  className=""
                  src="/svgs/hero-arrow.svg"
                  alt="Arrow icon"
                  width={50}
                  height={45}
                  loading="eager"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
