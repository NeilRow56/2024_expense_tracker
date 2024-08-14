import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import RootProviders from "@/providers/RootProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dudget Tracker",
  description: "Code with Kilton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <RootProviders>
          {children}
          <Toaster richColors position="bottom-right" />
        </RootProviders>
      </body>
    </html>
  );
}
