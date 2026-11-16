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

      <script src="https://api.manageull.com.ng/runtime/script" data-manageull-key="mng_site_PLV5KPW4Nc-96law82HBvWk-Bw3aowgTN20H8_GXSwY" data-manageull-site-verification="mng_verify_1wwR8NCTc3etP3eiDfr_WscbNs85o7kk-kl24QaeFD8" crossOrigin="anonymous" async></script>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
