import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <title>Mayk Gomes | Portfolio</title>
      <meta name="description" content="Portfolio criado em NextJs com TailwindCss, Canvas, ThreeJs e framemotion, descrevendo toda a experiência de Mayk Gomes como desenvolvedor de Software e sua jornada." />
      <body >
        {children}
      </body>
    </html>
  );
}
