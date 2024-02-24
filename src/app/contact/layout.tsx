import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseTemplate>{children}</BaseTemplate>;
}
