import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { QrCode, Heart, Users, Shield, Sparkles, Camera } from "lucide-react";
import logo from "../assets/Logob.png";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="overflow-hidden md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('../public/fondoo.jpg')" }}
      >
        <div className="bg-black/40">
          {/* Contenido */}
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-secondary/10 px-4 py-2 text-sm text-secondary-foreground font-medium">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span>Donde los recuerdos viven para siempre</span>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  alt="Logo de Memorias Eternas QR"
                  className="h-40 w-40 object-contain"
                />
              </div>
              <h1 className="mb-6 font-sans text-5xl font-bold leading-tight tracking-tight text-balance text-foreground md:text-7xl">
                Memorias Eternas QR
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-muted-foreground md:text-2xl text-pretty">
                Mantén viva la memoria de quienes amamos. Un código QR que
                conecta el mundo físico con un tributo digital eterno.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://wa.me/573212564417?text=Hola%20quiero%20saber%20más%20sobre%20Memorias%20Eternas%20QR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg shadow-primary/30"
                  >
                    Comenzar Ahora
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-sans text-4xl font-bold text-balance text-foreground md:text-5xl">
              Un tributo digital que trasciende el tiempo
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Crea un espacio permanente donde familiares y amigos pueden
              honrar, recordar y compartir momentos especiales.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border bg-card transition-all hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <QrCode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-card-foreground">
                  Código QR Personalizado
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Un código único que se coloca en la lápida, conectando el
                  lugar de descanso con un perfil digital completo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:border-secondary/60 hover:shadow-xl hover:shadow-secondary/10">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10 ring-1 ring-secondary/20">
                  <Heart className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-card-foreground">
                  Perfil Conmemorativo
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Historia de vida, fotografías, videos y momentos especiales en
                  un espacio digital hermoso y respetuoso.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-card-foreground">
                  Control Total
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Usuario y contraseña exclusivos para que la familia administre
                  y actualice el perfil cuando lo desee.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-card-foreground">
                  Espacio Colaborativo
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Amigos y familiares pueden compartir sus propios recuerdos,
                  creando un tributo colectivo y vivo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:border-secondary/60 hover:shadow-xl hover:shadow-secondary/10">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10 ring-1 ring-secondary/20">
                  <Camera className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-card-foreground">
                  Multimedia Completo
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Sube fotos, videos y documentos para crear un archivo completo
                  de la vida de tu ser querido.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-all hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                  <Sparkles className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-card-foreground">
                  Para Siempre
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Los recuerdos permanecen accesibles para las generaciones
                  futuras, trascendiendo el tiempo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-sans text-4xl font-bold text-balance text-foreground md:text-5xl">
              Cómo funciona
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Un proceso simple y respetuoso para crear un tributo digital
              permanente.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-foreground">
                    Adquiere tu código QR
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Selecciona el plan que mejor se adapte a tus necesidades y
                    recibe tu código QR personalizado junto con las credenciales
                    de acceso.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-secondary-foreground shadow-lg shadow-secondary/30">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-foreground">
                    Crea el perfil conmemorativo
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Inicia sesión con tus credenciales y personaliza el perfil
                    con fotografías, videos, historia de vida y momentos
                    especiales.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground shadow-lg shadow-accent/30">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-foreground">
                    Coloca el código en la lápida
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Instala el código QR en un lugar visible de la lápida,
                    permitiendo que cualquier visitante pueda acceder al tributo
                    digital.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-foreground">
                    Comparte y colabora
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Invita a familiares y amigos a compartir sus propios
                    recuerdos, creando un espacio colaborativo de memoria y
                    homenaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/5 p-12 text-center shadow-2xl shadow-primary/20">
            <h2 className="mb-4 font-sans text-4xl font-bold text-balance text-foreground md:text-5xl">
              Los recuerdos trascienden el tiempo
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground text-pretty">
              Crea un legado digital que honre la memoria de tus seres queridos
              para las generaciones futuras.
            </p>
            <a
              href="https://wa.me/573212564417?text=Hola%20quiero%20saber%20más%20sobre%20Memorias%20Eternas%20QR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg shadow-primary/30"
              >
                Comenzar Tu Tributo
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-3 text-center md:text-left">
            {/* Logo y nombre */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={logo}
                  alt="Logo de Memorias Eternas QR"
                  className="h-14 w-14 object-contain"
                />
                <span className="text-lg font-bold text-foreground">
                  Memorias Eternas QR
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Donde los recuerdos viven para siempre. Un tributo digital para
                quienes amamos.
              </p>
            </div>

            {/* Información de contacto */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Contacto
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:contacto@memoriaseternasqr.com"
                    className="hover:text-primary"
                  >
                    contacto@memoriaseternasqr.com
                  </a>
                </li>
                <li>
                  Teléfono:{" "}
                  <a
                    href="https://wa.me/573001112233"
                    target="_blank"
                    className="hover:text-primary"
                  >
                    +57 300 111 2233
                  </a>
                </li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Síguenos
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Derechos reservados */}
          <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            © 2025 Memorias Eternas QR. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
