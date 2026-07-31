import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-60">
      <Hero />
      <Skills />
    </div>
  );
}
