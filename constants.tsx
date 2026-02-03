
import React from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Terminal, 
  Database, 
  Cloud, 
  Infinity 
} from 'lucide-react';
import { Skill, Project } from './types';

export const SKILLS: Skill[] = [
  { 
    name: "Data Science", 
    level: 85, 
    icon: "Layers", 
    description: "Expertise in data cleaning and manipulation for better model prediction."
  },
  { 
    name: "Machine Learning", 
    level: 85, 
    icon: "Layers", 
    description: "Applying accurate machine learning algorithms for the prediction of complex patterns."
  },
  { 
    name: "Deep Learning", 
    level: 80, 
    icon: "Code2", 
    description: "Building a neural network model and satisying the cons of the neural network like LSTM, transformers."
  },
  { 
    name: "SQL", 
    level: 87, 
    icon: "Database", 
    description: "Creating and managing the databases using SQL (Structured Query Language)."
  },
  { 
    name: "Natural Language Processing", 
    level: 75, 
    icon: "Infinity", 
    description: "Manipulation and prediction of sequential data."
  },
  { 
    name: "Django", 
    level: 80, 
    icon: "Cpu", 
    description: "Applying and managing both frontend and backend for a big websites with proper authentication."
  },
  { 
    name: "Business Intelligence Tools", 
    level: 90,
    icon: "Layers", 
    description: "Visualization of data for business to capture the insights with the dataset."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Codechai",
    description: "Personalized coding application platform for user to learn coding better along with required notes and practice problems.",
    tags: ["HTML", "CSS", "JavaScript", "Django","MySQL"],
    imageUrl: "https://github.com/KesavDeepak/Codechai/blob/main/image.png?raw=true",
    link: "https://github.com/KesavDeepak/codechai"
  },
  {
    id: "2",
    title: "Enecionit",
    description: "Web application to determine the electrical energy consumption along with a small chatbot.",
    tags: ["HTML", "CSS", "JavaScript", "Django","SQLite3"],
    imageUrl: "https://github.com/KesavDeepak/Enecionit/blob/master/app1/static/image.png?raw=true",
    link: "https://github.com/KesavDeepak/Enecionit"
  },
  {
    id: "3",
    title: "JuriAssist",
    description: "AI driven legal assistance web application to solve all IPC based queries along with a safe storage system.",
    tags: ["HTML", "CSS", "JavaScript", "Flask","Gemini API"],
    imageUrl: "https://github.com/KesavDeepak/JuriAssist/blob/main/Untitled%20design.png?raw=true",
    link: "https://github.com/KesavDeepak/juriassist;"
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Infinity: <Infinity className="w-6 h-6" />
};
