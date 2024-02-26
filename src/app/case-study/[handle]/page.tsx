/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-redeclare */

'use client';

/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

import Button from '@/components/Button';
import CallToAction from '@/components/CallToAction';
import { getCaseStudyByHandle } from '@/helper';

type TopicItem = {
  description: string;
};

const TopicItem = ({ description }: TopicItem) => {
  return (
    <li className="my-[0.375rem] w-full pl-[0.25rem] text-white">
      {description}
    </li>
  );
};

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
        <div className="max-container padding-container py-[2rem] md:pt-[3.5rem]">
          <div className="w-full max-w-[86rem]">
            <div className="relative flex flex-col justify-between md:gap-x-4">
              <div className="mb-[2rem]">
                <h1 className=" text-4xl font-medium leading-tight sm:text-5xl md:text-5xl lg:text-6xl">
                  {caseStudy.title}
                </h1>
              </div>
              <div className="relative mr-[8.1%] flex w-auto max-w-[33.125rem] flex-col items-start gap-y-6 md:w-[70%]">
                <p>{caseStudy.description}</p>
                <Button
                  href={caseStudy.websiteUrl}
                  className="rounded-md border-2 p-3 tracking-tight hover:bg-buttonHover md:text-sm"
                  type="button"
                  title={`${caseStudy.websiteUrl !== '' ? 'WEBSITE ->' : 'GITHUB ->'}`}
                  variant=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`relative mx-auto ${!caseStudy.videoSrc ? 'hidden' : ''}`}
      >
        <div className="max-container padding-container pb-[3rem]">
          <div className="w-full max-w-[86rem]">
            <div className="relative">
              <video
                id="autoplay-video"
                muted
                loop
                autoPlay
                playsInline
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source src={caseStudy.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mx-auto">
        <div className="max-container padding-container pb-[3.5rem] md:py-[4rem]">
          <div className="w-full max-w-[86rem]">
            <div className="relative flex flex-col gap-y-12">
              <div className="relative flex flex-col gap-y-10">
                <div className="grid grid-cols-1 justify-stretch gap-8">
                  <h2 className="text-4xl font-medium leading-tight sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                    {caseStudy.topicTitle}
                  </h2>
                  <p>{caseStudy.introContent}</p>
                  <div className="relative grid grid-cols-1 gap-x-16 gap-y-8 pl-[1rem]">
                    <ul className="list-disc overflow-hidden pl-[1rem] marker:text-text">
                      {caseStudy.topics.map((topic) => (
                        <TopicItem
                          key={topic.description}
                          description={topic.description}
                        />
                      ))}
                    </ul>
                  </div>
                  {caseStudy.repoUrl ? (
                    <p>
                      {`${caseStudy.endContent} `}
                      <Link
                        href={caseStudy.repoUrl}
                        target="_blank"
                        className="text-text"
                      >
                        Elishagram
                      </Link>
                      .
                    </p>
                  ) : (
                    <p>{caseStudy.endContent}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default CaseStudy;
