import {
  mobile,
  backend,
  creator,
  web,
  // autodesk,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  // puppeteer,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  oboard,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
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
  // {
  //   name: "puppeteer",
  //   icon: puppeteer,
  // },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "autodesk",
  //   icon: "autodesk",
  // }
];

const experiences = [
  {
    title: "Software developer Intern",
    company_name: "Suven Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - May 2022",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Worked on platform using JavaScript function.",
      "Contributed Optimised codes for Cross Browsing Platform.",
      "Maintained client side Framework with the help of libraries",
      "Worked with Javascript forlarge scaling problems and ES6 compablity",
      "Worked on React.js library forfrontend part and used React tools like Redux, Webpack, Next.js.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "VIEH Group",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Developed and maintained web pages for clients. Collaborated with the design and backend teams to ensure seamless integration of website elements, as well as ensuring the design and functionality of the websites met the clients' expectations.",
      "My daily tasks included using HTML, CSS, and JavaScript to create and modify website layouts and user interfaces, optimizing websites for maximum speed and scalability, and ensuring cross-browser and cross-platform compatibility.",
      "Contributed to the development of responsive websites that were optimized for mobile devices.",
      "I worked closely with the design team to ensure that the websites I developed accurately reflected the clients' branding and messaging.",
    ],
  },
  {
    title: "Intern",
    company_name: "Anand Techno Creation",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sept 2020 - Oct 2020",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Collaborated with the design and engineering teams to ensure the dispenser was user-friendly, reliable, and met the clients' expectations.",
      "Responsible for conducting research and testing of various components of the dispenser, such as the motion sensor and the pump mechanism. I also helped with the design of the user interface, ensuring that it was easy to understand and use.",
      "I also assisted with the assembly and installation of the dispensers, ensuring that they were properly functioning and met the clients' requirements.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   // icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Onkar was an outstanding web developer intern who showed impressive technical skills and a willingness to learn. They were a valuable asset to our team, and I highly recommend them to any future employer.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Suven Technologies",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "It was a pleasure working with Onkar, our web developer intern. They showed great initiative and demonstrated strong problem-solving abilities. I have no doubt they will continue to excel in their future endeavors.",
    name: "Chris Brown",
    designation: "COO",
    company: "VIEH group",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "We were impressed with Onkar's technical skills and ability to work well in a team. They were a quick learner and always willing to help out. It was a pleasure working with them and we wish them all the best in their future career.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "meta",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crypto Yard",
    description:
      "Crypto Yard is a responsive web application that provides cryptocurrency-related information, focusing on crypto exchanges and crypto coins.Which contains more than a hundred crypto exchanges  and selecting coins will provide information about crypto coins. Utilized libraries include Chakra UI, framer-motion, and React-chartjs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    live_demo : "https://react-crypto-app-tan.vercel.app/",
    source_code_link: "https://github.com/onkar-kulkarni0/CryptoApp",
  },
  {
    name: "Flash Type",
    description:
      "A platform fortesting yourtyping speed. In about 1 minute, you can test yourtyping speed. You will also be notified if you type the incorrect words. React life cycle method, react timer, react state, react props, and othertechnologies are used. It is the best place to increase your typing speed and accuracy.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    // source_code_link: "https://github.com/",
    live_demo: "https://onkar-kulkarni0.github.io/FlashType_/",
    source_code_link: "https://github.com/onkar-kulkarni0/FlashType_",
  },
  {
    name: "Hackerrank Automation",
    description:
      "The Hackerrank Automation tool is useful for adding moderators to hackerrank contests. The true goal of this project is to learn Web Automation. The programming language used is JavaScript. Concepts like async-await, waitforselector, timer, loops, etc are used.This was achieved with help of Puppeteer technology(tool).",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Puppeteer",
        color: "green-text-gradient",
      },
    
    ],
    image: tripguide,
    live_demo : "https://github.com/onkar-kulkarni0/Modified-Hackerrank-Automation",
    source_code_link: "https://github.com/onkar-kulkarni0/Modified-Hackerrank-Automation",
  },
  {
    name: "Open Board",
    description:
      "Smart board is a personal open board which is made using Canvas. In which Realtime pencil, erase, image upload sticky notes, etc functions are implemented. For real-time mouse-up and mouse-down functions Javascript is used. Technologies like tools.io, socket.io is used for user interface.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: oboard,
    live_demo : "",
    source_code_link: "https://github.com/onkar-kulkarni0/smartboard",
  },
];

export { services, technologies, experiences, testimonials, projects };











