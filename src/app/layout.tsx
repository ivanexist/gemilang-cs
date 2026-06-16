import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import ScrollUpButton from "./components/common/ScrollUpButton";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "../../public/font/PlayfairDisplay.ttf",
  variable: "--font-PlayfairDisplay",
  display: "swap",
});

const openSans = localFont({
  src: "../../public/font/OpenSans.ttf",
  variable: "--font-OpenSans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PT Gemilang Cipta Sentosa | Konstruksi Profesional",
    template: "%s | PT Gemilang Cipta Sentosa",
  },
  description:
    "Perusahaan konstruksi profesional yang bergerak dalam bidang Sipil Bangunan, Jetty/Dermaga, dan Pemasangan Instalasi Perpipaan. Berpengalaman lebih dari 15 tahun di Indonesia.",
  keywords: [
    "konstruksi",
    "sipil bangunan",
    "jetty",
    "dermaga",
    "perpipaan",
    "kontraktor Surabaya",
    "PT Gemilang Cipta Sentosa",
  ],
  authors: [{ name: "PT Gemilang Cipta Sentosa" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://gemilangciptasentosa.com",
    siteName: "PT Gemilang Cipta Sentosa",
    title: "PT Gemilang Cipta Sentosa | Konstruksi Profesional",
    description:
      "Perusahaan konstruksi profesional yang bergerak dalam bidang Sipil Bangunan, Jetty/Dermaga, dan Pemasangan Instalasi Perpipaan.",
    images: [
      {
        url: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/Logo-GCS.png",
        width: 400,
        height: 400,
        alt: "PT Gemilang Cipta Sentosa Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Gemilang Cipta Sentosa | Konstruksi Profesional",
    description:
      "Perusahaan konstruksi profesional di bidang Sipil Bangunan, Jetty/Dermaga, dan Instalasi Perpipaan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfairDisplay.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PT Gemilang Cipta Sentosa",
              description:
                "Perusahaan konstruksi profesional yang bergerak dalam bidang Sipil Bangunan, Jetty/Dermaga, dan Pemasangan Instalasi Perpipaan.",
              url: "https://gemilangciptasentosa.com",
              telephone: "+62318522710",
              email: "gemilangciptasentosa@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Pagesangan Agung Baru No.44",
                addressLocality: "Surabaya",
                addressRegion: "Jawa Timur",
                postalCode: "60233",
                addressCountry: "ID",
              },
              areaServed: "Indonesia",
              foundingDate: "2010",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 50,
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollUpButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
