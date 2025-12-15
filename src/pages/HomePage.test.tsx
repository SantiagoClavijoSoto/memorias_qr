import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("muestra el hero y CTA principal a WhatsApp", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /tributo cálido que trasciende el tiempo/i })
    ).toBeInTheDocument();

    const whatsapp = screen.getByRole("link", { name: /consulta con nuestros asesores/i });
    expect(whatsapp).toHaveAttribute("href", expect.stringContaining("wa.me/573212564417"));
    expect(whatsapp).toHaveAttribute("target", "_blank");
  });

  it("enlaza correctamente a la sección Cómo funciona", () => {
    render(<HomePage />);

    const anchor = screen.getByRole("link", { name: /ver cómo funciona/i });
    expect(anchor).toHaveAttribute("href", "#como-funciona");
  });

  it("presenta secciones clave y enlaces de redes", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: /cómo funciona/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /qué incluye/i })).toBeInTheDocument();

    const socialLinks = screen.getAllByRole("link", { name: /(facebook|instagram|tiktok)/i });
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    });
  });
});
