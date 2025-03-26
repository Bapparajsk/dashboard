import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import React from "react";
import {Sidebar} from "@/components/sidebar";
import {NuqsProvider} from "@/app/NuqsProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"dark"}>
      <body className={`${geistSans.variable} ${geistMono.variable} w-full max-w-[1900px] mx-auto h-screen font-poppins`}>
       <NuqsProvider>
          <Providers>
                <div className={"flex"}>
                  <Sidebar />
                  <main className={"flex-1 w-full h-screen p-2"}>
                      <div className={"w-full h-full border border-gray-600 overflow-hidden rounded-2xl"}>
                          {children}
                      </div>
                  </main>
                </div>
          </Providers>
       </NuqsProvider>
      </body>
    </html>
  );
}
