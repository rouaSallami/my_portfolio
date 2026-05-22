"use client";

import { useState } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projets";
import Skills from "@/components/Skills";

export default function Home() {

  const [language, setLanguage] = useState("en"); 
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />  
    </>
  );
}