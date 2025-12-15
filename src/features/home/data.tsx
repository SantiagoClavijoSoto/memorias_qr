import { Camera, Heart, QrCode, Shield, Sparkles, Users } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import type { InfoCard, HighlightItem, SocialLink, StepItem } from "./types";

export const fondoo = "/fondoo.webp";

export const primaryHighlights: HighlightItem[] = [
  {
    icon: <QrCode className="h-6 w-6 text-primary" />,
    title: "Código QR personalizado",
    desc: "Placa de acero inoxidable 6x6 con tu QR impreso que direcciona al perfil personalizado de tu ser querido, con la información que tú edites.",
    tone: "from-white to-[#e6eef9]",
  },
  {
    icon: <Heart className="h-6 w-6 text-secondary" />,
    title: "Perfil conmemorativo",
    desc: "Podrás contar la historia y los momentos especiales de tu ser querido por medio de fotos, videos, biografía, canciones, relatos y vivencias.",
    tone: "from-white to-[#f7f0dd]",
  },
  {
    icon: <Shield className="h-6 w-6 text-foreground" />,
    title: "Control total",
    desc: "Usuario y contraseña para actualizar el perfil cuando lo desees.",
    tone: "from-white to-[#dfeaf5]/75",
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
    desc: "Nuestro QR es único y vitalicio: no tendrás que pagar mensualidades ni mantenimientos; con un único pago te enviaremos tu placa a domicilio y para siempre.",
  },
];

export const steps: StepItem[] = [
  {
    step: "1",
    title: "Nos escribes",
    desc: "Nuestro equipo estará atento para explicarte y despejar dudas.",
  },
  {
    step: "2",
    title: "Datos básicos",
    desc: "Nos suministras nombre, teléfono, dirección y correo.",
  },
  {
    step: "3",
    title: "Genera tu contraseña",
    desc: "Te enviaremos un correo con un link para crear una contraseña segura.",
  },
  {
    step: "4",
    title: "Activamos tu QR",
    desc: "Con la contraseña creada, activamos tu código QR.",
  },
  {
    step: "5",
    title: "Acceso editable",
    desc: "Recibirás un segundo correo para ingresar con tu contraseña a la parte editable del perfil.",
  },
  {
    step: "6",
    title: "Envío sin costo",
    desc: "Te enviamos tu placa con el QR a domicilio, sin costo adicional.",
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
    href: "https://www.facebook.com/profile.php?id=61581062348783",
    label: "Facebook",
    icon: <FaFacebook className="h-4 w-4" />,
  },
  {
    href: "https://www.instagram.com/recuerdos.eternos_qr/?utm_source=ig_web_button_share_sheet",
    label: "Instagram",
    icon: <FaInstagram className="h-4 w-4" />,
  },
  {
    href: "https://www.tiktok.com/@recuerdos_eternos.qr?is_from_webapp=1&sender_device=pc",
    label: "TikTok",
    icon: <FaTiktok className="h-4 w-4" />,
  },
];
