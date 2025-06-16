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
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "React Specialist",
    icon: mobile,
  },
  {
    title: "Python Backend Developer",
    icon: backend,
  },
  {
    title: "Generative AI Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: nodejs,
  },
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
    name: "LangChain",
    icon: threejs,
  },
  { 
    name: "git", 
    icon: git, 
  },
  { 
    name: "docker", 
    icon: docker, 
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Belcorp (COP2)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2024 - 2025",
    points: [
      "Architected recommendation models with Factory and Strategy patterns",
      "Improved data processing performance by 75%",
      "Implemented centralized configuration and logging",
    ],
  },
  {
    title: "Gen AI Platform Developer",
    company_name: "Gen AI Enzyme",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Built ReactJS frontend for natural language querying",
      "Integrated Flask-LangChain backend on GCP",
      "Implemented conversation detection using OpenAI",
    ],
  },
  {
    title: "GenAI Recommendation System",
    company_name: "Belcorp (VC2.0)",
    icon: shopify,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Developed WhatsApp product recommendation engine",
      "Added intent classification guardrails and RAG pipeline",
      "Orchestrated event-driven backend on AWS",
    ],
  },
];

const testimonials = [
//   {
//     testimonial:
//       "Hitanshu was an outstanding web developer intern who showed impressive technical skills and a willingness to learn. They were a valuable asset to our team, and I highly recommend them to any future employer.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Suven Technologies",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "It was a pleasure working with Hitanshu, our web developer intern. They showed great initiative and demonstrated strong problem-solving abilities. I have no doubt they will continue to excel in their future endeavors.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "VIEH group",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "We were impressed with Hitanshu's technical skills and ability to work well in a team. They were a quick learner and always willing to help out. It was a pleasure working with them and we wish them all the best in their future career.",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "meta",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
];

const projects = [
  {
    name: "COP2 - Belcorp",
    description:
      "Production-ready recommendation models and bundling logic built with Factory and Strategy patterns. Achieved a 75% runtime improvement and introduced centralized configuration and logging.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "gcp",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    live_demo: "",
    source_code_link: "",
  },
  {
    name: "Gen AI Enzyme",
    description:
      "Gen AI platform with responsive React frontend and Flask–LangChain backend deployed on GCP. Enables natural language queries and contextual conversations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    live_demo: "",
    source_code_link: "",
  },
  {
    name: "VC2.0 - Belcorp",
    description:
      "WhatsApp-based GenAI recommendation system with event-driven backend on AWS. Includes intent classification guardrails, re-ranking and RAG pipeline.",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "rag",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    live_demo: "",
    source_code_link: "",
  },
];

export { services, technologies, experiences, projects };











