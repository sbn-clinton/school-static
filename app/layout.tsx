import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Academics",
    link: "/academics",
  },
  {
    name: "Admissions",
    link: "/admissions",
  },
  {
    name: "Campus Life",
    link: "/campus-life",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const metadata = {
  title: "SBN Academy",
  description: "A premier educational institution dedicated to excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative w-full">
            <FloatingNav navItems={navItems} />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
