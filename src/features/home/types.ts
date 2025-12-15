import type { ReactElement } from "react";

export interface HighlightItem {
  icon: ReactElement;
  title: string;
  desc: string;
  tone: string;
}

export interface InfoCard {
  icon: ReactElement;
  title: string;
  desc: string;
}

export interface StepItem {
  step: string;
  title: string;
  desc: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ReactElement;
}
