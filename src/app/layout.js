import { DM_Sans, Fjalla_One, Rufina } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MainLayout from "@/components/MainLayout/MainLayout";

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: "Ashraful - Web Designer & Developer",
  description: "web designer & developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.className} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}