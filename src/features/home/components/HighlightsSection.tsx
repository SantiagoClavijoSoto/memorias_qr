import React from "react";
import { highlights } from "../data";

const HighlightsSection: React.FC = () => (
  <section className="py-14 md:py-20 bg-gradient-to-b from-transparent via-[#edf3fc]/50 to-transparent">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground reveal">
              Todo lo que necesitas en un solo tributo
            </h2>
            <p className="text-muted-foreground text-lg reveal delay-1">
              Un perfil completo con herramientas para contar la historia de quienes amas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-border/60 bg-card/80 backdrop-blur p-4 shadow-sm hover:shadow-md transition-shadow reveal"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative reveal delay-2 hidden lg:block">
          <div className="rounded-3xl border border-border/50 overflow-hidden shadow-2xl">
            <img
              src="/profile-preview.webp"
              alt="Vista previa de un perfil conmemorativo en Memorias Eternas QR"
              className="w-full h-auto rounded-3xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HighlightsSection;
