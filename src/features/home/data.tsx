import { Camera, Heart, QrCode, Shield, Sparkles, Users } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import type { InfoCard, HighlightItem, SocialLink, StepItem } from "./types";

export const fondoo = "/fondoo.webp";

export const primaryHighlights: HighlightItem[] = [
  {
    icon: <QrCode className="h-6 w-6 text-primary" />,
    title: "Código QR personalizado",
    desc: "Placa de acero inoxidable 6x6 con tu QR impreso que direcciona al perfil personalizado de tu ser querido, con la información que tú edites.",
    tone: "from-white to-[#f7f2ed]",
  },
  {
    icon: <Heart className="h-6 w-6 text-secondary" />,
    title: "Perfil conmemorativo",
    desc: "Podrás contar la historia y los momentos especiales de tu ser querido por medio de fotos, videos, biografía, canciones, relatos y vivencias.",
    tone: "from-white to-[#e9dcca]/75",
  },
  {
    icon: <Shield className="h-6 w-6 text-foreground" />,
    title: "Control total",
    desc: "Usuario y contraseña para actualizar el perfil cuando lo desees.",
    tone: "from-white to-[#bda9b5]/65",
  },
];

export const collaborationCards: InfoCard[] = [
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    title: "Espacio colaborativo",
    desc: "Podrás compartir con amigos y seres queridos el QR de manera inmediata y segura; también podrán dejar mensajes de amor y gratitud a tu ser querido, estos mensajes tienen la opción de reaccionar con like.",
  },
  {
    icon: <Camera className="h-5 w-5 text-secondary" />,
    title: "Multimedia completo",
    desc: "Al interactuar con el perfil te acompañará una hermosa melodía; podrás subir fotos ilimitadas y los videos y canciones se subirán por medio de nuestro canal de YouTube.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-accent-foreground" />,
    title: "Para siempre",
    desc: "Pago único. Sin mensualidades ni mantenimientos. Envío a domicilio incluido.",
  },
];

export const steps: StepItem[] = [
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
];

export const includesList = [
  "Placa en acero 6x6 con QR personalizado y vitalicio.",
  "Perfil administrable: fotos, videos, biografía, canciones, relatos y mensajes con reacciones.",
  "Acceso privado para la familia y enlaces para compartir con amigos.",
  "Acompañamiento para configurar el perfil y soporte continuo.",
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/share/14npzP1jYq/",
    label: "Facebook",
    icon: <FaFacebook className="h-4 w-4" />,
  },
  {
    href: "https://www.instagram.com/memorias_terna/",
    label: "Instagram",
    icon: <FaInstagram className="h-4 w-4" />,
  },
  {
    href: "https://www.tiktok.com/@memoriasternasqr",
    label: "TikTok",
    icon: <FaTiktok className="h-4 w-4" />,
  },
];
