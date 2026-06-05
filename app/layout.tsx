import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TikTok на максимум — Командний центр учня",
  description: "Твій особистий центр управління курсом",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
