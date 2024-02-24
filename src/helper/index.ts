const CASESTUDIES: CaseStudyProps[] = [
  {
    handle: 'spiff-commerce',
    title: 'Spiff Commerce',
    description:
      'A platform that helps brands create customized experiences for customers. Powerful product customization software that makes tailoring retail experiences easy.',
    websiteUrl: 'https://spiff3d.com/',
    videoSrc: '/giphy.mp4',
    topicTitle: 'Responsibilities',
    introContent:
      "At Spiff Commerce, we undertook diverse responsibilities that significantly contributed to the company's success in delivering top-notch e-commerce solutions. We have:",
    endContent:
      'At the conclusion of our tenure at Spiff Commerce, we take pride in the diverse contributions made toward enhancing e-commerce solutions.',
    topics: [
      {
        description:
          "Led integrations with leading e-commerce platforms like Shopify, Bigcommerce, and Neto, enhancing clients' online presence and streamlining their sales processes",
      },
      {
        description:
          'Leveraged our expertise in AWS services including DynamoDB, CloudWatch, CloudFront, and S3',
      },
      {
        description:
          'Developed frontend UI/UX development projects utilizing cutting-edge technologies such as React.js and Typescript, ensuring seamless and intuitive user experiences',
      },
      {
        description:
          'Contributed to enhancing the UI/UX of print server applications using C# .NET, bringing a fresh and modern look to legacy systems',
      },
      {
        description:
          'Facilitated smooth communication between frontend and backend systems, enabling efficient data exchange and functionality across the board',
      },
    ],
  },
  {
    handle: 'elishagram',
    title: 'Elishagram',
    description:
      'A social media platform that mirrors the functionalities of the popular Instagram application. Seamlessly blending user-friendly design with robust features.',
    websiteUrl: '/#work',
    videoSrc: '/giphy.mp4',
    topicTitle: 'Features',
    introContent:
      "Elishagram was our way of boosting our web development skills and creating something that feels familiar. We wanted to build a platform that's personal and enjoyable for everyone. Now, let's dive into the key features:",
    endContent: `For those interested in exploring the project further, it's available for testing locally via our GitHub repository at`,
    repoUrl: 'https://github.com/ElishaStaks/Elishagram-Clone',
    topics: [
      {
        description:
          'Tailored to your preferences based on the users you follow, ensuring a personalized browsing experience',
      },
      {
        description:
          'Seamlessly upload and share photos with your followers, enriching your feed with captivating visuals',
      },
      {
        description:
          'Enjoy full control over your posts with the ability to delete them as needed',
      },
      {
        description:
          'Like and comment on posts to interact with your community and express your appreciation',
      },
      {
        description:
          'Dive into your profile to view your follower count, following count, and access your posts',
      },
      {
        description:
          'Follow or unfollow other users to curate your social network and stay connected',
      },
      {
        description:
          'Customize your profile by editing your name, username, bio, email, and avatar',
      },
      {
        description:
          'Discover new connections through personalized user suggestions tailored to your interests',
      },
      {
        description:
          'Securely sign up and sign in to your Elishagram account, ensuring a safe and personalized experience',
      },
    ],
  },
];

interface CaseStudyTopicsProps {
  description: string;
}

interface CaseStudyProps {
  handle: string;
  title: string;
  description: string;
  websiteUrl: string;
  videoSrc: string;
  topicTitle: string;
  introContent: string;
  endContent: string;
  repoUrl?: string;
  topics: CaseStudyTopicsProps[];
}

export const getCaseStudyByHandle = (
  handle: string,
): CaseStudyProps | undefined => {
  return CASESTUDIES.find((study) => study.handle === handle);
};
