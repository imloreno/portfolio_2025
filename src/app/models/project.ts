export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  shape: "circle" | "square" | "triangle";
}
