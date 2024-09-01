"use client";

import React, { useEffect, useCallback } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function Navbar() {
  const scrollToSection = useCallback((sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["hero", "about", "tech", "projects"];

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            console.log(`Active section: ${sectionId}`);
            // You can add active state styling here if needed
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      title: "Home",
      icon: <IconHome size={24} />,
      onClick: () => scrollToSection("hero"),
    },
    {
      title: "About",
      icon: <IconNewSection size={24} />,
      onClick: () => scrollToSection("about"),
    },
    {
      title: "Tech",
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      onClick: () => scrollToSection("tech"),
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => scrollToSection("projects"),
    },
    {
      title: "Twitter",
      icon: <IconBrandX size={24} />,
      href: "https://x.com/mayank01322310",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub size={24} />,
      href: "https://github.com/mayank2130",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <FloatingDock items={links} className="mt-4" />
    </nav>
  );
}
