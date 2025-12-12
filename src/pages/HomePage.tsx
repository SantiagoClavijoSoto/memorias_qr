import React, { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import howDoesItWork from "../assets/videos/howDoesItWork.mp4";
import { QrCode, Heart, Users, Shield, Sparkles, Camera } from "lucide-react";
import logo from "../assets/Logob.png";
import fondoo from "../../public/fondoo.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const HomePage: React.FC = () => {
  const smoothScrollTo = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const start = window.scrollY;
    const target = el.getBoundingClientRect().top + window.scrollY;
    const distance = target - start;
    const duration = 900; // ms
    let startTime: number | null = null;

    const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const step = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOut(progress);
      window.scrollTo(0, start + distance * eased);
      if (elapsed < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      {/* Hero */}
      <section
        className="relative isolate overflow-hidden bg-gradient-to-br from-[#6b3a6b] via-[#8c1c32] to-[#2d1a2f] py-16 md:py-24"
        aria-label="Memorias Eternas QR"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.2),transparent_30%)]" />
        <div className="absolute inset-0 bg-black/5" />

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
                Un código QR en acero que abre un perfil digital con fotos, videos, biografía,
                música y mensajes de gratitud. Un lugar seguro para honrar y compartir la historia
                de quienes amamos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/573212564417?text=Hola%20quiero%20saber%20m%C3%A1s%20sobre%20Memorias%20Eternas%20QR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-[#6b3a6b] hover:bg-white/90 shadow-xl shadow-black/20"
                  >
                    Comenzar ahora
                  </Button>
                </a>
                <a
                  href="#como-funciona"
                  onClick={smoothScrollTo("como-funciona")}
                  className="inline-flex items-center justify-center rounded-xl border border-white/50 px-6 py-3 text-white hover:bg-white/10"
                >
                  Ver cómo funciona
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/85">
                <div className="rounded-xl bg-white/10 p-3 shadow-inner shadow-black/10">
                  Placa en acero 6x6 con QR único y vitalicio.
                </div>
                <div className="rounded-xl bg-white/10 p-3 shadow-inner shadow-black/10">
                  Perfil con fotos, videos, biografía y canciones.
                </div>
                <div className="rounded-xl bg-white/10 p-3 shadow-inner shadow-black/10">
                  Acceso seguro para familia y mensajes con reacciones.
                </div>
              </div>
            </div>

            <div className="relative reveal delay-1">
              <div
                className="relative overflow-hidden rounded-3xl border border-white/40 bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: `url(${fondoo})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
                <div className="relative p-6 md:p-8 text-white space-y-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                    Tributo digital
                  </p>
                  <h3 className="text-2xl font-semibold leading-snug">
                    Conecta el mundo físico con el recuerdo
                  </h3>
                  <p className="text-white/85 leading-relaxed">
                    Escanea el QR y accede al perfil conmemorativo: fotos, videos, melodías y
                    mensajes de quienes desean honrar su memoria.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs">
                      QR en acero
                    </span>
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
        </div>
      </section>

      {/* Destacados */}
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
            {[
              {
                icon: <QrCode className="h-6 w-6 text-primary" />,
                title: "Código QR personalizado",
                desc: "Placa de acero inoxidable 6x6 con QR único que abre el perfil conmemorativo editado por la familia.",
                tone: "from-white to-[#f7f2ed]",
              },
              {
                icon: <Heart className="h-6 w-6 text-secondary" />,
                title: "Perfil conmemorativo",
                desc: "Historia, fotos, videos, canciones y relatos en un espacio seguro y bello.",
                tone: "from-white to-[#e9dcca]/75",
              },
              {
                icon: <Shield className="h-6 w-6 text-foreground" />,
                title: "Control total",
                desc: "Usuario y contraseña para actualizar el perfil cuando lo desees.",
                tone: "from-white to-[#bda9b5]/65",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="border-none bg-gradient-to-br shadow-xl shadow-[rgba(200,155,60,0.2)] reveal soft-float"
              >
                <CardContent
                  className={`p-6 md:p-7 rounded-2xl bg-gradient-to-br ${item.tone}`}
                >
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
            {[
              {
                icon: <Users className="h-5 w-5 text-primary" />,
                title: "Espacio colaborativo",
                desc: "Comparte el QR y recibe mensajes de amor con opción de reacciones.",
              },
              {
                icon: <Camera className="h-5 w-5 text-secondary" />,
                title: "Multimedia completo",
                desc: "Fotos ilimitadas y video/música gestionados por YouTube. Melodía de fondo al visitar.",
              },
              {
                icon: <Sparkles className="h-5 w-5 text-accent-foreground" />,
                title: "Para siempre",
                desc: "Pago único. Sin mensualidades ni mantenimientos. Envío a domicilio incluido.",
              },
            ].map((item, idx) => (
            <Card
                key={idx}
                className="border border-border/70 bg-card/80 backdrop-blur shadow-lg shadow-[rgba(109,58,107,0.18)] reveal soft-float"
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

      {/* Cómo funciona */}
      <section
        id="como-funciona"
        className="relative overflow-hidden py-14 md:py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f2ed]/80 via-white to-[#e9dcca]/75" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#c89b3c]/22 to-transparent" />

        <div className="relative container mx-auto px-4 grid gap-10 md:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold reveal">Cómo funciona</h2>
            <p className="text-muted-foreground text-lg max-w-xl reveal delay-1">
              Un proceso simple y respetuoso para crear un tributo digital permanente.
            </p>
            <div className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Adquiere tu código QR",
                  desc: "Escríbenos, resolvemos dudas y recibimos los datos básicos para preparar tu placa.",
                },
                {
                  step: "2",
                  title: "Construye el perfil",
                  desc: "Envía fotos, videos, biografía y música. Puedes editar y actualizar cuando quieras.",
                },
                {
                  step: "3",
                  title: "Comparte y recuerda",
                  desc: "Instala la placa, comparte el QR y permite que familia y amigos dejen mensajes con reacciones.",
                },
              ].map((item) => (
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

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/70 reveal delay-2">
            <video
              className="h-full w-full object-cover"
              src={howDoesItWork}
              controls
              muted
              loop
              poster={fondoo}
            />
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-4 reveal">
              <h2 className="text-3xl md:text-4xl font-semibold">
                La memoria permanece viva
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Creamos un espacio cálido para honrar a quienes amamos: seguro, colaborativo y
                bello en cualquier dispositivo. Un QR que conecta el mundo físico con un tributo
                digital eterno.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/573212564417?text=Hola%20quiero%20saber%20m%C3%A1s%20sobre%20Memorias%20Eternas%20QR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">Hablar por WhatsApp</Button>
                </a>
                <a
                  href="https://www.facebook.com/share/14npzP1jYq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold hover:border-primary/80"
                >
                  <FaFacebook className="h-4 w-4" /> Facebook
                </a>
                <a
                  href="https://www.instagram.com/memorias_terna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold hover:border-primary/80"
                >
                  <FaInstagram className="h-4 w-4" /> Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@memoriasternasqr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold hover:border-primary/80"
                >
                  <FaTiktok className="h-4 w-4" /> TikTok
                </a>
              </div>
            </div>

            <Card className="border border-border/70 bg-card/90 backdrop-blur shadow-xl shadow-[rgba(200,155,60,0.2)] reveal delay-1 soft-float">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                    Qué incluye
                  </p>
                </div>
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <li>· Placa en acero 6x6 con QR personalizado y vitalicio.</li>
                  <li>
                    · Perfil administrable: fotos, videos, biografía, canciones, relatos y
                    mensajes con reacciones.
                  </li>
                  <li>
                    · Acceso privado para la familia y enlaces para compartir con amigos.
                  </li>
                  <li>· Acompañamiento para configurar el perfil y soporte continuo.</li>
                </ul>
                <div className="pt-2">
                  <p className="text-foreground font-semibold text-lg">
                    Una sola inversión. Sin mensualidades.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
