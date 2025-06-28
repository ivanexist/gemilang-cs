import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import ScrollUpButton from "./components/common/ScrollUpButton";
import Footer from "./components/common/Footer";

export const metadata: Metadata = {
  title: "PT Gemilang Cipta Sentosa",
  description:
    "Perusahaan yang bergerak dalam bidang konstruksi Sipil Bangunan, Jetty/Dermaga, dan Pemasangan Instalasi Perpipaan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="relative top-0 z-100">
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
        <ScrollUpButton />
      </body>
    </html>
  );
}
