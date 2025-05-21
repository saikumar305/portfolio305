"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const photoWrapperRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading with scale and fade
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate photo wrapper with fade and scale
      gsap.fromTo(
        photoWrapperRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate details with fade and slide-in from left
      gsap.fromTo(
        detailsRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate paragraphs with fade and slide-in from right
      gsap.fromTo(
        paragraphsRef.current.children,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.3,
          duration: 1.5,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Background color transition with reverse
      gsap.fromTo(
        aboutRef.current,
        { backgroundColor: "#1f2937" },
        {
          backgroundColor: "#2d3748",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen flex flex-col bg-gray-800 text-white px-6 sm:px-10 md:px-16 lg:px-20"
      data-testid="about-section"
    >
      <h2
        ref={headingRef}
        className="text-4xl md:text-5xl lg:text-6xl font-bold font-spaceGrotesk mb-12 text-center"
      >
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left column: Photo and Details */}
        <div className="flex flex-col items-center md:items-start">
          {/* Photo with Tilt effect */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={300}
            className="mb-6"
          >
            <div ref={photoWrapperRef}>
              <Image
                src="/profile.png"
                alt="Professional portrait"
                width={256}
                height={256}
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>
          </Tilt>

          {/* Personal Details */}
          <div ref={detailsRef} className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2">
              Rachakonda Sai Kumar
            </h3>
            <p className="text-lg">Full Stack Engineer</p>
            <p className="text-lg">Based in Hyderabad, Telangana</p>
            <p className="text-lg">Email: saikumarrachakonda305@gmail.com</p>
          </div>
        </div>

        {/* Right column: Paragraphs */}
        <div ref={paragraphsRef} className="flex flex-col space-y-4">
          <p className="text-lg md:text-xl">
            I’m a Full Stack Engineer with 4 years of experience in developing
            scalable web applications and AI-powered solutions. My journey in
            tech began with a Bachelor’s in Electrical Engineering from
            Visvesvaraya National Institute of Technology, Nagpur, where I
            developed a strong foundation in problem-solving. Since then, I’ve
            honed my skills in Python, JavaScript, React, FastAPI, and SQL,
            focusing on creating intuitive user interfaces and robust backend
            architectures.
          </p>
          <p className="text-lg md:text-xl">
            At Exponential AI in Hyderabad, I’ve contributed to impactful
            healthcare projects like the Decision Intelligence Tool - ENSO,
            where I automated 80% of medical claims processing with 98%
            accuracy, reducing claim denials by 43%. I also developed Generative
            AI solutions to assess medical necessity in Revenue Cycle
            Management, improving data extraction accuracy from 82% to 89%.
            Additionally, I streamlined email intake processes for Cigna Group,
            extracting email intent with 76% accuracy and reducing manual review
            time by 80%.
          </p>
          <p className="text-lg md:text-xl">
            Prior to that, at Coditation Systems in Pune, I worked on the
            Marketing Strategy Recommendation Tool for StepFunction.ai,
            integrating Generative AI with OpenAI’s GPT-4 to enable AI-powered
            query handling. I also improved application performance by 20%
            through code optimization and enhanced data visualization with
            customized React charts. When I’m not coding, I enjoy exploring new
            technologies, mentoring aspiring developers, and building tools like
            Docker GPT, a VS Code extension to generate Dockerfiles using GPT-4.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
