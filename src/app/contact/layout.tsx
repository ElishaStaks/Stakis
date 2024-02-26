import { BaseTemplate } from '@/templates/BaseTemplate';

export async function generateMetadata() {
  return {
    title: `Stakis | Contact`,
    description:
      "Let's Connect and Bring Your Vision to Life. Reach out to Stakis for expert web development services that elevate your online presence. Whether you're launching a new project or need enhancements to your existing website, our team is here to help. Contact us today to discuss your goals and start your journey towards success!",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseTemplate>{children}</BaseTemplate>;
}
