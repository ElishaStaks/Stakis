/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';

const AboutHero = () => {
  return (
    <section className="relative mx-auto">
      <div className="max-container padding-container pb-[4rem] pt-[2rem] lg:pb-[8rem] lg:pt-[4rem]">
        <div className="w-full max-w-[71.875rem]">
          <div className="relative">
            <div className="max-w-[55rem]">
              <h1 className="text-4xl font-medium leading-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
                A team dedicated to meeting your{' '}
                <span className="text-text">needs.</span>
              </h1>
            </div>

            <div className="w-full max-w-[81.25rem] pt-[3.5rem]">
              <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-16">
                  <div className="relative inset-0 flex w-full flex-col justify-center md:pl-0">
                    <Image
                      src="/man-with-glasses.webp"
                      alt="Man with glasses"
                      width={800}
                      height={800}
                      loading="eager"
                      className="rounded-md"
                    />
                  </div>
                  <Link
                    href="/#work"
                    className="absolute inset-y-0 bottom-auto left-0 right-auto mb-0 flex w-auto max-w-[7rem] items-center justify-center sm:bottom-0 sm:mt-[16rem] md:mt-[14rem] md:max-w-[7.25rem] lg:mt-[16rem] lg:max-w-[8.25rem] xl:mt-[23rem] xl:max-w-[9.25rem] 2xl:mt-[24rem] 2xl:max-w-[10.25rem]"
                  >
                    <div className="relative flex w-full animate-spin-slow items-center justify-center">
                      <Image
                        className="relative w-full"
                        src="/svgs/cta-circular.svg"
                        alt="Spinning circular call to action"
                        width={50}
                        height={50}
                        loading="eager"
                      />
                    </div>
                    <div className="absolute max-w-[2.25rem] lg:max-w-[3.25rem] xl:max-w-[4.25rem]">
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
                  <div className="flex flex-col md:max-w-[31rem] md:items-start">
                    <div className="pb-5">
                      <p>
                        We're an emerging force in the digital realm, driven by
                        passion and innovation. Despite our early stage, our
                        commitment to excellence remains unwavering. Join us on
                        this exciting journey. Your support propels us forward,
                        and together, we're creating the next chapter in our
                        story.
                      </p>
                    </div>
                    <Button
                      href="/contact"
                      className="rounded-md border-2 p-3 tracking-tight hover:bg-buttonHover md:text-sm"
                      type="button"
                      title="START A PROJECT"
                      variant=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
