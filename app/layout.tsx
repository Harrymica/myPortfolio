import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Chidubem Michael Hillary | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 4+ years of experience building scalable, user-centered applications for web and mobile.",
  keywords: ["Full-Stack Developer", "Software Engineer", "React", "Next.js", "ASP.NET Core", "C#"],
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <head>
        <script src="https://api.manageull.com.ng/runtime/script" data-manageull-key="mng_site_Yk6OGPwzgxbGQllhTBJwLkt_QDWUEgFA88usO3CEaJQ" data-manageull-site-verification="mng_verify_SOEhz4YEAzs6iRsEKC5wSWHjG2mXD7lLKT-_NUGqxS0" crossOrigin="anonymous" async></script>
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
