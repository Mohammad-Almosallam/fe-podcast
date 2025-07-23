import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podbay Clone",
  description: "Podcast discovery app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="font-sans text-white overflow-hidden bg-[var(--color-bg-main)]">
        {children}
      </body>
    </html>
  );
}
