import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Truss",
  description: "Truss Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
