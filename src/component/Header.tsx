"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu and close button

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo/Name on the left */}
        <div
          className="text-2xl font-bold font-spaceGrotesk cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          Sai kumar
        </div>

        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation links - Desktop (center) */}
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => handleScroll("hero")}
            className="text-lg hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="text-lg hover:text-blue-400 transition-colors duration-300"
            data-testid="nav-about"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("skills")}
            className="text-lg hover:text-blue-400 transition-colors duration-300"
            data-testid="nav-skills"
          >
            Skills
          </button>
          <button
            onClick={() => handleScroll("experience")}
            className="text-lg hover:text-blue-400 transition-colors duration-300"
            data-testid="nav-experience"
          >
            Experience
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="text-lg hover:text-blue-400 transition-colors duration-300"
            data-testid="nav-projects"
          >
            Projects
          </button>
        </div>

        {/* Contact button - Desktop (right) */}
        <button
          onClick={() => handleScroll("contact")}
          className="hidden md:block text-lg bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          data-testid="nav-contact"
        >
          Contact
        </button>

        {/* Mobile menu - Visible when menu is open */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-gray-900 flex-col items-center space-y-4 py-4`}
        >
          <button
            onClick={() => handleScroll("hero")}
            className="text-lg hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="text-lg hover:text-blue-400 transition-colors duration-300"
            data-testid="nav-about-mobile"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("skills")}
            className="text-lg hover:text-blue-400 transition-colors duration-300"
            data-testid="nav-skills-mobile"
          >
            Skills
          </button>
          <button
            onClick={() => handleScroll("experience")}
            className="text-lg hover:text-blue-400 transition-colors duration-300"
            data-testid="nav-experience-mobile"
          >
            Experience
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="text-lg hover:text-blue-400 transition-colors duration-300"
            data-testid="nav-projects-mobile"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="text-lg bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            data-testid="nav-contact-mobile"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
