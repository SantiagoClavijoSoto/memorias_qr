import React from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import logo from "../../../assets/Logob.webp";
import { Button } from "../../../components/ui/button";
import { fondoo } from "../data";

interface HeroSectionProps {
  onScrollTo: (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo }) => (
  <section
    className="relative isolate overflow-hidden bg-gradient-to-br from-[#0e2f5f] via-[#1d4ed8] to-[#0b1f3d] py-16 md:py-24"
    aria-label="Memorias Eternas QR"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.24),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.18),transparent_30%)]" />
    <div className="absolute inset-0 bg-black/10" />

    <div className="container mx-auto px-4 relative z-10">
      <header className="flex flex-col gap-6 text-center md:text-left md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
          <Sparkles className="h-4 w-4" />
          Donde los recuerdos viven para siempre
        </div>
        <div className="flex items-center justify-center md:justify-start gap-3">
          <img
            src={logo}
            alt="Logo de Memorias Eternas QR"
            className="h-14 w-14 rounded-xl shadow-lg shadow-black/20"
          />
          <div className="text-left text-white">
            <p className="text-xs uppercase tracking-[0.2em] opacity-80">
              Memorias Eternas QR
            </p>
            <p className="text-sm font-medium">Un puente entre memoria y amor</p>
          </div>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="text-white space-y-6 reveal">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Un tributo cálido que trasciende el tiempo
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white/90">
            Crea un perfil conmemorativo digital con fotos, videos, biografía, música y
            mensajes de gratitud. Una placa QR en acero que conecta el recuerdo físico con
            un tributo digital eterno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/573212564417?text=Hola%20quiero%20saber%20m%C3%A1s%20sobre%20Memorias%20Eternas%20QR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-[#0e2f5f] hover:bg-white/90 shadow-xl shadow-black/20"
              >
                <span className="inline-flex items-center gap-2">
                  <FaWhatsapp className="h-5 w-5" />
                  Consulta con nuestros asesores
                </span>
              </Button>
            </a>
            <a
              href="#tipos-perfil"
              onClick={onScrollTo("tipos-perfil")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 px-6 py-3 text-white hover:bg-white/10 transition-colors"
            >
              Descubre más
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative reveal delay-1">
          <div
            className="relative overflow-hidden rounded-3xl border border-white/40 bg-cover bg-center shadow-2xl"
            style={{ backgroundImage: `url(${fondoo})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
            <div className="relative p-6 md:p-8 text-white space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">Tributo digital</p>
              <h3 className="text-2xl font-semibold leading-snug">
                Conecta el mundo físico con el recuerdo
              </h3>
              <p className="text-white/85 leading-relaxed">
                Escanea el QR y accede al perfil conmemorativo: fotos, videos, melodías y mensajes
                de quienes desean honrar su memoria.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs">QR en acero</span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs">
                  Perfil administrable
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs">
                  Mensajes con reacciones
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 reveal delay-2">
        <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur px-5 py-4 text-white">
          <span className="text-2xl font-bold text-accent">7</span>
          <span className="text-sm text-white/85">tipos de perfil disponibles</span>
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur px-5 py-4 text-white">
          <span className="text-2xl font-bold text-accent">✦</span>
          <span className="text-sm text-white/85">fotos, videos y música</span>
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur px-5 py-4 text-white">
          <span className="text-2xl font-bold text-accent">0</span>
          <span className="text-sm text-white/85">mensualidades — pago único</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
