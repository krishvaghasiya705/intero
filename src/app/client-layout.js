"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import initBarba from "@/utils/transitions";

export default function ClientLayout({ children }) {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
    // Initialize Barba after component mount
    if (typeof window !== 'undefined') {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        initBarba();
      }, 0);
    }
  }, []);

  // During SSR or initial client render, return children without Barba wrapper
  if (!isClient) {
    return <div>{children}</div>;
  }

  // Get namespace from pathname
  const namespace = pathname === '/' ? 'home' : pathname.slice(1);

  return (
    <div data-barba="wrapper">
      <div data-barba="container" data-barba-namespace={namespace}>
        {children}
      </div>
    </div>
  );
} 