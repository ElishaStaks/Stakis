/* eslint-disable @typescript-eslint/no-redeclare */
import Image from 'next/image';
import React from 'react';

export const TEAM = [
  {
    name: 'Elisha Anagnostakis',
    image: '/elisha-profile.webp',
    role: 'Founder & Software Lead',
  },
];

type Person = {
  name: string;
  image: string;
  role: string;
};

const Person = ({ name, image, role }: Person) => {
  return (
    <div className="flex w-full flex-col md:w-[68%] lg:w-[58%]">
      <div className="relative mb-[1.5rem] w-full overflow-hidden pb-[77%]">
        <Image
          src={image}
          alt="Team member portrait"
          width={1000}
          height={1000}
          className="absolute inset-0 size-full rounded-md object-cover"
          loading="eager"
        />
      </div>
      <div className="text-left">
        <h3 className="text-3xl font-medium leading-tight">{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="relative">
      <div className="max-container padding-container py-[4rem] md:py-[5rem]">
        <div className="w-full max-w-[86rem]">
          <div className="mx-auto flex flex-col items-center justify-center text-center">
            <div className="max-w-[38rem]">
              <h2 className="text-4xl font-medium leading-tight sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                Our Team
              </h2>
            </div>
            <div className="relative mt-[3rem] flex w-full flex-col flex-wrap justify-center gap-y-16 md:mt-[5rem] md:flex-row">
              {TEAM.map((person) => (
                <Person
                  key={person.name}
                  name={person.name}
                  image={person.image}
                  role={person.role}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
