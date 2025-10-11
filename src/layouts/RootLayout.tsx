import React, { Suspense } from "react";
import "../index.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div lang="es" className="font-sans">
      <Suspense fallback={<div>Cargando...</div>}>{children}</Suspense>
    </div>
  );
};

export default RootLayout;
