import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "../../../components/ui/button";

const advisors = [
  {
    label: "Asesor 1",
    phone: "573212564417",
  },
  {
    label: "Asesor 2 — Medellín",
    phone: "573189426493",
  },
];

const waMessage = "Hola%20quiero%20saber%20m%C3%A1s%20sobre%20Memorias%20Eternas%20QR";

interface WhatsAppButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  className = "",
  size = "lg",
  label = "Consulta con nuestros asesores",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative inline-block" ref={ref}>
      <Button
        size={size}
        className={className}
        onClick={() => setOpen(!open)}
      >
        <span className="inline-flex items-center gap-2">
          <FaWhatsapp className="h-5 w-5" />
          {label}
        </span>
      </Button>

      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 min-w-[220px] rounded-xl border border-border/70 bg-white shadow-xl overflow-hidden animate-fade-in">
          {advisors.map((advisor) => (
            <a
              key={advisor.phone}
              href={`https://wa.me/${advisor.phone}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 transition-colors"
              onClick={() => setOpen(false)}
            >
              <FaWhatsapp className="h-4 w-4 text-green-500" />
              {advisor.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
