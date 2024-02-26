'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { useBodyOverflow } from '@/hooks/BodyOverflow';

import Button from './Button';

const NAV_LINKS = [
  { href: '/#work', key: 'work', label: '  Work' },
  { href: '/about', key: 'about', label: 'About Us' },
  { href: '/#services', key: 'services', label: 'Services' },
  { href: '/contact', key: 'contact', label: 'Contact Us' },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useBodyOverflow(isMenuOpen);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-30 py-6">
      <div className="max-container flexBetween padding-container">
        <div className="flex">
          <Link href="/" className="text-2xl font-semibold">
            <Image
              src="/Stakis-logo-final.png"
              alt="Stakis web development logo"
              width={70}
              height={70}
              loading="eager"
            />
          </Link>
        </div>

        {/* Display the menu icon on screens smaller than lg */}
        <Image
          className="inline-block cursor-pointer lg:hidden"
          src="/svgs/grid-icon.svg"
          alt="menu"
          width={40}
          height={40}
          onClick={handleMenuClick}
        />

        {/* On larger screens (lg and xl), display the regular navigation links and shop now button */}
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="flexCenter cursor-pointer pb-1.5 transition-all hover:text-textHover"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            className="rounded-md border-2 p-3 hover:bg-buttonHover"
            href="/contact"
            type="button"
            title="START A PROJECT"
            variant=""
          />
        </div>
      </div>
      {/* Responsive navigation menu */}
      {isMenuOpen && (
        <div className="max-container padding-container fixed inset-0 z-50 bg-background lg:hidden">
          <ul className="mt-10 flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                onClick={handleMenuClick}
                href={link.href}
                className="w-full cursor-pointer border-b border-solid border-gray-300 
                        pb-1.5 text-lg  font-semibold lg:hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="mt-10 flex flex-1 justify-center gap-3">
            <Button
              href="/contact"
              className="rounded-md border-2 p-3 tracking-tight hover:bg-buttonHover md:text-sm"
              type="button"
              title="START A PROJECT"
              variant=""
            />
            <Button
              className="rounded-md border-2 p-3 tracking-tight hover:bg-buttonHover md:text-sm"
              type="button"
              title="Cancel"
              variant=""
              onClick={handleMenuClick}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
