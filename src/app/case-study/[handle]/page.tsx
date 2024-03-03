/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-redeclare */

'use client';

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

import CallToAction from '@/components/CallToAction';
import { getCaseStudyByHandle } from '@/helper';

const CaseStudy = () => {
  const { handle } = useParams();
  // Fetch data based on the slug
  const caseStudy = getCaseStudyByHandle(handle as string);

  if (!caseStudy) {
    return <p>Case study not found</p>;
  }

  return (
    <>
      <section className="relative mx-auto">
        <div className="max-container padding-container pb-[4rem] pt-[2rem] md:pt-[3.5rem]">
          <p className="text-4xl font-medium leading-tight sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
            {caseStudy.title}
          </p>

          {/* Gallery */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 sm:gap-10">
            {caseStudy.projectImages.map((project) => {
              return (
                <div className="mb-10 sm:mb-0" key={project.title}>
                  <Image
                    src={project.img}
                    className="cursor-pointer rounded-md border-2 border-white shadow-lg sm:shadow-none"
                    alt={project.title}
                    layout="responsive"
                    width={100}
                    height={90}
                    loading="eager"
                    sizes="(min-width: 1680px) 407px, (min-width: 1380px) 353px, (min-width: 1040px) 26.88vw, (min-width: 640px) calc(33.16vw - 41px), calc(100vw - 48px)"
                  />
                </div>
              );
            })}
          </div>

          {/* Info */}
          <div className="mt-14 block gap-0 sm:flex sm:gap-10">
            <div className="w-full text-left sm:w-1/3">
              <div className="mb-7">
                <p className="mb-2 text-2xl font-semibold text-text">
                  {caseStudy.projectInfo.clientHeading}
                </p>
                <ul className="leading-loose">
                  {caseStudy.projectInfo.companyInfo.map((info) => {
                    return (
                      <li key={info.title}>
                        <span className="text-white">{info.title}: </span>
                        <Link
                          href={`${info.details}`}
                          className={
                            info.title === 'Website' || info.title === 'Phone'
                              ? 'cursor-pointer duration-300 hover:text-indigo-500 hover:underline dark:hover:text-indigo-400'
                              : ''
                          }
                          aria-label="Project Website and Phone"
                        >
                          {caseStudy.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Single project objectives */}
              <div className="mb-7">
                <p className="mb-2 text-2xl font-semibold text-text">
                  {caseStudy.projectInfo.objectivesHeading}
                </p>
                <p>{caseStudy.projectInfo.objectivesDetails}</p>
              </div>

              {/* Single project technologies */}
              <div className="mb-7">
                <p className="mb-2 text-2xl font-semibold text-text">
                  {caseStudy.projectInfo.technologies.title}
                </p>
                <p>{caseStudy.projectInfo.technologies.techs.join(', ')}</p>
              </div>
            </div>

            {/*  Single project right section details */}
            <div className="mt-10 w-full text-left sm:mt-0 sm:w-2/3">
              <p className="mb-7 text-2xl font-bold text-text">
                {caseStudy.projectInfo.projectDetailsHeading}
              </p>

              {caseStudy.projectInfo.projectDetails.map((details) => {
                return (
                  <ul
                    key={details.description}
                    className="list-disc pl-[1rem] marker:text-text"
                  >
                    <li
                      key={details.description}
                      className="mb-5 text-lg text-white"
                    >
                      {details.description}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default CaseStudy;
