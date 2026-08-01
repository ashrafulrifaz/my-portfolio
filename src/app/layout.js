import { DM_Sans, Fjalla_One, Rufina } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
    <html
      lang="en"
      className={`${dmSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="px-5 lg:px-60">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
