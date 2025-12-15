import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { collaborationCards, primaryHighlights } from "../data";

const HighlightsSection: React.FC = () => (
  <section className="py-14 md:py-20">
    <div className="container mx-auto px-4 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground reveal">
          Todo lo que necesitas en un solo tributo
        </h2>
        <p className="text-muted-foreground text-lg reveal delay-1">
          Experiencia cálida, segura y colaborativa para recordar y compartir.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {primaryHighlights.map((item, idx) => (
          <Card
            key={idx}
            className="border-none bg-gradient-to-br shadow-xl shadow-[rgba(244,180,26,0.2)] reveal soft-float"
          >
            <CardContent className={`p-6 md:p-7 rounded-2xl bg-gradient-to-br ${item.tone}`}>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-inner shadow-[rgba(200,155,60,0.24)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {collaborationCards.map((item, idx) => (
          <Card
            key={idx}
            className="border border-border/70 bg-card/80 backdrop-blur shadow-lg shadow-[rgba(29,78,216,0.18)] reveal soft-float"
          >
            <CardContent className="p-6 space-y-3">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
