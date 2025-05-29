"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from 'next/dynamic';

// Dynamically import Barba initialization with no SSR
const BarbaWrapper = dynamic(() => import('@/components/BarbaWrapper'), {
  ssr: false
});

export default function ClientLayout({ children }) {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // During SSR or initial client render, return children without Barba wrapper
  if (!isClient) {
    return <div>{children}</div>;
  }

  // Get namespace from pathname
  const namespace = pathname === '/' ? 'home' : pathname.slice(1);

  return (
    <BarbaWrapper namespace={namespace}>
      {children}
    </BarbaWrapper>
  );
} 