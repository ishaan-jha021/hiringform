import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Startup School | Careers",
  description: "Join the mission. We hire builders who have the 'Keeda' to change the ecosystem.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Script
          src="https://cdn.counter.dev/script.js"
          data-id="2806e04d-b124-48cb-82a3-35ecd0d92aa8"
          data-utcoffset="6"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
