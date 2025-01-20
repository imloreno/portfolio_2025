import { Project } from "@models/project";

export const projectList: Project[] = [
  {
    id: 1,
    name: "Talentor AI - Resume generator with AI",
    description:
      "Talentor AI is an extension that based on the keyword of the job you are applying for and the skills you have generates custom resumes for you. It uses AI to generate a custom resume that is tailored to your specific needs.",
    image: "/projects/talentorai.png",
    github: "https://github.com/talentor-ai/navigator_extension",
    shape: "circle",
  },
  {
    id: 2,
    name: "Geographic Information System (GIS)",
    description:
      "GIS is a Full-Stack software that allows user to visualize, analyze, draw and edit geographical data. It is used to create maps, charts, and other visual representations of spatial data.",
    image: "/projects/gis.png",
    github: "https://github.com/imloreno/webgis_layer_manager-frontend",
    shape: "triangle",
  },
  {
    id: 3,
    name: "Google Form filling bot",
    description:
      "A bot that automatically fills out Google Forms based on a set of predefined rules. It uses custom random data to fill out the form in a massive scale.",
    image: "/projects/form-filler.png",
    github: "https://github.com/imloreno/google_form_filler",
    shape: "square",
  },
];
