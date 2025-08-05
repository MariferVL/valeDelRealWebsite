import "./globals.css";
import { Suspense } from "react";
import Loading from "./dashboard/loading";
import LayoutClient from "@/components/LayoutClient";
import { montserrat, great_vibes } from "./fonts";

export const metadata = {
  title: "Valeria Del Real - Escuela de Sexualidad Sagrada Latinoamericana",
  description:
    "Descubre las formaciones, talleres, retiros y acompañamiento individual de Valeria Del Real. Explora la sexualidad sagrada y sanación integral.",
  keywords:
    "terapia, sexualidad sagrada, formaciones, diplomados, retiros, constelaciones familiares, talleres vivenciales, acompañamiento en sexualidad, bienestar integral, Valeria Del Real, canalización, estudio, renovación, terapeuta, Chile, extranjero",
  author: "María-Fernanda Villalobos López",
  image: "/images/mediaLogo.webp",
  url: "https://valeriadelreal.web.app/",
  siteName: "Valeria Del Real - Terapeuta en Sexualidad Sagrada",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${great_vibes.variable}`}
    >
      <head>
        <link rel="preload" href="/images/heroe.webp" as="image" />
      </head>
      {/* CAMBIO CLAVE: Usamos min-h-screen para permitir que el contenido crezca y haga scroll */}
      <body className="flex flex-col min-h-screen bg-white">
        <Suspense fallback={<Loading />}>
          <LayoutClient>{children}</LayoutClient>
        </Suspense>
      </body>
    </html>
  );
}
