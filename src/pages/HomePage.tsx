import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import howDoesItWork from "../assets/videos/howDoesItWork.mp4";
import { QrCode, Heart, Users, Shield, Sparkles, Camera } from "lucide-react";
import logo from "../assets/Logob.png";
import fondoo from "../../public/fondoo.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 md:py-28"
        style={{ backgroundImage: `url(${fondoo})` }}
        aria-label="Hero - Memorias Eternas QR"
      >
        {/* Overlay ligero para contraste (ajustable) */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/30 pointer-events-none" />

        {/* Logo fijo en la esquina superior izquierda */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-30">
          <img
            src={logo}
            alt="Logo de Memorias Eternas QR"
            className="h-12 w-12 md:h-20 md:w-20 object-contain rounded-lg"
          />
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="mx-auto max-w-3xl text-center text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-3 py-1 text-sm text-zinc-200 font-medium">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span>Donde los recuerdos viven para siempre</span>
            </div>

            <h1 className="mb-4 font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
              Memorias Eternas QR
            </h1>

            <p className="mb-6 text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto">
              Mantén viva la memoria de quienes amamos. Un código QR que conecta
              el mundo físico con un tributo digital eterno.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/573212564417?text=Hola%20quiero%20saber%20m%C3%A1s%20sobre%20Memorias%20Eternas%20QR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 md:px-8 md:py-3 shadow-lg shadow-primary/30"
                >
                  Comenzar Ahora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Un tributo digital que trasciende el tiempo
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              Crea un espacio permanente donde familiares y amigos pueden honrar,
              recordar y compartir momentos especiales.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <Card className="border-border bg-card transition-all hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <QrCode className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg md:text-2xl font-bold text-card-foreground">
                  Código QR Personalizado
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  Es una placa de acero inoxidable de 6x6 con   con tu QR impreso que direcciona al perfil personalizado de tu ser querido , con la información que tú edites.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-border bg-card transition-all hover:border-secondary/60 hover:shadow-xl hover:shadow-secondary/10">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-secondary/10 ring-1 ring-secondary/20">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-lg md:text-2xl font-bold text-card-foreground">
                  Perfil Conmemorativo
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  Podrás contar la historia y los momentos especiales de tu ser querido por medio de fotos,videos,biografía , canciones, relatos y vivencias
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-border bg-card transition-all hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg md:text-2xl font-bold text-card-foreground">
                  Control Total
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  Usuario y contraseña para que la familia administre y actualice
                  el perfil cuando lo desee.
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="border-border bg-card transition-all hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg md:text-2xl font-bold text-card-foreground">
                  Espacio Colaborativo
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  Podrás compartir con amigos y seres queridos el QR de manera inmediata y segura , también podrán dejar mensajes de amor y gratitud  a tu ser querido , estos mensajes tienen la opción de   reaccionar con like.
                </p>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="border-border bg-card transition-all hover:border-secondary/60 hover:shadow-xl hover:shadow-secondary/10">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-secondary/10 ring-1 ring-secondary/20">
                  <Camera className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-lg md:text-2xl font-bold text-card-foreground">
                  Multimedia Completo
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  Al momento de interactuar con el perfil te acompañará una hermosa melodía , podrás subir fotos ilimitadas y los vídeos y canciones se subirán por medio de nuestro canal de Youtube.
                </p>
              </CardContent>
            </Card>

            {/* Card 6 */}
            <Card className="border-border bg-card transition-all hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
                  <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg md:text-2xl font-bold text-card-foreground">
                  Para Siempre
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  Nuestro QR es único y vitalicio no tendrás que pagar mensualidades ni mantenimientos con un único pago te enviaremos tu placa a domicilio y para siempre
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/40 py-12 md:py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-8">
              <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-bold">
                Cómo funciona
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
                Un proceso simple y respetuoso para crear un tributo digital
                permanente.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-sm">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg md:text-2xl font-semibold">
                    Adquiere tu código QR
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    1. Escríbenos y resolveremos tus dudas. <br />
                    2. Suministra datos básicos (nombre, teléfono, dirección,
                    correo). <br />
                    3. Te enviamos un correo con el link para generar contraseña
                    y activamos tu QR. <br />
                    4. Accede y edita el perfil. <br />
                    5. Despachamos tu placa sin costo a domicilio.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold shadow-sm">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg md:text-2xl font-semibold">
                    Crea el perfil conmemorativo
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Inicia sesión y personaliza el perfil con fotos, videos e
                    historias.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold shadow-sm">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg md:text-2xl font-semibold">
                    Coloca el código en la lápida
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Instala el QR en un lugar visible para que los visitantes
                    accedan al tributo digital.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-sm">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg md:text-2xl font-semibold">
                    Comparte y colabora
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Invita a familiares y amigos a contribuir con recuerdos y
                    mensajes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video responsive */}
          <div className="flex justify-center items-center">
            <video
              src={howDoesItWork}
              controls
              className="w-130 h-130 max-w-xl rounded-2xl shadow-xl border border-border"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/5 p-8 md:p-12 text-center shadow-2xl">
            <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-bold">
              Los recuerdos trascienden el tiempo
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Crea un legado digital que honre la memoria de tus seres queridos
              para las generaciones futuras.
            </p>
            <a
              href="https://wa.me/573212564417?text=Hola%20quiero%20saber%20m%C3%A1s%20sobre%20Memorias%20Eternas%20QR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 md:px-8 md:py-3 shadow-lg">
                Comenzar Tu Tributo
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#002246] text-white overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 pt-12 pb-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-3">
                <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
                <span className="text-lg font-bold tracking-wide">
                  Memorias Eternas QR
                </span>
              </div>
              <p className="text-sm text-gray-300 max-w-xs">
                Donde los recuerdos viven para siempre. Un tributo digital para
                quienes amamos.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Contacto</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  Email:{" "}
                  <a href="mailto:reternosqr@gmail.com" className="hover:text-[#DFAC00]">
                    reternosqr@gmail.com
                  </a>
                </li>
                <li>
                  Teléfono:{" "}
                  <a href="https://wa.me/573212564417" target="_blank" className="hover:text-[#DFAC00]">
                    +57 321 256 4417
                  </a>
                </li>
                <li>Gigante-Huila, Colombia</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Síguenos</h3>
              <ul className="flex justify-center md:justify-start gap-4">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61581062348783&locale=es_LA" className="hover:text-[#DFAC00] transform hover:scale-110" target="blank">
                    <FaFacebook className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/recuerdos.eternos_qr/" className="hover:text-[#DFAC00] transform hover:scale-110" target="blank">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@recuerdos_eternos.qr" className="hover:text-[#DFAC00] transform hover:scale-110" target="blank">
                    <FaTiktok className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[#DFAC00]/70 to-transparent" />

          <div className="mt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#DFAC00] font-semibold">Memorias Eternas QR</span>. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
