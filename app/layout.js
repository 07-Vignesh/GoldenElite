import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GoldenElite - AI Career Coach",
  description: "AI-powered career guidance platform.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/GoldenEliteicon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple:    "/GoldenEliteicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/GoldenEliteicon.png" />
        </head>
        <body className={inter.className}>
          <div className="grid-background" />
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Header />
            <main className="min-h-screen" style={{ position: "relative", zIndex: 1, backgroundColor: "#080808" }}>
              {children}
            </main>
            <Toaster richColors />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-NNGSLBEB2L" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NNGSLBEB2L');`
            }} />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}