import React from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}) => {
  const base =
    "rounded-xl font-semibold transition-all focus:ring-2 focus:ring-primary/50 hover:scale-[1.02] active:scale-[0.99]";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
      "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:text-primary/90",
  };
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
