import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skill",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Technical Support Officer",
    icon: web,
  },
  {
    title: "Computer Technician",
    icon: mobile,
  },
  {
    title: "Network Technician",
    icon: backend,
  },
  {
    title: "Service Desk Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Support Officer",
    company_name: "WYSCOM",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
      "Providing technical assistance and support to customers experiencing issues with products or services via phone, email, or chat.",
      " Identifying and diagnosing technical problems, investigating root causes, and offering solutions or workarounds to resolve issues efficiently.",
      "Using remote access tools to troubleshoot and resolve technical issues on customers' devices, ensuring minimal disruption to their workflow.",
      " Documenting technical issues, solutions, and troubleshooting procedures for future reference and knowledge sharing within the team.",
    ],
  },
  {
    title: "Customer Service Representative",
    company_name: "Scentre Group",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2023 - November 2023",
    points: [
      "Providing friendly and efficient assistance to shoppers, answering questions, providing directions, and offering recommendations.",
      "Acting as a liaison between customers and mall management/security, relaying announcements or safety information as needed.",
      "Providing valet parking services to customers by safely parking and retrieving their vehicles upon request.",
      "Collecting parking fees, issuing tickets, and processing payments accurately and efficiently.",
    ],
  },
  {
    title: "IT Helpdesk Support",
    company_name: "Agate IT",
    icon: shopify,
    iconBg: "#383E56",
    date: "October 2022 - July 2023",
    points: [
      " Providing technical as well as customer support to team members and external clients via phone, email, and remote connection, as well as ticketing system.",
      "Troubleshooting Windows 10 issues including admin password recovery, system recovery, software issue, applications, licensing, BSOD, windows backup and restore, recovery, update, and upgrade",
      "Troubleshooting Windows 10 issues including admin password recovery, system recovery, software issue, applications, licensing, BSOD, windows backup and restore, recovery, update, and upgrade.",
    ],
  },
  {
    title: "Customer Service Representative",
    company_name: "Cronulla fruitland",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "February 2020 - January 2023",
    points: [
      "Handled customer inquiries and suggestions courteously and professionally.",
      "Actively listened to customers, handled concerns quickly, and escalated major issues to the supervisor.",
      "Answered a constant flow of customer calls with minimal wait times.",
      "Demonstrated strong problem-solving skills by making discretionary decisions on product/service resolutions, refunds, replacements, or price adjustments.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };