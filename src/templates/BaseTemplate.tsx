'use client';

import { type ReactNode } from 'react';
import { Toaster } from 'sonner';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import UseScrollToTop from '@/components/useScrollToTop';

type IBaseTemplateProps = {
  children: ReactNode;
};

const BaseTemplate = (props: IBaseTemplateProps) => {
  return (
    <>
      <NavBar />
      <Toaster expand position="top-right" richColors />
      <main className="relative">{props.children}</main>
      <UseScrollToTop />
      <Footer />
    </>
  );
};

export { BaseTemplate };
