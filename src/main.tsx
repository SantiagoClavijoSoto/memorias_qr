import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      <HomePage />
    </RootLayout>
  </React.StrictMode>
);
