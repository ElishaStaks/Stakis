import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="max-container padding-container">
        <div className="pb-[2.125rem] pt-[1.5rem]">
          <div className="w-full max-w-[81.25rem]">
            <div className="mb-[2rem] flex flex-wrap items-center justify-between gap-x-5">
              <Link href="/" className="w-auto">
                <Image
                  src="/Stakis-logo-final.png"
                  alt="Stakis web development logo"
                  width={70}
                  height={70}
                  loading="eager"
                />
              </Link>
              <div className="order-1 flex w-full flex-wrap items-center justify-center pt-[2rem] text-center md:order-none md:w-auto md:pt-0">
                <Link
                  href="#work"
                  className="inline-block p-2.5 pl-[1.12rem] pr-[1.125rem] transition-all hover:text-[#954800]"
                >
                  Work
                </Link>
                <Link
                  href="/about"
                  className="inline-block p-2.5 pl-[1.12rem] pr-[1.125rem] transition-all hover:text-[#954800]"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-block p-2.5 pl-[1.12rem] pr-[1.125rem] transition-all hover:text-[#954800]"
                >
                  Contact Us
                </Link>
                {/* <Link
                  href="/contact"
                  className="inline-block p-2.5 pl-[1.12rem] pr-[1.125rem] transition-all hover:text-[#954800]"
                >
                  Terms & Conditions
                </Link> */}
              </div>
              <div className="flex justify-center gap-x-4">
                <Link
                  href="https://www.linkedin.com/company/stakis/"
                  target="_blank"
                  className="p-1"
                >
                  <Image
                    src="/svgs/linkedin-icon.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    loading="eager"
                  />
                </Link>
              </div>
            </div>

            <div className="border bg-white" />

            <div className="mt-[1rem] flex items-center justify-center text-center">
              <div className="text-[#ee9c004d]">
                @ 2024 Stakis | All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
