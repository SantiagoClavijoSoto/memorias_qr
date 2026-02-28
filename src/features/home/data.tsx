import {
  BookOpen,
  Camera,

  Dog,
  Heart,
  Image,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Music,
  Phone,
  RefreshCw,
  Send,
  Shield,
  Sparkles,
  Star,
  TreePine,
  Users,
  Video,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import type {
  FAQItem,
  HighlightItem,
  ProfileType,
  SocialLink,
  StepItem,
  Testimonial,
  UpdateItem,
} from "./types";

export const fondoo = "/fondoo.webp";

export const profileTypes: ProfileType[] = [
  {
    icon: <Heart className="h-7 w-7" />,
    name: "Genérico",
    description: "Para cualquier ser querido",
    color: "text-primary",
  },
  {
    icon: <Users className="h-7 w-7" />,
    name: "Hombre",
    description: "Perfil masculino personalizado",
    color: "text-blue-600",
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    name: "Mujer",
    description: "Perfil femenino personalizado",
    color: "text-pink-500",
  },
  {
    icon: <Star className="h-7 w-7" />,
    name: "Niño",
    description: "Tributo para niños",
    color: "text-sky-500",
  },
  {
    icon: <Star className="h-7 w-7" />,
    name: "Niña",
    description: "Tributo para niñas",
    color: "text-rose-400",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    name: "Militar",
    description: "Con rama de las Fuerzas Armadas",
    color: "text-emerald-600",
  },
  {
    icon: <Dog className="h-7 w-7" />,
    name: "Mascotas",
    description: "Para compañeros de vida",
    color: "text-amber-500",
  },
];

export const highlights: HighlightItem[] = [
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Biografía y momentos especiales",
    desc: "Editor de texto enriquecido para contar su historia",
  },
  {
    icon: <Image className="h-6 w-6 text-primary" />,
    title: "Galería de fotos",
    desc: "Sube hasta 10 fotos especiales de tu ser querido",
  },
  {
    icon: <Video className="h-6 w-6 text-primary" />,
    title: "Videos desde YouTube y dispositivo",
    desc: "Comparte los videos más significativos",
  },
  {
    icon: <Music className="h-6 w-6 text-primary" />,
    title: "Música y canciones favoritas",
    desc: "Agrega las canciones que marcaron su vida",
  },
  {
    icon: <TreePine className="h-6 w-6 text-primary" />,
    title: "Árbol familiar con fotos",
    desc: "Conecta generaciones con un árbol visual",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    title: "Mensajes y tributos públicos",
    desc: "Amigos y familia dejan mensajes con reacciones",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Ubicación del cementerio",
    desc: "Mapa interactivo con Google Maps integrado",
  },
  {
    icon: <Music className="h-6 w-6 text-primary" />,
    title: "Melodía ambiental personalizable",
    desc: "Una melodía que acompaña la visita al perfil",
  },
];

export const steps: StepItem[] = [
  {
    step: "1",
    title: "Contáctanos",
    desc: "Escríbenos por WhatsApp para resolver tus dudas",
    icon: <Phone className="h-6 w-6" />,
  },
  {
    step: "2",
    title: "Creamos tu perfil",
    desc: "Activamos tu QR y te damos acceso a tu panel",
    icon: <LayoutGrid className="h-6 w-6" />,
  },
  {
    step: "3",
    title: "Personaliza",
    desc: "Sube fotos, videos, biografía y mucho más",
    icon: <Camera className="h-6 w-6" />,
  },
  {
    step: "4",
    title: "Recibe tu placa",
    desc: "Envío a domicilio sin costo adicional",
    icon: <Send className="h-6 w-6" />,
  },
];

export const updates: UpdateItem[] = [
  {
    icon: <LayoutGrid className="h-5 w-5 text-primary" />,
    text: "Nuevos diseños de perfiles periódicamente",
  },
  {
    icon: <Shield className="h-5 w-5 text-primary" />,
    text: "Mejoras de rendimiento y seguridad",
  },
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    text: "Funciones solicitadas por la comunidad",
  },
  {
    icon: <RefreshCw className="h-5 w-5 text-primary" />,
    text: "Soporte técnico continuo",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "María García",
    text: "Crear el perfil de mi padre fue una experiencia sanadora. Toda la familia puede visitarlo y dejar mensajes. Es hermoso ver cómo sus amigos también escriben recuerdos.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    text: "La placa QR quedó preciosa en la lápida. Cada vez que vamos, escaneamos y revivimos los mejores momentos juntos. Una forma moderna de mantener viva su memoria.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    text: "Lo usé para mi mascota que me acompañó 15 años. El perfil tiene todas sus fotos y hasta la canción que le ponía. Es un tributo que trasciende.",
    rating: 5,
  },
];

export const faqs: FAQItem[] = [
  {
    question: "¿Qué es Memorias Eternas QR?",
    answer:
      "Es una placa de acero inoxidable con un código QR grabado que, al escanearlo, abre un perfil digital conmemorativo con fotos, videos, biografía, música y mensajes de gratitud para honrar la memoria de tu ser querido.",
  },
  {
    question: "¿Cómo funciona el código QR?",
    answer:
      "El QR se escanea con la cámara de cualquier celular. Al escanearlo, se abre automáticamente el perfil conmemorativo en el navegador, sin necesidad de instalar ninguna aplicación.",
  },
  {
    question: "¿Puedo editar el perfil después?",
    answer:
      "Sí, tienes acceso permanente con usuario y contraseña para actualizar el perfil cuando lo desees: agregar fotos, videos, cambiar la biografía, actualizar la música y más.",
  },
  {
    question: "¿Es un pago único o hay mensualidades?",
    answer:
      "Es un pago único. No hay mensualidades, mantenimientos ni costos ocultos. Tu perfil y placa QR son vitalicios.",
  },
  {
    question: "¿Cómo recibo mi placa?",
    answer:
      "La placa se envía a domicilio sin costo adicional a cualquier parte de Colombia. Recibirás tu placa en acero inoxidable 5x5 cm lista para instalar.",
  },
  {
    question: "¿Pueden dejar mensajes otras personas?",
    answer:
      "Sí, cualquier persona que visite el perfil puede dejar mensajes de amor y gratitud. Estos mensajes también tienen la opción de recibir reacciones de otros visitantes.",
  },
  {
    question: "¿Funciona para mascotas?",
    answer:
      "Sí, tenemos un tipo de perfil especial para mascotas. Puedes crear un tributo completo con fotos, videos y recuerdos de tu compañero de vida.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/profile.php?id=61581062348783",
    label: "Facebook",
    icon: <FaFacebook className="h-5 w-5" />,
  },
  {
    href: "https://www.instagram.com/recuerdos.eternos_qr/?utm_source=ig_web_button_share_sheet",
    label: "Instagram",
    icon: <FaInstagram className="h-5 w-5" />,
  },
  {
    href: "https://www.tiktok.com/@recuerdos_eternos.qr?is_from_webapp=1&sender_device=pc",
    label: "TikTok",
    icon: <FaTiktok className="h-5 w-5" />,
  },
];
