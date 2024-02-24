import React from 'react';

import AboutHero from '@/components/AboutHero';
import CallToAction from '@/components/CallToAction';
import Team from '@/components/Team';

export async function generateMetadata() {
  return {
    title: 'Stakis | About',
    description: '',
  };
}

const About = () => {
  return (
    <>
      <AboutHero />
      <Team />
      <CallToAction />
    </>
  );
};

export default About;
