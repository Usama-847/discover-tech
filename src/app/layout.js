import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { organizationSchema, websiteSchema } from "@/utils/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Discover Tech",
  description:
    "Discover Tech is a leading technology solutions company specializing in web development, mobile app development, and AI/ML/LLM-powered innovations.",
  keywords: [
    "web development",
    "mobile app development",
    "AI",
    "LLM",
    "tech company",
    "software development",
    "Discover Tech",
  ],
  metadataBase: new URL("https://www.discovertech.com.pk/"),
  openGraph: {
    title: "Discover Tech",
    description:
      "Discover Tech builds modern digital products using web, mobile, AI, and LLM technologies.",
    url: "https://www.discovertech.com.pk/",
    siteName: "Discover Tech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.discovertech.com.pk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Discover Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Tech",
    description:
      "Discover Tech builds modern digital products using web, mobile, AI, and LLM technologies.",
    site: "@DiscoverTech",
    images: ["https://www.discovertech.com.pk/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MP8CS3QX');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1443031700216063');
              fbq('track', 'PageView');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MP8CS3QX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1443031700216063&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
