import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"

export const metadata: Metadata = {
  title: "Ghost IDE - Fast Editor for Android",
  description: "The ultimate mobile development environment with support for 15+ programming languages, built-in compilers, and Git integration."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <SmoothScroll />
      </body>
    </html>
  )
}
