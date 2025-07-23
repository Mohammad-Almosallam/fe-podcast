import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "./components/layout/Sidebar";
import Providers from "./providers";

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
        <Providers>
          <div className="flex h-screen">
            <Sidebar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
