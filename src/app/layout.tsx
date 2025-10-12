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
export const revalidate = 60; // Revalidate every 60 seconds
// export const dynamic = "force-dynamic";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Navbar />

        <main>{children}</main>
        <Footer />
        <ScrollUpButton />
      </body>
    </html>
  );
}
