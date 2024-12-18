import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Providers } from "@/providers/providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";

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
          <div><ThemeSwitcher/></div>

          <main className="flex items-center justify-center h-max pt-10 max-w-6xl mx-auto px-6">
            {children}
          </main>
          <footer className="relative bottom-0 w-full justify-center items-center flex ">
            footer
          </footer>
        </Providers>
      </body>
    </html>
  );
}
