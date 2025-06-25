import React from "react";
import GoalSection from "@/components/About/Goalsection";
import Hero from "@/components/About/Hero";
import Counting from "@/components/About/Counting";
import WhoSection from "@/components/About/WhoSection";
import Since from "@/components/About/Since";
import TeamGallery from "@/components/About/Team";
import TeamMembers from "@/components/About/TeamMembers";
import Contributors from "@/components/About/Contributors";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <GoalSection />
      <Counting />
      <WhoSection />
      <Since />
      <TeamGallery />
      <TeamMembers />
      <Contributors />
    </div>
  );
};

export default About;
