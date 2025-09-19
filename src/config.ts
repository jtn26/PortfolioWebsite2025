export const siteConfig = {
  name: "Justin Kang",
  title: "CS Major at Georgia Tech",
  description: "Portfolio website of Justin Kang",
  accentColor: "#1d4ed8",
  resumelink: "https://drive.google.com/file/d/1tISV-HkY2AmcK7B98ijDwFUGjYm1Kyyn/view?usp=sharing",
  social: {
    email: "kangjustin392@gmail.com",
    linkedin: "https://linkedin.com/in/kangjustin",
    github: "https://github.com/jtn26",
  },
  aboutMe:
    "My name is Justin Kang, a graduating CS major at Georgia Tech. I started with an interest in AI, but through many experiences including internships, courses, and projects, I have also gained an interest in networks and backend development. I have worked a lot in cloud development, namely AWS, and have experience using frontend and backend technologies. I am also interested in lower level concepts and am currently taking courses on operating systems and system architecture.",
  skills: ["AWS", "Python", "C/C++", "TypeScript/JavaScript", "Java/Kotlin", "Keras Tensorflow"],
  projects: [
    {
      name: "Data Defenders",
      description:
        "Chrome Extension to Track Personal Email Selling\n - Built on Redis and Go backend, React frontend",
      link: "https://github.com/jtn26/DataDefenders",
      skills: ["React", "Go", "Redis", "Gin"],
    },
    {
      name: "NFT Copy Preventer",
      description:
        "Set of Notebooks along with a ML Model that Determines Which Company an NFT Has Been Copied From",
      link: "https://github.com/jtn26/NFT_CopyPreventer",
      skills: ["Tensorflow/Keras", "Puppeteer"],
    },
  ],
  experience: [
    {
      company: "Amazon Web Services",
      title: "Software Development Engineer Intern",
      dateRange: "May 2025 - August 2025",
      bullets: [
        "Developed an end-to-end backend that automatically handles onboarding workflows for a widely used internal AWS tool.",
        "Created a CRUD API system and utilized AWS ECS Fargate, DynamoDB, S3, and other internal services to automatically cut and resolve tickets, reducing engineer workload by 12.5 hours per week.",
        "Designed with scalability and maintainability in mind, utilizing SOLID software design principles for the business layer codebase and creating a modular backend that can be extended for future use cases.",
        "Will replace the current backend used by the team and integrate with the existing frontend to handle onboarding services."
      ],
    },
    {
      company: "Broadcom Inc.",
      title: "Software Engineer Intern",
      dateRange: "August 2024 - October 2024",
      bullets: [
        "Developed an automated file verification system on Linux using Python scripts and shell commands to test various hardware-related files including Verilog, Oasis, etc.",
        "Enhanced manual comparison tasks by abstracting them into simple command line tools that others could utilize.",
      ],
    },
    {
      company: "Amazon Web Services",
      title: "Software Development Engineer Intern",
      dateRange: "May 2024 - August 2024",
      bullets: [
        "Improved the customer experience for the AWS Well-Architected Tool by developing a user-customizable dashboard implementation on AWS Console using AWS Cloud Development Kit (CDK), AWS QuickSight REST APIs, and React.",
        "Designed several scalable solutions, including a design that utilized Step Functions to enable parallel processing.",
        "Utilized Amazon Q to allow data-specific Q&A on AWS console with a Generative AI model.",
        "Created documentation listing potential errors and their respective solutions during onboarding setup for the team.",
      ],
    },
    {
      company: "Principal Financial Group",
      title: "Software Engineer Intern",
      dateRange: "June 2023 - August 2023",
      bullets: [
        "Significantly improved Principal’s ability to react to market events by developing an automated pipeline to fetch up-to-date currency exchange rate data and update internal Salesforce databases using an AWS CDK implementation.",
        "Saved Principal’s marketing team hundreds of hours yearly by using AWS CDK to automate the process that manages more than 10,000 user subscriptions to Principal’s email marketing.",
        "Developed a cloud programming environment that allows developers to share formatted code using AWS Software Development Kit and React as part of Principal’s Intern Code Jam.",
      ],
    },
    {
      company: "Automated Algorithm Design at Georgia Tech",
      title: "Undergraduate Researcher",
      dateRange: "January 2022 - May 2023",
      bullets: [
        "Significantly improved Principal’s ability to react to market events by developing an automated pipeline to fetch up-to-date currency exchange rate data and update internal Salesforce databases using an AWS CDK implementation.",
        "Saved Principal’s marketing team hundreds of hours yearly by using AWS CDK to automate the process that manages more than 10,000 user subscriptions to Principal’s email marketing.",
        "Developed a cloud programming environment that allows developers to share formatted code using AWS Software Development Kit and React as part of Principal’s Intern Code Jam.",
      ],
    },
    {
      company: "Axiado Corporation",
      title: "Software Engineer Intern",
      dateRange: "June 2022 - August 2022",
      bullets: [
        "Researched genetic programming and its applications on medical diagnosis with Dr. Jason Zutty and other GT students.",
        "Presented research at the Shriners State of Research Summit, a medical technology conference attended by field experts across all of Shriners Hospitals for Children.",
        "Detected scoliosis and other diseases by developing genetic algorithms that automatically create AI architectures suited for detecting the specific diseases using the EMADE genetic programming workflow, Tensorflow, and MySQL.",
        "Implemented transfer learning in EMADE using Tensorflow module with DenseNet121, VGG16, and MobileNet.",
      ],
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2021 - 2025",
      achievements: [
        "3.94/4.00 GPA",
      ],
    },
    {
      school: "Coursera",
      degree: "Neural Networks and Deep Learning",
      dateRange: "2019",
      achievements: [
        "Learned about neural networks and the mathematics behind basic-level deep learning."
      ],
    },
  ],
};
