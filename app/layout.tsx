import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PopupDescuento from "@/components/ui/PopupDescuento";
import WhatsAppFlotante from "@/components/ui/WhatsAppFlotante";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const elmSans = localFont({
  src: [
    { path: "../public/fonts/ElmsSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/ElmsSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/ElmsSans-Medium.ttf", weight: "500" },
    { path: "../public/fonts/ElmsSans-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/ElmsSans-Bold.ttf", weight: "700" },
  ],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Lusso Travel | Agencia de viajes a tu medida",
    template: "%s | Lusso Travel",
  },
  description:
    "Agencia de viajes en Colombia. Diseñamos experiencias a tu medida: Caribe colombiano, Europa, luna de miel, viajes en familia y más. Cotiza por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sourceSans.variable} ${elmSans.variable}`}>
      <body className="font-body">
        <Navbar />
        {children}
        <Footer />
        <PopupDescuento />
        <WhatsAppFlotante />

      </body>
    </html>
  );
}