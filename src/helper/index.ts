const CASESTUDIES: CaseStudyProps[] = [
  {
    handle: 'spiff-commerce',
    title: 'Spiff Commerce',
    url: 'https://spiff3d.com/',
    category: 'Web Application',
    projectImages: [
      {
        title: 'Spiff Commerce Workflow System',
        img: '/no-image-available.webp',
      },
      {
        title: 'Spiff Commerce Workflow System',
        img: '/no-image-available.webp',
      },
      {
        title: 'Spiff Commerce Workflow System',
        img: '/no-image-available.webp',
      },
    ],
    projectInfo: {
      clientHeading: 'About Client',
      companyInfo: [
        {
          title: 'Website',
          details: 'https://spiff3d.com/',
        },
      ],
      objectivesHeading: 'Objective',
      objectivesDetails:
        'Spiff is a platform that helps brands create customized experiences for customers. Spiff enable you to do this easily, at any scale, cost-effectively, without you having to code a thing.',
      technologies: {
        title: 'Tools & Technologies',
        techs: [
          'HTML',
          'CSS',
          'JavaScript',
          'Typescript',
          'React',
          'Kotlin',
          'SQL',
        ],
      },
      projectDetailsHeading: 'Responsibilities',
      projectDetails: [
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
  },
  {
    handle: 'elisha-gram',
    title: 'Elishagram',
    url: '',
    category: 'Web Application',
    projectImages: [
      {
        title: 'Elishagram Design System',
        img: '/no-image-available.webp',
      },
      {
        title: 'Elishagram Design System',
        img: '/no-image-available.webp',
      },
      {
        title: 'Elishagram Design System',
        img: '/no-image-available.webp',
      },
    ],
    projectInfo: {
      clientHeading: 'Personal Project',
      companyInfo: [
        {
          title: 'Github',
          details: 'https://github.com/ElishaStaks/Elishagram-Clone',
        },
      ],
      objectivesHeading: 'Objective',
      objectivesDetails:
        'A social media platform that mirrors the functionalities of the popular Instagram application. Seamlessly blending user-friendly design with robust features. This project was intended to boost experience and skills in web development.',
      technologies: {
        title: 'Tools & Technologies',
        techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      },
      projectDetailsHeading: 'Features',
      projectDetails: [
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
  },
];

interface ProjectImagesProps {
  title: string;
  img: string;
}

interface ProjectImagesProps {
  title: string;
  img: string;
}

interface CompanyInfoProps {
  title: string;
  details: string;
}

interface TechnologiesProps {
  title: string;
  techs: string[];
}

interface ProjectDetails {
  description: string;
}

interface ProjectInfoProps {
  clientHeading: string;
  companyInfo: CompanyInfoProps[];
  objectivesHeading: string;
  objectivesDetails: string;
  technologies: TechnologiesProps;
  projectDetailsHeading: string;
  projectDetails: ProjectDetails[];
}

interface CaseStudyProps {
  handle: string;
  title: string;
  url: string;
  category: string;
  projectImages: ProjectImagesProps[];
  projectInfo: ProjectInfoProps;
}

export const getCaseStudyByHandle = (
  handle: string,
): CaseStudyProps | undefined => {
  return CASESTUDIES.find((study) => study.handle === handle);
};
