import type { Metadata } from "next";
import { Figtree, IBM_Plex_Mono, Newsreader } from "next/font/google";

import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrea Protani | Research Scientist & PhD Student",
  description:
    "PhD student at CERN & UPF researching multimodal generative models and agentic systems for neuroscience. Co-founder of Kosmico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <link rel="icon" href="/exp1.svg" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
