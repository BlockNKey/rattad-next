import type { Metadata } from "next";
import "styles/globals.css";

export const metadata: Metadata = {
  title: "Rattad24",
  description:
    "Through our online store, you can purchase new or used tires for your car. All tires are immediately available in stock!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
