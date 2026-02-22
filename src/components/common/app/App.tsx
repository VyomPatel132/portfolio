"use client";

import React from "react";
import { ThemeProvider } from "@/components/providers";
import { FloatingNav } from "@/components/ui";
import { navItems } from "@/data";
import { Footer } from "../footer";
import { usePathname } from "next/navigation";

export const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const isStudio = pathname.includes("/studio");

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {!isStudio && <FloatingNav navItems={navItems} />}
      {children}
      {!isStudio && <Footer />}
    </ThemeProvider>
  );
};
