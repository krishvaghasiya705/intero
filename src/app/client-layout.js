"use client"
import { useEffect, useState } from "react";
import initBarba from "@/utils/transitions";

export default function ClientLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Initialize Barba after component mount
    if (typeof window !== 'undefined') {
      initBarba();
    }
  }, []);

  if (!isClient) {
    return <div>{children}</div>;
  }

  return (
    <div data-barba="wrapper">
      <div data-barba="container" data-barba-namespace="home">
        {children}
      </div>
    </div>
  );
} 