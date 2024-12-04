import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

export const metadata: Metadata = {
  title: {
    default: "A Volar App",
    template: `%s - A Volar App`,
  },
  description: "A Volar App",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen bg-gradient-to-br from-orange-300 to-cyan-300">
            <NavigationBar />
            <main className="flex-1">{children}</main>
            {/* <footer className="w-full flex items-center justify-center py-3">
              Test
            </footer> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
