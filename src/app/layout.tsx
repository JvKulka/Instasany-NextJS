import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Instasany",
  description: "Projeto criado para estudo em Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={epilogue.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
