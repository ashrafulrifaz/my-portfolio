'use client'
import { useState } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MainLayout({children}) {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <LoadingAnimation
        name="ASHRAFUL"
        duration={1500}
        onComplete={() => setLoading(false)}
      />
    );
  }

  return (
    <div>
        <Header />
          <main className="px-5 lg:px-60">{children}</main>
        <Footer />
    </div>
  );
}