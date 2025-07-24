import React from "react";
import { VisualsBrandingBreaker, UIUXDesignBreaker } from "./ProjectBreakers";
import The7amSection from "./The7amSection";
import TaylorLeanneSection from "./TaylorLeanneSection";
import ArchAngelNYCSection from "./ArchAngelNYCSection";
import SpringDigitalSection from "./SpringDigitalSection";
import ForTheLoveOfSocialsSection from "./ForTheLoveOfSocialsSection";
import HyoonKsaSection from "./HyoonKsaSection";
import ECommerceMaramagSection from "./ECommerceMaramagSection";

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <VisualsBrandingBreaker />
      <The7amSection />
      <TaylorLeanneSection />
      <ArchAngelNYCSection />
      <SpringDigitalSection />
      <ForTheLoveOfSocialsSection />
      
      <UIUXDesignBreaker />
      <HyoonKsaSection />
      <ECommerceMaramagSection />
    </div>
  );
};

export default Projects; 