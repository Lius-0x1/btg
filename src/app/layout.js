import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Before They Graduate",
  description: "Documenting the stories, projects, and journeys of Nigerian undergraduates before they graduate.",
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
      </body>
    </html>
  );
}