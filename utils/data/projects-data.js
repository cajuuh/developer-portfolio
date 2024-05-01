import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: "EV Power Status App",
    description:
      "NeoCharge created a device that would help you better understand how much electricty your electri vehicle would need to have the optimal charging statuses, also you were able to schedule your charges for the best periods accordingly to the power provider of the user region.",
    tools: ["Express", "MySQL", "NodeJS", "AWS S3", "React Native", "Redux"],
    role: "Front-end Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Anti Counterfeit App",
    description:
      "Lead the migration of an existing application from WebViews to React Native, implementing new functionalities including a custom camera frame for enhanced user experience.",
    tools: [
      "React Native", "Kotlin", "NodeJS", "Express", "PostgreSQL"
    ],
    role: "Front-end Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "AI Powered Real Estate",
    description:
      "My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.",
    tools: [
      "React",
      "Bootstrap",
      "SCSS",
      "Stripe",
      "Express",
      "TypeScript",
      "MongoDB",
      "Azure Blob",
      "OpenAI API",
      "Replicate AI",
      "Cronjob",
      "JWT",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },