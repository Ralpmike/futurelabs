import type { Metadata } from "next";
import { Inter, Manrope, } from 'next/font/google'
import "./globals.css";
import StateContextProvider from "../app/context";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})


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
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable}  font-sans max-w-[1440px] mx-auto  w-full `}>
        <StateContextProvider>
          {children}
        </StateContextProvider>

      </body>
    </html>
  );
}