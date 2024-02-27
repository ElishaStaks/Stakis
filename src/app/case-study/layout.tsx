/* eslint-disable no-console */
import type { Metadata } from 'next';

import { BaseTemplate } from '@/templates/BaseTemplate';

export const generateMetadata = (): Metadata => {
  return {
    title: `Stakis | Case Study`,
    description:
      'In depth case studies on projects completed for previous clients.',
  };
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseTemplate>{children}</BaseTemplate>;
}
