import barba from '@barba/core';
import gsap from 'gsap';

// Initialize Barba
const initBarba = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Create transition elements
  const createTransitionElements = () => {
    if (typeof document === 'undefined') return;
    
    const existingOverlay = document.querySelector('.transition-overlay');
    if (!existingOverlay) {
      const overlay = document.createElement('div');
      overlay.className = 'transition-overlay';
      document.body.appendChild(overlay);
    }
  };

  // Page transition animation
  const pageTransition = () => {
    if (typeof gsap === 'undefined') return;
    
    const tl = gsap.timeline();
    
    tl.to('.transition-overlay', {
      y: 0,
      duration: 0.4,
      ease: 'power2.inOut'
    });

    return tl;
  };

  // Reset transition elements
  const resetTransition = () => {
    if (typeof gsap === 'undefined') return;
    
    gsap.set('.transition-overlay', {
      y: '-100%'
    });
  };

  // Animate page elements
  const animatePageElements = () => {
    if (typeof gsap === 'undefined' || typeof document === 'undefined') return;
    
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

    return tl;
  };

  // Initialize Barba with proper checks
  if (typeof window !== 'undefined' && typeof barba !== 'undefined') {
    barba.init({
      wrapper: '[data-barba="wrapper"]',
      container: '[data-barba="container"]',
      preventRunning: true,
      transitions: [{
        name: 'default-transition',
        async leave(data) {
          const done = this.async();
          
          // Create transition elements
          createTransitionElements();

          // Animate out current page
          if (data.current.container) {
            await gsap.to(data.current.container, {
              opacity: 0,
              duration: 0.3,
              ease: 'power2.inOut'
            });
          }

          // Play transition animation
          await pageTransition();
          
          done();
        },
        async enter(data) {
          // Reset transition elements
          resetTransition();

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
          animatePageElements();
        }
      }],
      views: [
        {
          namespace: 'home',
          beforeEnter() {
            if (typeof gsap === 'undefined' || typeof document === 'undefined') return;
            const element = document.querySelector('.wedesignmain');
            if (element) {
              gsap.from(element, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
                delay: 0.1
              });
            }
          }
        },
        {
          namespace: 'believe',
          beforeEnter() {
            if (typeof gsap === 'undefined' || typeof document === 'undefined') return;
            const element = document.querySelector('.believeherobanner');
            if (element) {
              gsap.from(element, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
                delay: 0.1
              });
            }
          }
        },
        {
          namespace: 'dietplan',
          beforeEnter() {
            if (typeof gsap === 'undefined' || typeof document === 'undefined') return;
            const element = document.querySelector('.dietplanherobanner');
            if (element) {
              gsap.from(element, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
                delay: 0.1
              });
            }
          }
        },
        {
          namespace: 'studio',
          beforeEnter() {
            if (typeof gsap === 'undefined' || typeof document === 'undefined') return;
            const element = document.querySelector('.yogastudioherobanner');
            if (element) {
              gsap.from(element, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
                delay: 0.1
              });
            }
          }
        },
        {
          namespace: 'philosophy',
          beforeEnter() {
            if (typeof gsap === 'undefined' || typeof document === 'undefined') return;
            const element = document.querySelector('.philosophyherobanner');
            if (element) {
              gsap.from(element, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
                delay: 0.1
              });
            }
          }
        },
        {
          namespace: 'travel',
          beforeEnter() {
            if (typeof gsap === 'undefined') return;
            gsap.from('.travelherobanner', {
              y: 20,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.out',
              delay: 0.1
            });
          }
        }
      ]
    });

    // Add styles for transition elements
    if (typeof document !== 'undefined') {
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
    }

    // Prevent default link behavior and handle clicks
    barba.hooks.after(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    });
  }
};

export default initBarba; 