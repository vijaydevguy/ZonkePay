import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "ZonkePay",
//   description: "ZonkePay",
// };

//SEO contents starting
export const metadata: Metadata = {
  title: 'ZonkePay',
  description: 'ZonkePay - Seamless payments for your business. Accept payments easily and securely with ZonkePay.',
  keywords: [
    'ZonkePay',
    'payments',
    'online payments',
    'merchant',
    'payment gateway',
    'secure payments',
    'South Africa',
    'business payments'
  ],
  authors: [{ name: 'ZonkePay', url: 'https://merchants.zonkepay.com' }],
  openGraph: {
    title: 'ZonkePay',
    description: 'Seamless payments for your business. Accept payments easily and securely with ZonkePay.',
    url: 'https://merchants.zonkepay.com',
    siteName: 'ZonkePay',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZonkePay Open Graph Image',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZonkePay',
    description: 'Seamless payments for your business. Accept payments easily and securely with ZonkePay.',
    images: ['/img/twitter-image.jpg'],
    creator: '@zonkepay',
  },
  icons: {
    icon: [
      { url: '/img/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/img/favicon/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: 'https://merchants.zonkepay.com/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/img/favicon/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/img/favicon/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/img/favicon/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/img/favicon/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/img/favicon/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/img/favicon/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/img/favicon/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/img/favicon/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/img/favicon/apple-icon-180x180.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/img/favicon/manifest.json',
      },
      {
        rel: 'msapplication-TileImage',
        url: '/img/favicon/ms-icon-144x144.png',
      },
    ],
  },
  manifest: '/img/favicon/manifest.json',
  themeColor: '#ffffff',
  applicationName: 'ZonkePay',
};

//SEO contents ending

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link
          rel="icon"
          href="https://merchants.zonkepay.com/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="img/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="img/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="img/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="img/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="img/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="img/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="img/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="img/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="img/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="img/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="img/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="img/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="img/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="img/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </head> */}
      <body className={` ${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
