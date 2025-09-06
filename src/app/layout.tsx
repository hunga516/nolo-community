import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { viVN } from "@clerk/localizations";
import { TRPCProvider } from "@/trpc/client";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nolo Community",
  description: "Cộng đồng Nolo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <ClerkProvider
          appearance={{
            layout: {
              unsafe_disableDevelopmentModeWarnings: true,
            },
          }}
          localization={viVN}
        >
          <TRPCProvider>
            <Toaster />
            {children}
          </TRPCProvider>
          <div id="modal-root"></div>
        </ClerkProvider>
      </body>
    </html>
  );
}
