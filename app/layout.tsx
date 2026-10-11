import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lovely Ram — Engineering Leader & Solution Architect",
  description:
    "Engineering leader and solution architect with 14+ years building cloud-native data and SaaS platforms and enterprise Agentic AI systems.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Lovely Ram — Engineering Leader & Solution Architect",
    description: "Experience, architecture, and AI work by Lovely Ram — Tech Lead & Solution Architect.",
    url: "https://example.com",
    siteName: "Lovely Ram",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
