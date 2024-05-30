import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import React from "react";
import { Toaster } from "sonner";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Toaster />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Provider;
