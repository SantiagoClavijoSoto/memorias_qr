import React from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data";

const TestimonialsSection: React.FC = () => (
  <section className="py-14 md:py-20">
    <div className="container mx-auto px-4 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground reveal">
          Lo que dicen nuestras familias
        </h2>
        <p className="text-muted-foreground text-lg reveal delay-1">
          Historias reales de personas que encontraron una forma especial de recordar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <div
            key={item.name}
            className="relative rounded-2xl border border-border/70 bg-card/90 backdrop-blur p-6 shadow-sm hover:shadow-lg transition-shadow reveal"
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
            <div className="space-y-4">
              <div className="flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-foreground">{item.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
