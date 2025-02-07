import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ModalProvider } from "@/provider/modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog | Curiosidade sem limites",
  description:
    "Por quê? Porque a curiosidade é a verdadeira essência do conhecimento.",
  keywords: [
    "tecnologia, finanças, programação, curiosidades, inovação, aprendizado, desenvolvimento, transformação digital, exploração de ideias",
  ],
  icons: "/favicon.png",

  openGraph: {
    title: "Blog | Curiosidade sem limites",
    images: [`${process.env.NEXT_PUBLIC_URL}/mundo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
