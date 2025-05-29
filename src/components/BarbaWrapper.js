"use client"
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

export default function PageTransitionWrapper({ children }) {
  const wrapperRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !wrapperRef.current) return;

    // Add transition styles
    const style = document.createElement('style');
    style.textContent = `
      .page-transition {
        position: relative;
        z-index: 1;
        will-change: opacity, transform;
      }
      .page-transition * {
        will-change: opacity, transform;
      }
    `;
    document.head.appendChild(style);

    // Handle route change start
    const handleRouteChangeStart = () => {
      if (wrapperRef.current) {
        gsap.to(wrapperRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.inOut'
        });
      }
    };

    // Handle route change complete
    const handleRouteChangeComplete = () => {
      if (wrapperRef.current) {
        gsap.fromTo(wrapperRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.2,
            ease: 'power2.out',
            onComplete: () => {
              // Animate content elements
              const tl = gsap.timeline();
              
              // Animate headings
              const headings = wrapperRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
              if (headings.length > 0) {
                tl.from(headings, {
                  y: 10,
                  opacity: 0,
                  duration: 0.3,
                  stagger: 0.05,
                  ease: 'power2.out'
                });
              }

              // Animate other elements
              const elements = wrapperRef.current.querySelectorAll('p, img, button, a');
              if (elements.length > 0) {
                tl.from(elements, {
                  y: 5,
                  opacity: 0,
                  duration: 0.2,
                  stagger: 0.02,
                  ease: 'power2.out'
                }, '-=0.1');
              }
            }
          }
        );
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleRouteChangeStart);
    router.events?.on('routeChangeStart', handleRouteChangeStart);
    router.events?.on('routeChangeComplete', handleRouteChangeComplete);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleRouteChangeStart);
      router.events?.off('routeChangeStart', handleRouteChangeStart);
      router.events?.off('routeChangeComplete', handleRouteChangeComplete);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [isMounted, router]);

  // During SSR or initial client render, return children without wrapper
  if (!isMounted) {
    return <div>{children}</div>;
  }

  return (
    <div ref={wrapperRef} className="page-transition">
      {children}
    </div>
  );
} 