import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import LayoutClient from "./layout-client";

const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-4.0/web/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-4.0/web/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-4.0/web/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-4.0/web/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-4.0/web/Inter-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-4.0/web/Inter-Black.woff2',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-inter',
  display: 'swap'
})

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Fahad Khan",
  description: "Fahad Khan is a software engineer who builds user-centric, scalable web products.",
  creator: 'Fahad Khan',
  keywords: ['Software Engineer', 'Full-stack Developer', 'Frontend Developer', 'Backend Developer'],
  icons: [
    {
      url: '/images/favicon/icon-16x16.png',
      sizes: '16x16'
    },
    {
      url: '/images/favicon/icon-32x32.png',
      sizes: '32x32'
    },
    {
      rel: 'apple-touch-icon',
      url: '/images/favicon/icon-180x180.png',
      sizes: '180x180'
    },
    {
      url: '/images/favicon/icon-192x192.png',
      sizes: '192x192'
    },
    {
      url: '/images/favicon/icon-512x512.png',
      sizes: '512x512'
    },
  ],
  openGraph: {
    locale: 'en_US',
    siteName: 'Fahad Khan',
    type: 'website',
    title: 'Fahad Khan',
    description: 'Fahad Khan is a software engineer who builds user-centric, scalable web products.',
    images: '/images/og.png',
  },
  twitter: {
    title: 'Fahad Khan',
    description: 'Fahad Khan is a software engineer who builds user-centric, scalable web products.',
    creator: '@kfahad5607',
    site: '@kfahad5607',
    card: 'summary_large_image',
    images: '/images/og.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body
        className={`relative bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
