import React from "react";
import howDoesItWork from "../../../assets/videos/howDoesItWork.mp4";
import { Card, CardContent } from "../../../components/ui/card";
import { fondoo, steps } from "../data";

const HowItWorksSection: React.FC = () => (
  <section id="como-funciona" className="relative overflow-hidden py-14 md:py-20">
    <div className="absolute inset-0 bg-gradient-to-r from-[#edf3fc]/85 via-white to-[#e6f0fb]/80" />
    <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f4b41a]/18 to-transparent" />

    <div className="relative container mx-auto px-4 grid gap-10 md:grid-cols-[1.05fr_0.95fr] items-center">
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-semibold reveal">Cómo funciona</h2>
        <p className="text-muted-foreground text-lg max-w-xl reveal delay-1">
          Un proceso simple y respetuoso para crear un tributo digital permanente.
        </p>
        <div className="space-y-5">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex gap-4 rounded-2xl border border-border/70 bg-white/80 backdrop-blur p-4 shadow-sm reveal"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/70 reveal delay-2">
        <CardContent className="p-0">
          <video
            className="h-full w-full object-cover"
            src={howDoesItWork}
            controls
            muted
            loop
            poster={fondoo}
            preload="none"
            playsInline
          />
        </CardContent>
      </Card>
    </div>
  </section>
);

export default HowItWorksSection;
