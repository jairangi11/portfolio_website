import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import { themeConfig } from "@/config/theme";

export const metadata: Metadata = {
  title: themeConfig.name,
  description: themeConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
