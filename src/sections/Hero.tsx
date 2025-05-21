"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugin
gsap.registerPlugin(SplitText);

interface Props {
  introDone: boolean;
}

const Hero = ({ introDone }: Props) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!introDone) return; // Wait for intro to finish

    const ctx = gsap.context(() => {
      const split = new SplitText(headlineRef.current, {
        type: "chars, words",
      });

      gsap.from(split.chars, {
        opacity: 0,
        y: 20,
        stagger: {
          amount: 1,
          from: "random",
        },
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from([introRef.current, ctaRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, [introDone]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center p-6"
      data-testid="hero-section"
    >
      <h1
        ref={headlineRef}
        className="text-5xl md:text-7xl lg:text-8xl font-bold font-spaceGrotesk mb-6"
      >
        Hi, I’m Sai Kumar
      </h1>
      <p
        ref={introRef}
        className="text-lg md:text-xl lg:text-2xl max-w-2xl mb-8"
      >
        A passionate Software Engineer, Designer, and Freelancer creating
        impactful digital experiences.
      </p>
      <button
        ref={ctaRef}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Get in Touch
      </button>
    </section>
  );
};

export default Hero;
