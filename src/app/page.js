import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";

const Skills = dynamic(() => import("@/components/Skills/Skills"));
const Projects = dynamic(() => import("@/components/Projects/Projects"));
const Testimonials = dynamic(() => import("@/components/Testimonials/Testimonials"));

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
    </div>
  );
}