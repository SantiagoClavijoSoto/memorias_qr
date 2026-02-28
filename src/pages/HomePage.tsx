import React, { useEffect, useMemo } from "react";
import ClosingSection from "../features/home/components/ClosingSection";
import FAQSection from "../features/home/components/FAQSection";
import HeroSection from "../features/home/components/HeroSection";
import HighlightsSection from "../features/home/components/HighlightsSection";
import HowItWorksSection from "../features/home/components/HowItWorksSection";
import ProfileTypesSection from "../features/home/components/ProfileTypesSection";
import TestimonialsSection from "../features/home/components/TestimonialsSection";
import UpdatesSection from "../features/home/components/UpdatesSection";
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
      <ProfileTypesSection />
      <HighlightsSection />
      <HowItWorksSection />
      <UpdatesSection />
      <TestimonialsSection />
      <FAQSection />
      <ClosingSection />
    </div>
  );
};

export default HomePage;
