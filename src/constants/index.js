import { mobile, backend, creator, school } from "../assets";

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

export { services, projects };
