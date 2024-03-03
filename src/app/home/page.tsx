import CallToAction from '@/components/CallToAction';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';

export async function generateMetadata() {
  return {
    title: 'Stakis | Home',
    description:
      'Elevate Your Online Presence with Expert Web Development Services. Discover how Stakis can bring your vision to life with custom web solutions tailored to your business needs. From stunning designs to seamless functionality, trust Stakis to build websites that captivate, engage, and convert. Get started today!',
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <CallToAction />
    </>
  );
}
