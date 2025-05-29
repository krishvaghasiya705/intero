"use client"
import Footer from "@/common/footer";
import Header from "@/common/header";
import "./globals.scss";
import { useEffect } from "react";
import { initBarba } from "@/utils/transitions";

function BarbaWrapper({ children }) {
  useEffect(() => {
    // Initialize Barba after component mount
    if (typeof window !== 'undefined') {
      initBarba();
    }
  }, []);

  return (
    <div data-barba="wrapper">
      <div data-barba="container" data-barba-namespace="home">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BarbaWrapper>
          {children}
        </BarbaWrapper>
      </body>
    </html>
  );
}
