import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
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
  biomed,
  evo,
  eco,
  rob,
  school,
} from "../assets";

import cosmologyLottie from "../assets/cosmologyLottie.json";
import ecologyLottie from "../assets/ecologyLottie.json";
import bioLottie from "../assets/bioLottie.json";
import roboLottie from "../assets/roboLottie.json";
import evoLottie from "../assets/evoLottie.json";

export const navLinks = [
  {
    id: "exhibitsSection",
    title: "Exhibits",
  },
  {
    id: "about",
    title: "Tickets",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "School trips: FREE ",
    icon: school,
    price: "200",
  },
  {
    title: "18 or older: 70kr",
    icon: mobile,
  },
  {
    title: "Students or under 18: 50kr",
    icon: backend,
  },
  {
    title: "Guided Tours: 100kr",
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Evolution",
    description:
      "For centuries, philosophers and scientists have wrestled with the question of our origins. Where do we come from and how did we get here? Since Darwin proposed his theory of evolution we have had a framework for exploring and understanding our place in this world. Come se our evolution exhibition.",
    tags: [
      {
        name: "Adaptation",
        color: "blue-text-gradient",
      },
      {
        name: "Species Diversity",
        color: "green-text-gradient",
      },
      {
        name: "Evolutionary Theories",
        color: "pink-text-gradient",
      },
    ],
    animation: evoLottie,
  },
  {
    name: "Biology & Medicine",
    description:
      "Major breakthroughs in biology are offering us unique insights into the great wonders of the tiny world. For many people their life expectancy is much longer and their quality of life much improved, thanks to the growth of our understanding of medicine.",
    tags: [
      {
        name: "21th Century",
        color: "blue-text-gradient",
      },
      {
        name: "Genetics",
        color: "green-text-gradient",
      },
      {
        name: "Biochemistry",
        color: "pink-text-gradient",
      },
    ],
    animation: bioLottie,
  },
  {
    name: "Cosmology",
    description:
      "Our fantastic exhibition, ‘The Sky Above Us’, explores the night sky and what we can see and know about the universe around us. We’ll locate the various constellations and galaxies that can be seen and learn a bit about the early navigators who used the stars to travel by.",
    tags: [
      {
        name: "Astronomy",
        color: "blue-text-gradient",
      },
      {
        name: "Solar system",
        color: "green-text-gradient",
      },
      {
        name: "Cosmic Structures",
        color: "pink-text-gradient",
      },
    ],
    animation: cosmologyLottie,
  },

  {
    name: "Ecology",
    description:
      "As we learn more and more of the impact humans are having on the planet, the more important it becomes that scientists explore how to create a sustainable future not just for humans but for the whole planet. Learn more about it and how we can help at our Ecology exhibit",
    tags: [
      {
        name: "21th Century",
        color: "blue-text-gradient",
      },
      {
        name: "Genetics",
        color: "green-text-gradient",
      },
      {
        name: "Biochemistry",
        color: "pink-text-gradient",
      },
    ],
    animation: ecologyLottie,
  },

  {
    name: "Robotics & AI",
    description:
      "Robotics and artificial intelligence are two very different disciplines. While you can have robots with artificial intelligence, it’s equally possible for robotics to flourish without AI. From useful home applications of AI to industrial uses of robotics, the future is here. Learn more at our Robotics & ai section.",
    tags: [
      {
        name: "21th Century",
        color: "blue-text-gradient",
      },
      {
        name: "Robotics Engineering",
        color: "green-text-gradient",
      },
      {
        name: "Artificial Intelligence",
        color: "pink-text-gradient",
      },
    ],
    animation: roboLottie,
  },
];

export { services, technologies, experiences, testimonials, projects };
