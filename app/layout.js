import "./globals.css";
// import { Inter } from 'next/font/google'
import { DM_Sans } from "next/font/google";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Discovery",
  description: "Check latest and trending movies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
