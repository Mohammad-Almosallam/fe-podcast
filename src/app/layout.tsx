import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "../components/layout/Sidebar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { AudioPlayerProvider } from "@/providers/AudioPlayerProvider";

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
        <ReactQueryProvider>
          <AudioPlayerProvider>
            <div className="flex h-screen">
              <Sidebar />
              {children}
            </div>
          </AudioPlayerProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
