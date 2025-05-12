import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorEffects from "@/components/CursorEffects";

export const metadata = {
  title: 'Mayk Gomes | Portfolio',
  description: 'Portfólio de desenvolvedor full-stack especializado em React, Next.js, Three.js e tecnologias web modernas',
  keywords: ['developer', 'full-stack', 'React', 'Next.js', 'Three.js', 'portfolio', 'web development'],
  authors: [{ name: 'Mayk Gomes' }],
  creator: 'Mayk Gomes',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://maykgomes.dev',
    title: 'Mayk Gomes | Portfolio',
    description: 'Portfólio de desenvolvedor full-stack especializado em React, Next.js, Three.js e tecnologias web modernas',
    siteName: 'Mayk Gomes Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayk Gomes | Portfolio',
    description: 'Portfólio de desenvolvedor full-stack especializado em React, Next.js, Three.js e tecnologias web modernas',
    creator: '@maykgomes',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <title>Mayk Gomes | Portfolio</title>
      <meta name="description" content="Portfolio criado em NextJs com TailwindCss, Canvas, ThreeJs e framemotion, descrevendo toda a experiência de Mayk Gomes como desenvolvedor de Software e sua jornada." />
      <body >
        <CursorEffects/>
        {children}
      </body>
    </html>
  );
}
