import { BaseTemplate } from '@/templates/BaseTemplate';

export async function generateMetadata() {
  return {
    title: `Stakis | Case Study`,
    description: '',
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseTemplate>{children}</BaseTemplate>;
}
