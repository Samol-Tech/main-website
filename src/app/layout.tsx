import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samoltechconsult.name.ng"),
  title: {
    default: "SamolTech Consult",
    template: "%s | SamolTech Consult",
  },
  description: "SamolTech Consult builds websites, mobile apps, and cloud systems engineered to grow your business — not just launch products. Get a free project quote today.",
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
    description: "SamolTech Consult builds websites, mobile apps, and cloud systems engineered to grow your business — not just launch products. Get a free project quote today.",
    url: "https://samoltechconsult.name.ng",
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
    description: "SamolTech Consult builds websites, mobile apps, and cloud systems engineered to grow your business — not just launch products. Get a free project quote today.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set the dark class before first paint so there's no flash of the wrong theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              try {
                var stored = localStorage.getItem("theme");
                var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                if (theme === "dark") document.documentElement.classList.add("dark");
              } catch (e) {}
            })();`,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} antialiased font-display bg-background-light dark:bg-background-dark text-[#111318] dark:text-gray-200`}>
        {children}
      </body>
    </html >
  );
}
