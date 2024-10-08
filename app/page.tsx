"use client";

import { useEffect, useRef, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import AttributionSection from "@/components/sections/AttributionSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import IntroSection from "@/components/sections/IntroSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const [currentSection, setCurrentSection] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let _currentSection = '';
        for (const entry of entries) {
          if (entry.isIntersecting) {
            _currentSection = entry.target.id;
          }
        }
        setCurrentSection(_currentSection)
      },
      {
        root: null,
        rootMargin: "-50% 0px",
        threshold: 0,
      }
    );

    const aboutRefCurrent = aboutRef.current;
    const experienceRefCurrent = experienceRef.current;
    const projectsRefCurrent = projectsRef.current;
    const skillsRefCurrent = skillsRef.current;

    observer.observe(aboutRef.current!);
    observer.observe(experienceRef.current!);
    observer.observe(projectsRef.current!);
    observer.observe(skillsRef.current!);

    return () => {
      if (aboutRefCurrent)
        observer.unobserve(aboutRefCurrent);

      if (experienceRefCurrent)
        observer.unobserve(experienceRefCurrent);

      if (projectsRefCurrent)
        observer.unobserve(projectsRefCurrent);

      if (skillsRefCurrent)
        observer.unobserve(skillsRefCurrent);

      observer.disconnect();
    };
  }, []);

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <IntroSection currentSection={currentSection} />
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <AboutSection
          id="about"
          ref={aboutRef}
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        />
        <ExperienceSection
          id="experience"
          ref={experienceRef}
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        />
        <ProjectsSection
          id="projects"
          ref={projectsRef}
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        />
        <SkillsSection id="skills"
          ref={skillsRef} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" />
        <AttributionSection />
      </main>
      <div></div>
    </div>
  );
}
