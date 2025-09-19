import type { Metadata } from "next";
import Header from "@/components/Header";
import GlobalFooter from "@/components/GlobalFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Storyism - IP sovereignty on-chain",
  description: "A community movement to protect creativity, enable fair royalties, and unlock remix culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <GlobalFooter />
      </body>
    </html>
  );
}
