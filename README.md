# Memorias Eternas QR – Landing React

Landing page para presentar el servicio de placas con código QR y perfil conmemorativo.

## Stack
- React + TypeScript + Vite
- Tailwind (via `@apply` en `src/index.css`)
- React Router (sólo para smooth scroll y estructura)
- lucide-react e iconos de redes

## Estructura rápida
- `src/main.tsx`: monta `RootLayout` + `HomePage`.
- `src/pages/HomePage.tsx`: página completa (hero, destacados, cómo funciona, cierre).
- `src/index.css`: paleta, fuentes y estilos base.
- `src/components/ui/button.tsx` y `card`: UI mínima.
- `public/`: assets estáticos (logo, fondo, video).

## Configuración y scripts
1) Instalar dependencias:
```bash
npm install
```
2) Desarrollo:
```bash
npm run dev -- --host 127.0.0.1 --port 3000
```
3) Build estático:
```bash
npm run build
```
4) Preview del build:
```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

## Personalización
- Textos y enlaces de contacto/redes: editar `src/pages/HomePage.tsx` (botones de WhatsApp y redes).
- Paleta y gradientes: `src/index.css` (`:root` variables y fondo radial).
- CTA/buttons: `src/components/ui/button.tsx`.

## Notas del diseño actual
- Paleta cálida vinotinto/dorado con gradientes y neomorfismo suave en cards.
- Animaciones de entrada con IntersectionObserver (`.reveal`) y suavizado al hover (`.soft-float`).
- Hero con fondo degradado y CTA a WhatsApp, bloque “Cómo funciona” con video incrustado y cards informativas.
