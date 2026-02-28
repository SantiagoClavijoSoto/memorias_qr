import React from "react";
import { CheckCircle } from "lucide-react";
import { updates } from "../data";

const UpdatesSection: React.FC = () => (
  <section className="py-14 md:py-20 bg-gradient-to-b from-[#edf3fc]/60 via-[#f0f6ff]/40 to-transparent">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground reveal">
            Un producto que evoluciona contigo
          </h2>
          <p className="text-muted-foreground text-lg reveal delay-1">
            Mejoramos constantemente la plataforma con nuevas funciones para que tu tributo sea cada
            vez más especial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {updates.map((item, idx) => (
            <div
              key={item.text}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/80 backdrop-blur p-4 shadow-sm reveal"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default UpdatesSection;
