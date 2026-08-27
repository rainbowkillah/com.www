import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rainbowsmokeofficial.com"),
  title: {
    default: "RainbowSmoke — Mr. RainbowSmoke",
    template: "%s · RainbowSmoke",
  },
  description:
    "Bold rainbow brand for live entertainment and creative content. Built for creators. Powered by community.",
  openGraph: {
    title: "RainbowSmoke — Mr. RainbowSmoke",
    description:
      "Bold rainbow brand for live entertainment and creative content. Built for creators. Powered by community.",
    url: "https://rainbowsmokeofficial.com",
    siteName: "RainbowSmoke",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ojc8wen.css" />
        <link rel="stylesheet" href="https://use.typekit.net/gsl6svi.css" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
