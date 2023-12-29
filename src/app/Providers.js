// app/providers.tsx
"use client";

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { SessionProvider } from "next-auth/react";

export function Providers({children,  ...props }) {
  // console.log('Providers props', props);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <SessionProvider {...props}>
          {children}
        </SessionProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}