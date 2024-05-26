import {
  mobile,
  backend,
  creator,
  web,
  meta,
  wyscom,
  agate,
  westfield,
  Azure,
  CLI,
  Duo,
  GSuite,
  Linux_OS,
  M365,
  MacOS,
  Meraki,
  TeamViewer,
  ThreeCX,
  Unifi,
  VMWare,
  Windows_OS
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
    id: "experience",
    title: "Experience",
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
    name: "Microsoft Azure",
    icon: Azure,
  },
  {
    name: "Command Line",
    icon: CLI,
  },
  {
    name: "Cisco DUO",
    icon: Duo,
  },
  {
    name: "Google suite",
    icon: GSuite,
  },
  {
    name: "Linux OS",
    icon: Linux_OS,
  },
  {
    name: "Microsoft 365",
    icon: M365,
  },
  {
    name: "Macintosh OS",
    icon: MacOS,
  },
  {
    name: "Cisco Meraki",
    icon: Meraki,
  },
  {
    name: "TeamViewer",
    icon: TeamViewer,
  },
  {
    name: "3CX Phone System",
    icon: ThreeCX,
  },
  {
    name: "Ubiquiti Products",
    icon: Unifi,
  },
  {
    name: "VMWare Products",
    icon: VMWare,
  },
  {
    name: "Windows OS",
    icon: Windows_OS,
  },
];

const experiences = [
  {
    title: "Technical Support Officer",
    company_name: "WYSCOM",
    icon: wyscom,
    iconBg: "#E6DEDD",
    date: "November 2023 - Present",
    points: [
      "Providing technical assistance and support to customers experiencing issues with products or services via phone, email, or chat.",
      "Identifying and diagnosing technical problems, investigating root causes, and offering solutions or workarounds to resolve issues efficiently.",
      "Using remote access tools to troubleshoot and resolve technical issues on customers' devices, ensuring minimal disruption to their workflow.",
      "Documenting technical issues, solutions, and troubleshooting procedures for future reference and knowledge sharing within the team.",
    ],
  },
  {
    title: "Customer Service Representative",
    company_name: "Scentre Group",
    icon: westfield,
    iconBg: "#E6DEDD",
    date: "August 2023 - November 2023",
    points: [
      "Providing friendly and efficient assistance to shoppers, answering questions, providing directions, and offering recommendations.",
      "Acting as a liaison between customers and mall management/security, relaying announcements or safety information as needed.",
      "Providing valet parking services to customers by safely parking and retrieving their vehicles upon request.",
      "Collecting parking fees, issuing tickets, and processing payments accurately and efficiently.",
      "Utilized strong communication skills to greet and assist customers, answer inquiries about stores, promotions, and services, and provide clear directions within the shopping center.",
      "Worked collaboratively with a diverse team of concierge and valet parking professionals, ensuring smooth operations and excellent service delivery.",
    ],
  },
  {
    title: "IT Technician",
    company_name: "Agate IT",
    icon: agate,
    iconBg: "#E6DEDD",
    date: "October 2022 - July 2023",
    points: [
      "Configured switches and routers through Web GUI and  terminal, following documentation. Installed them in server racks, connected and initialized equipment.",
      "Created new instance of Unifi Cloud Controller in an Ubuntu server and adding/setting up new Access Points in the controller. ",
      "Changed NIC cards on servers to increase the fast data transfer and updating firmwares and software updates of iDrac and ILO.",
      "Completed project of connecting two distinct LANs using OPNSense and ZeroTier software.",
      "Worked with various router and switch peripherals such as Juniper SSG140, SSG550, TPLink, HP, HPE, Dell.",
      "Installing VMWare ESXI 6.0, 6.5 and 6.7 on the servers and creating Virtual Machine instances.",
      "Hot Swapping faulty module of HP Switch and successfully installing &  configuring ports/Vlans.",
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
export { services, technologies, experiences};