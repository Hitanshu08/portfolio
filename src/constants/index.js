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
    title: "iOS Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Mechanical Designer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "docker",
    icon: docker,
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
  }
  // {
  //   name: "puppeteer",
  //   icon: puppeteer,
  // },
];

const experiences = [
  {
    title: "Software developer Intern",
    company_name: "Mindstix Software Labs pvt. ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2023 - Current",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Learned basics of software developers like Git, API, Cloud concepts",
      "Working on FrappeHR application with help of frappe framework and python.",
      "Learned new language swift to create applications for iOS devices.",
      "Worked on app using SwiftUI framework.",
      "Creating new features in the frappe application using html, css, and javascript."
    ],
  },
  {
    title: "Mechanical Engineer Intern",
    company_name: "Adani Electricity, Dahanu Thermal Power Plant",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "I learned about coal handling, boiler operation, turbine operation, and power distribution in thermal power generation.",
      "I assisted experienced engineers and technicians with data collection, analysis, troubleshooting, and maintenance.",
      "I monitored safety, environmental, risk management, and sustainable power generation.",
      "I helped plan, execute, and monitor plant projects, learning project management methods and industry challenges."

    ],
  },
  // {
  //   title: "Intern",
  //   company_name: "Anand Techno Creation",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Sept 2020 - Oct 2020",
  //   points: [
  //     // "Developing and maintaining web applications using React.js and other related technologies.",
  //     // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     // "Implementing responsive design and ensuring cross-browser compatibility.",
  //     // "Participating in code reviews and providing constructive feedback to other developers.",
  //     "Collaborated with the design and engineering teams to ensure the dispenser was user-friendly, reliable, and met the clients' expectations.",
  //     "Responsible for conducting research and testing of various components of the dispenser, such as the motion sensor and the pump mechanism. I also helped with the design of the user interface, ensuring that it was easy to understand and use.",
  //     "I also assisted with the assembly and installation of the dispensers, ensuring that they were properly functioning and met the clients' requirements.",
  //   ],
  // },
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
  // {
  //   testimonial:
  //     "Onkar was an outstanding web developer intern who showed impressive technical skills and a willingness to learn. They were a valuable asset to our team, and I highly recommend them to any future employer.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Suven Technologies",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "It was a pleasure working with Onkar, our web developer intern. They showed great initiative and demonstrated strong problem-solving abilities. I have no doubt they will continue to excel in their future endeavors.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "VIEH group",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "We were impressed with Onkar's technical skills and ability to work well in a team. They were a quick learner and always willing to help out. It was a pleasure working with them and we wish them all the best in their future career.",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "meta",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Weather App",
    description:
      "The SwiftUI-based weather app provides real-time weather updates and forecasts with a visually appealing interface, seamless navigation, and personalized features like multiple locations and push notifications. It delivers an immersive and user-friendly experience by leveraging SwiftUI's flexibility and Core Location integration.",
    tags: [
      {
        name: "swiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    // live_demo : "https://react-crypto-app-tan.vercel.app/",
    // source_code_link: "https://github.com/onkar-kulkarni0/CryptoApp",
  },
  {
    name: "Lower Limb Exoskeleton",
    description:
      "The cost-effective lower limb exoskeleton design aims to provide assistive mobility for individuals with lower limb impairments. It incorporates lightweight materials, efficient power systems, and adjustable components for a comfortable fit, enabling enhanced mobility and reducing the financial barriers associated with exoskeleton technology.",
    tags: [
      {
        name: "Catia v5",
        color: "blue-text-gradient",
      },
      {
        name: "Ansys",
        color: "green-text-gradient",
      },
      {
        name: "Autocad",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    // live_demo: "https://onkar-kulkarni0.github.io/FlashType_/",
    // source_code_link: "https://github.com/onkar-kulkarni0/FlashType_",
  },
  {
    name: "Convertible Cargo Bicycle",
    description:
      "The convertible cargo bicycle is a versatile solution for transportation and hauling. With a modular design and adjustable cargo capacity, it easily transforms from a standard bicycle to a cargo carrier, promoting sustainable urban mobility.",
    tags: [
      {
        name: "Fusion 360",
        color: "blue-text-gradient",
      },
      {
        name: "Ansys",
        color: "green-text-gradient",
      },
    
    ],
    image: tripguide,
    // live_demo : "https://github.com/onkar-kulkarni0/Modified-Hackerrank-Automation",
    // source_code_link: "https://github.com/onkar-kulkarni0/Modified-Hackerrank-Automation",
  },
  // {
  //   name: "Open Board",
  //   description:
  //     "Smart board is a personal open board which is made using Canvas. In which Realtime pencil, erase, image upload sticky notes, etc functions are implemented. For real-time mouse-up and mouse-down functions Javascript is used. Technologies like tools.io, socket.io is used for user interface.",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Javascript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: oboard,
  //   live_demo : "",
  //   source_code_link: "https://github.com/onkar-kulkarni0/smartboard",
  // },
];

export { services, technologies, experiences, testimonials, projects };











