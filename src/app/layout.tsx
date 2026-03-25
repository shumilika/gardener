import type { Metadata } from "next";
import "../styles/globals.css";
import { Figtree } from "next/font/google";
import { AppProvider } from "@/context/AppContext";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gardener",
  description: "Need gardening service?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.className}>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
