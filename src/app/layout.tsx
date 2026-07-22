import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import BackgroundEffects from "@/components/BackgroundEffects";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tcongs Infotech | Premium SaaS Solutions",
  description: "Award-winning, high-end software solutions designed for the future. Experience the next level of cloud architecture and AI-powered enterprise software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SmoothScroll>
          <BackgroundEffects />
          <CustomCursor />
          <div className="noise-bg"></div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
