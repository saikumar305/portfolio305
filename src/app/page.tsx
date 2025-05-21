"use client";

import Intro from "@/component/Intro";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import { useState, useCallback, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Home() {
  const [introDone, setIntroDone] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  // Memoize the onComplete callback to prevent re-renders
  const handleIntroComplete = useCallback(() => {
    setIntroDone(true);
  }, []);

  // Fade in the main content after intro completes
  useLayoutEffect(() => {
    if (introDone && mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [introDone]);

  return (
    <div className="relative">
      {/* {!introDone && (
        <Intro onComplete={handleIntroComplete}>Welcome to My Portfolio</Intro>
      )} */}
      <main ref={mainRef} style={{ opacity: introDone ? 1 : 0 }}>
        <Hero introDone={introDone} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
