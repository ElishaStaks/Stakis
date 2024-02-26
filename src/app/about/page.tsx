import React from 'react';

import AboutHero from '@/components/AboutHero';
import CallToAction from '@/components/CallToAction';
import Team from '@/components/Team';

export async function generateMetadata() {
  return {
    title: 'Stakis | About',
    description:
      'Empowering Your Online Presence with Passion and Expertise. Learn more about Stakis and our mission to deliver exceptional web development solutions that drive results. Discover our team of dedicated professionals, our commitment to innovation, and our passion for helping businesses succeed online. Explore Stakis today and partner with us to achieve your digital goals!',
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
