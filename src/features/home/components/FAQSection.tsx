import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-transparent via-[#edf3fc]/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground reveal">
              Preguntas frecuentes
            </h2>
            <p className="text-muted-foreground text-lg reveal delay-1">
              Todo lo que necesitas saber sobre Memorias Eternas QR.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/70 bg-card/90 backdrop-blur shadow-sm overflow-hidden reveal"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-primary/5 transition-colors"
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-base font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: openIndex === idx ? "200px" : "0px",
                  }}
                >
                  <p className="px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
