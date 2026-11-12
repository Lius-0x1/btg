import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";

export const metadata = {
  metadataBase: new URL("https://beforetheygraduate.app"),

  title: {
    default: "Before They Graduate",
    template: "%s | Before They Graduate",
  },

  description:
    "Discover the stories, journeys, projects and experiences of Nigerian undergraduates before they graduate.",

  applicationName: "Before They Graduate",

  openGraph: {
    title: "Before They Graduate",
    description:
      "Documenting the stories, projects and journeys of Nigerian undergraduates before graduation.",
    siteName: "Before They Graduate",
    locale: "en_NG",
    type: "website",
    url: "https://beforetheygraduate.app",
  },

  twitter: {
    card: "summary_large_image",
    title: "Before They Graduate",
    description:
      "The stories, projects and journeys of Nigerian undergraduates.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-17XP58JYL0" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-17XP58JYL0');`}
        </Script>
        <div className="hero-glow"></div>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}