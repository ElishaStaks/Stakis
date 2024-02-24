import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';

const CallToAction = () => {
  return (
    <section className="relative mx-auto">
      <div className="max-container padding-container py-[8rem] md:py-[9rem] lg:py-[10rem]">
        <div className="w-full max-w-[81.25rem]">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <Link
                href="/contact"
                className="relative inset-0 flex w-full flex-col justify-center px-[10%] md:pl-0"
              >
                <Image
                  src="/handshake.webp"
                  alt="Handshake"
                  className="rounded-full"
                  width={500}
                  height={500}
                  loading="eager"
                />
              </Link>
              <div className="flex flex-col items-center md:max-w-[31rem] md:items-start md:justify-center">
                <div className="pb-5">
                  <div className="pb-3">
                    <h2 className="text-center text-3xl font-medium leading-tight md:text-left md:text-4xl lg:text-5xl xl:text-5xl">
                      Curious to explore the possibilities for your website?
                    </h2>
                  </div>
                  <p className="text-center md:text-left">
                    Contact us to discover the potential together!
                  </p>
                </div>
                <Button
                  href="/contact"
                  type="button"
                  title="LETS CHAT"
                  icon="/svgs/right-arrow-icon.svg"
                  variant=""
                  className="rounded-md border-2 p-[0.85rem] px-[1.5rem] pb-[0.75rem] tracking-tight hover:bg-buttonHover md:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
