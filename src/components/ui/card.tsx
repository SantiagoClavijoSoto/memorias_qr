import React from "react";
import { cn } from "../../utils/cn";

export const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <div className={cn("rounded-2xl border bg-card text-card-foreground shadow-sm", className)}>
    {children}
  </div>
);

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <div className={cn("p-6", className)}>{children}</div>
);
