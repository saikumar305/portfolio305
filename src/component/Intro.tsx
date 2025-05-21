"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface IntroProps {
  children: ReactNode;
  titles?: string[];
  duration?: number;
  delay?: number;
  onComplete?: () => void;
}

const Intro = ({
  children,
  titles = ["Software Engineer", "Designer", "Freelancer"],
  duration = 1.3,
  delay = 0.3,
  onComplete,
}: IntroProps) => {
  const comp = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => onComplete?.(), // Safely call onComplete
      });

      tl.from(sliderRef.current, {
        xPercent: -100,
        duration,
        delay,
        willChange: "transform",
      })
        .from(
          [".title"],
          {
            opacity: 0,
            y: 30,
            stagger: 0.5,
            duration: 0.8,
          },
          "-=0.5"
        )
        .to(
          [".title"],
          {
            opacity: 0,
            y: -30,
            stagger: 0.5,
            duration: 0.8,
            delay: 0.3,
          },
          ">"
        )
        .to(sliderRef.current, {
          xPercent: -100,
          duration,
          onComplete: () => {
            if (sliderRef.current) {
              sliderRef.current.style.display = "none";
            }
          },
        })
        .from(
          welcomeRef.current,
          {
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        );
    }, comp);

    return () => ctx.revert();
  }, [duration, delay, onComplete]); // Dependency array remains the same

  return (
    <div
      className="fixed top-0 left-0 h-screen w-full overflow-hidden z-50"
      ref={comp}
      data-testid="intro-animation"
      aria-live="polite"
    >
      <div
        ref={sliderRef}
        className="absolute top-0 left-0 h-full w-full p-10 bg-gray-50 font-spaceGrotesk z-20 flex flex-col gap-6 tracking-tight will-change-transform"
        role="region"
        aria-label="Introduction animation"
      >
        {titles.map((title, index) => (
          <h1
            key={index}
            className="title text-5xl md:text-7xl lg:text-9xl font-bold"
            data-testid={`title-${index}`}
          >
            {title}
          </h1>
        ))}
      </div>
      <div className="h-full flex bg-gray-950 justify-center items-center">
        <h1
          ref={welcomeRef}
          className="text-5xl md:text-7xl lg:text-9xl font-bold text-gray-100 font-spaceGrotesk"
          data-testid="welcome-text"
        >
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Intro;
