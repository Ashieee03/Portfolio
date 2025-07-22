import React from "react";
import { VisualsBrandingBreaker, UIUXDesignBreaker } from "./ProjectBreakers";
import ProjectCard from "./ProjectCard";
import The7amSection from "./The7amSection";
import TaylorLeanneSection from "./TaylorLeanneSection";
import ArchAngelNYCSection from "./ArchAngelNYCSection";
import SpringDigitalSection from "./SpringDigitalSection";
import ForTheLoveOfSocialsSection from "./ForTheLoveOfSocialsSection";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  mockups?: string[];
  tags: string[];
  isDark?: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 3,
      title: "Anjo Angela MPC",
      description: "Developed a sophisticated digital presence for a professional consulting firm with custom dashboards, data visualization, and client management interfaces, balancing professionalism with modern design trends.",
      image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65",
      mockups: [
        "https://assets.materialup.com/uploads/5080c6b2-634d-4c63-bc2c-2c081c374730/preview.jpg",
        "https://assets.materialup.com/uploads/953571c1-9c6f-4c37-85be-7fc326778f1b/preview.jpg",
        "https://assets.materialup.com/uploads/b14635d5-e476-4846-9d88-fec5efc38b53/preview.jpg"
      ],
      tags: ["Dashboard", "Web App", "UI Design"],
      isDark: true
    },
    {
      id: 4,
      title: "Spring Digital Services",
      description: "Created a vibrant, engaging website and social media strategy for a digital marketing agency, focusing on bold colors, dynamic imagery, and interactive elements to showcase creative capabilities.",
      image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb",
      mockups: [
        "https://assets.materialup.com/uploads/4de33de3-9bf2-46cb-9416-d501ee48ef25/preview.jpg",
        "https://assets.materialup.com/uploads/c7d910e0-3b24-4ec5-8609-5242c264fc72/preview.jpg",
        "https://assets.materialup.com/uploads/15b15dcd-1e3a-4313-a46f-f7b87cca1e66/preview.jpg"
      ],
      tags: ["Web Design", "Social Media", "Marketing"],
      isDark: false
    },
    {
      id: 5,
      title: "For The Love of Socials",
      description: "Developed a comprehensive social media strategy and content design system for lifestyle brands, focusing on cohesive visual storytelling across multiple platforms with consistent brand expression.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
      mockups: [
        "https://assets.materialup.com/uploads/2021be9a-0a1f-4dea-bb2b-130be5a0c113/preview.png",
        "https://assets.materialup.com/uploads/7e2bd9c3-0006-4947-b5b5-18179c0f3ee3/preview.png",
        "https://assets.materialup.com/uploads/501eb4b8-266d-4d92-9a29-b8b4727710e4/preview.png"
      ],
      tags: ["Social Media", "Content Design", "Strategy"],
      isDark: true
    },
    {
      id: 6,
      title: "Hyoon Ksa",
      description: "Designed a minimalist yet powerful website and brand identity for a photography studio, focusing on typography, white space, and subtle animations to create an immersive portfolio experience.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490",
      mockups: [
        "https://assets.materialup.com/uploads/8bf5a4e3-dcf2-41c7-9e26-5d82c44b5d9b/preview.jpg",
        "https://assets.materialup.com/uploads/e6e24463-827c-4e3a-885f-3b04b4ded6ef/preview.jpg",
        "https://assets.materialup.com/uploads/539a5116-7f41-4e0d-9d11-8c21bcca38d4/preview.jpg"
      ],
      tags: ["Web Design", "Portfolio", "Branding"],
      isDark: false
    }
  ];

  return (
    <div id="projects">
      <VisualsBrandingBreaker />
      <The7amSection />
      <TaylorLeanneSection />
      <ArchAngelNYCSection />
      <SpringDigitalSection />
      <ForTheLoveOfSocialsSection />
      
      <ProjectCard {...projects[0]} />
      <ProjectCard {...projects[1]} />
      <ProjectCard {...projects[2]} />
      
      <UIUXDesignBreaker />
      <ProjectCard {...projects[3]} />
    </div>
  );
};

export default Projects; 