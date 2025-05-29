import barba from '@barba/core';
import gsap from 'gsap';

// Initialize Barba
const initBarba = () => {
  // Create transition elements
  const createTransitionElements = () => {
    if (!document.querySelector('.transition-overlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'transition-overlay';
      document.body.appendChild(overlay);
    }
  };

  // Page transition animation
  const pageTransition = () => {
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
    gsap.set('.transition-overlay', {
      y: '-100%'
    });
  };

  // Animate page elements
  const animatePageElements = () => {
    const tl = gsap.timeline();
    
    // Animate all headings
    tl.from('h1, h2, h3, h4, h5, h6', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // Animate paragraphs
    tl.from('p', {
      y: 15,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out'
    }, '-=0.3');

    // Animate images
    tl.from('img', {
      scale: 0.95,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out'
    }, '-=0.3');

    // Animate buttons and links
    tl.from('button, a', {
      y: 10,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power2.out'
    }, '-=0.2');

    return tl;
  };

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
        await gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut'
        });

        // Play transition animation
        await pageTransition();
        
        done();
      },
      async enter(data) {
        // Reset transition elements
        resetTransition();

        // Animate in new page
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
          // Add specific animations for home page
          gsap.from('.wedesignmain', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.1
          });
        }
      },
      {
        namespace: 'believe',
        beforeEnter() {
          // Add specific animations for believe page
          gsap.from('.believeherobanner', {
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

  // Prevent default link behavior and handle clicks
  barba.hooks.after(() => {
    // Reinitialize any necessary event listeners or components
    window.scrollTo(0, 0);
  });
};

// Export the barba instance and init function
export { initBarba };
export default barba; 