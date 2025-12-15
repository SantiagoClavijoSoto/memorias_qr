import React, { useEffect, useMemo } from "react";
import ClosingSection from "../features/home/components/ClosingSection";
import HeroSection from "../features/home/components/HeroSection";
import HighlightsSection from "../features/home/components/HighlightsSection";
import HowItWorksSection from "../features/home/components/HowItWorksSection";
import { createSmoothScroll } from "../features/home/utils/smoothScroll";

const HomePage: React.FC = () => {
  const smoothScrollTo = useMemo(() => createSmoothScroll(900), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <HeroSection onScrollTo={smoothScrollTo} />
      <HighlightsSection />
      <HowItWorksSection />
      <ClosingSection />
    </div>
  );
};

export default HomePage;
