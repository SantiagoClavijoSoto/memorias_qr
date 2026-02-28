import type { ReactElement } from "react";

export interface HighlightItem {
  icon: ReactElement;
  title: string;
  desc: string;
}

export interface ProfileType {
  icon: ReactElement;
  name: string;
  description: string;
  color: string;
}

export interface StepItem {
  step: string;
  title: string;
  desc: string;
  icon: ReactElement;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UpdateItem {
  icon: ReactElement;
  text: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ReactElement;
}
