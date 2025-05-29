"use client"
import { useEffect, useRef, useState } from 'react';
import barba from '@barba/core';
import gsap from 'gsap';

export default function BarbaWrapper({ children, namespace }) {
  const wrapperRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !wrapperRef.current) return;

    // Initialize Barba only after wrapper is present
    barba.init({
      wrapper: '[data-barba="wrapper"]',
      container: '[data-barba="container"]',
      preventRunning: true,
      transitions: [{
        name: 'default-transition',
        async leave(data) {
          const done = this.async();
          
          // Create transition elements
          const existingOverlay = document.querySelector('.transition-overlay');
          if (!existingOverlay) {
            const overlay = document.createElement('div');
            overlay.className = 'transition-overlay';
            document.body.appendChild(overlay);
          }

          // Animate out current page
          if (data.current.container) {
            await gsap.to(data.current.container, {
              opacity: 0,
              duration: 0.3,
              ease: 'power2.inOut'
            });
          }

          // Play transition animation
          await gsap.to('.transition-overlay', {
            y: 0,
            duration: 0.4,
            ease: 'power2.inOut'
          });
          
          done();
        },
        async enter(data) {
          // Reset transition elements
          gsap.set('.transition-overlay', {
            y: '-100%'
          });

          // Animate in new page
          if (data.next.container) {
            await gsap.fromTo(data.next.container,
              { 
                opacity: 0
              },
              { 
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out'
              }
            );
          }

          // Animate out transition overlay
          await gsap.to('.transition-overlay', {
            y: '100%',
            duration: 0.4,
            ease: 'power2.inOut'
          });

          // Animate page elements
          const tl = gsap.timeline();
          
          // Animate all headings
          const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          if (headings.length > 0) {
            tl.from(headings, {
              y: 20,
              opacity: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out'
            });
          }

          // Animate paragraphs
          const paragraphs = document.querySelectorAll('p');
          if (paragraphs.length > 0) {
            tl.from(paragraphs, {
              y: 15,
              opacity: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: 'power2.out'
            }, '-=0.3');
          }

          // Animate images
          const images = document.querySelectorAll('img');
          if (images.length > 0) {
            tl.from(images, {
              scale: 0.95,
              opacity: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: 'power2.out'
            }, '-=0.3');
          }

          // Animate buttons and links
          const buttons = document.querySelectorAll('button, a');
          if (buttons.length > 0) {
            tl.from(buttons, {
              y: 10,
              opacity: 0,
              duration: 0.4,
              stagger: 0.05,
              ease: 'power2.out'
            }, '-=0.2');
          }
        }
      }]
    });

    // Add styles for transition elements
    const style = document.createElement('style');
    style.textContent = `
      .transition-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        z-index: 999;
        pointer-events: none;
        transform: translateY(-100%);
        will-change: transform;
      }
      [data-barba="container"] {
        position: relative;
        z-index: 1;
        will-change: opacity, transform;
      }
    `;
    document.head.appendChild(style);

    // Handle CSS loading during page transitions
    barba.hooks.before(() => {
      // Remove any existing transition overlay
      const existingOverlay = document.querySelector('.transition-overlay');
      if (existingOverlay) {
        existingOverlay.remove();
      }
    });

    barba.hooks.after(() => {
      // Scroll to top after page transition
      window.scrollTo(0, 0);
    });

    // Cleanup
    return () => {
      barba.destroy();
      const overlay = document.querySelector('.transition-overlay');
      if (overlay) {
        overlay.remove();
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [isMounted]);

  // During SSR or initial client render, return children without Barba wrapper
  if (!isMounted) {
    return <div>{children}</div>;
  }

  return (
    <div data-barba="wrapper" ref={wrapperRef}>
      <div data-barba="container" data-barba-namespace={namespace}>
        {children}
      </div>
    </div>
  );
} 