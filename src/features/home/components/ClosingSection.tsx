import React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { includesList, socialLinks } from "../data";

const ClosingSection: React.FC = () => (
  <section className="py-14 md:py-20">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-4 reveal">
          <h2 className="text-3xl md:text-4xl font-semibold">La memoria permanece viva</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Creamos un espacio cálido para honrar a quienes amamos: seguro, colaborativo y bello en
            cualquier dispositivo. Un QR que conecta el mundo físico con un tributo digital eterno.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/573212564417?text=Hola%20quiero%20saber%20m%C3%A1s%20sobre%20Memorias%20Eternas%20QR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Hablar por WhatsApp</Button>
            </a>
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold hover:border-primary/80"
              >
                {social.icon} {social.label}
              </a>
            ))}
          </div>
        </div>

        <Card className="border border-border/70 bg-card/90 backdrop-blur shadow-xl shadow-[rgba(200,155,60,0.2)] reveal delay-1 soft-float">
          <CardContent className="p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Qué incluye
              </h3>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              {includesList.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
            <div className="pt-2">
              <p className="text-foreground font-semibold text-lg">Una sola inversión. Sin mensualidades.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default ClosingSection;
