import type { Metadata } from "next";
import Script from 'next/script'
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { Footer } from "./footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "SamolTech Consult",
  description: "SamolTech Consult delivers innovative, secure, and scalable digital solutions to propel your business forward. We are your trusted partner for cutting-edge software development.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/image/logo.jpeg',
        href: '/image/logo.jpeg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/image/logo.jpeg',
        href: '/image/logo.jpeg',
      },
    ],
  },
  openGraph: {
    title: "SamolTech Consult",
    description: "SamolTech Consult delivers innovative, secure, and scalable digital solutions to propel your business forward. We are your trusted partner for cutting-edge software development.",
    url: "https://samol.vercel.app",
    siteName: "SamolTech",
    images: [
      {
        url: "/image/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "SamolTech Consult",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SamolTech Consult",
    description: "SamolTech Consult delivers innovative, secure, and scalable digital solutions to propel your business forward. We are your trusted partner for cutting-edge software development.",
    images: ["/image/logo.jpeg"],
    creator: "@abiodun_sam_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" ></script>
        <script src="/app.js"></script>
      </head>
      <body className={`${manrope.variable} antialiased font-display bg-background-light dark:bg-background-dark text-[#111318] dark:text-gray-200`}>
        <div className="flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html >
  );
}
