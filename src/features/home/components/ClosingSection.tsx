import React from "react";
import { Heart } from "lucide-react";
import { socialLinks } from "../data";
import WhatsAppButton from "./WhatsAppButton";

const ClosingSection: React.FC = () => (
  <section className="relative overflow-hidden py-16 md:py-24">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0e2f5f] via-[#1d4ed8] to-[#0b1f3d]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(244,180,26,0.12),transparent_50%)]" />

    <div className="relative container mx-auto px-4 text-center text-white space-y-8">
      <div className="space-y-4 reveal">
        <Heart className="h-10 w-10 mx-auto text-accent/80" />
        <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto">
          Honra la memoria de quienes amas
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto">
          Una sola inversión. Sin mensualidades. Para siempre.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-1">
        <WhatsAppButton
          className="bg-white text-[#0e2f5f] hover:bg-white/90 shadow-xl shadow-black/20 text-lg px-10 py-5"
          label="Escríbenos por WhatsApp"
        />
      </div>

      <div className="flex items-center justify-center gap-4 reveal delay-2">
        {socialLinks.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-11 w-11 rounded-full border border-white/30 text-white/80 hover:bg-white/15 hover:text-white transition-colors"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="pt-8 border-t border-white/15 reveal delay-3">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Memorias Eternas QR. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </section>
);

export default ClosingSection;
