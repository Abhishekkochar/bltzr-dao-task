import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.css";
import 'dotenv/config'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Market",
  description: "NFT Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
