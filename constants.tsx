
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
    level: 95, 
    icon: "Code2", 
    description: "Expertise in Next.js, Redux, and complex state management patterns."
  },
  { 
    name: "Machine Learning", 
    level: 90, 
    icon: "Layers", 
    description: "Architecting type-safe enterprise applications with strict concurrency rules."
  },
  { 
    name: "Deep Learning", 
    level: 85, 
    icon: "Terminal", 
    description: "Building scalable microservices using Express, Fastify, and NestJS."
  },
  { 
    name: "SQL", 
    level: 80, 
    icon: "Database", 
    description: "Advanced query optimization, indexing strategies, and database schema design."
  },
  { 
    name: "Natural Language Processing", 
    level: 75, 
    icon: "Infinity", 
    description: "Containerization strategies for development and production environments."
  },
  { 
    name: "Django", 
    level: 70, 
    icon: "Cloud", 
    description: "Serverless deployments, Lambda, S3, and infrastructure as code via CDK."
  },
  { 
    name: "Business Intelligence Tools", 
    level: 88, 
    icon: "Cpu", 
    description: "Designing high-availability distributed systems and API gateways."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "EcoPulse Dashboard",
    description: "Real-time environmental monitoring system with predictive AI analytics using time-series data.",
    tags: ["React", "D3.js", "Python", "MQTT"],
    imageUrl: "https://picsum.photos/seed/ecopulse/800/600",
    link: "#"
  },
  {
    id: "2",
    title: "Vortex Engine",
    description: "A high-performance custom rendering engine for 3D data visualization on the web.",
    tags: ["WebGL", "TypeScript", "Three.js", "GLSL"],
    imageUrl: "https://picsum.photos/seed/vortex/800/600",
    link: "#"
  },
  {
    id: "3",
    title: "CipherLink",
    description: "Decentralized messaging platform with end-to-end encryption and peer-to-peer relay nodes.",
    tags: ["Rust", "Wasm", "P2P", "React"],
    imageUrl: "https://picsum.photos/seed/cipher/800/600",
    link: "#"
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
