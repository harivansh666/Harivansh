import Providers from "./providers";
import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Settings } from "@/components/settings";

const customFont = localFont({
  src: "../fonts/Geist_Variable-s.p.92592eb2.woff2",
  variable: "--font-custom-geist",
  display: "swap",
});

const analyticsDomain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
const analyticsScriptUrl = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_URL;

const siteUrl = "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Harivansh - Developer, writer, creator.",
    template: "%s – Harivansh",
  },
  description:
    "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.",
  openGraph: {
    title: "Harivansh - Developer, writer, creator.",
    description:
      "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.",
    url: siteUrl,
    siteName: "Harivansh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harivansh - Developer, writer, creator.",
    description:
      "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        customFont.variable,
        inter.variable,
        schibstedGrotesk.variable,
        GeistSans.variable,
        "font-sans antialiased",
      )}
      suppressHydrationWarning
    >
      <body className={cn("font-display bg-theme-bg")}>
        <Settings />
        <Navbar />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
        {analyticsDomain && analyticsScriptUrl ? (
          <Script
            src={analyticsScriptUrl}
            data-domain={analyticsDomain}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
