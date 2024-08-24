import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Cubicle 3.0",
<<<<<<< Updated upstream
  description: "DUHacks 3.0",
  icons: "/assets/images/codeCubicle.jpg",
=======
  description: "Code Cubicle 3.0 isn’t just an event; it’s a playground for innovators where developers, designers, and tech enthusiasts come together to bring their boldest ideas to fruition. 🌍",
  icons: "/assets/images/CodeCubicle.svg",
>>>>>>> Stashed changes
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body className={inter.className}>{children}
        <Analytics />
        <SpeedInsights />
        
      </body>
    </html>

  );
}
