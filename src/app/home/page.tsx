import CallToAction from '@/components/CallToAction';
import HomeHero from '@/components/HomeHero';
import Services from '@/components/Services';
import Work from '@/components/Work';

export async function generateMetadata() {
  return {
    title: 'Stakis | Home',
    description: 'Stakis landing page',
  };
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <Work />
      {/* <Testimonials /> */}
      <Services />
      <CallToAction />
    </>
  );
}
