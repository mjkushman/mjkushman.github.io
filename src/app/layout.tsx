import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Providers } from "@/providers/providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mike's great app",
  description: "Made by Mike",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Providers>
          <Nav />
          <div>
            <ThemeSwitcher />
          </div>

          <main className="relative justify-center h-max pt-10 max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center">{children}</div>
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
