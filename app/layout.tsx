import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pg-website-chi.vercel.app"),

  title: "StayNest Premium PG | Comfortable PG Accommodation",

  description:
    "StayNest Premium PG offers comfortable, safe and affordable PG accommodation with modern facilities, AC rooms, Wi-Fi, food and 24/7 security.",

  keywords: [
    "PG accommodation",
    "Premium PG",
    "PG in Greater Noida",
    "Paying Guest",
    "Student PG",
    "Working Professional PG",
  ],

  authors: [
    {
      name: "StayNest Premium PG",
    },
  ],

  openGraph: {
    title: "StayNest Premium PG",
    description:
      "Comfortable, safe and affordable PG accommodation with modern facilities.",
    url: "https://pg-website-chi.vercel.app",
    siteName: "StayNest Premium PG",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "/og-image.png",
        width: 1600,
        height: 900,
        alt: "StayNest Premium PG",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "StayNest Premium PG",
    description:
      "Comfortable, safe and affordable PG accommodation.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}