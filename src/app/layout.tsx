import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Nav/>
        <main className="row-start-3 flex flex-col items-center justify-center h-max ">

        {children}
        </main>
      <footer className="absolute bottom-0 w-full justify-center items-center flex ">
        footer
      </footer>
      </body>
    </html>
  );
}
