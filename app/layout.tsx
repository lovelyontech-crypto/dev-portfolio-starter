import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — Software Engineer & Open Source",
  description:
    "Software engineer building useful tools, sharing what I learn, and contributing to open source.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Your Name — Software Engineer & Open Source",
    description: "Projects, writing, and open-source work by Your Name.",
    url: "https://example.com",
    siteName: "Your Name",
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
