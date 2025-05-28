"use client"
import React, { useEffect, useRef } from "react";
import styles from "./interiordesign.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import interiordesignimage1 from "@/assets/image/interiordesignimage1.jpg";
import interiordesignimage2 from "@/assets/image/interiordesignimage2.jpg";
import interiordesignimage3 from "@/assets/image/interiordesignimage3.png";

export default function Interiordesign() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Create a timeline for the left section
      const leftTl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.interiordesignflxleft}`,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
        }
      });

      leftTl.from(`.${styles.interiordesignflxleft}`, {
        y: 100,
        opacity: 0,
        duration: 1
      });

      // Create a timeline for the right section
      const rightTl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.interiordesignflxright}`,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
        }
      });

      rightTl.from(`.${styles.interiordesignflxright}`, {
        y: 100,
        opacity: 0,
        duration: 1
      });

      // Create a timeline for the images
      const imageTl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.interiordesignflxrightimgmain}`,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
        }
      });

      imageTl
        .from(`.${styles.interiordesignimage2}`, {
          scale: 0.8,
          opacity: 0,
          duration: 1
        })
        .from(`.${styles.interiordesignimage3}`, {
          x: 100,
          opacity: 0,
          duration: 1
        }, "-=0.5");

    }, sectionRef);

    // Cleanup function
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className={styles.interiordesignmain} ref={sectionRef}>
        <div className="container">
          <div className={styles.interiordesignflx}>
            <div className={styles.interiordesignflxleft}>
              <Image src={interiordesignimage1} alt="interiordesignimage1" />
              <h1>Interior Design and Space Planning</h1>
              <p>
                In dictum non consectetur a erat nam at. Turpis egestas maecenas
                pharetra convallis posuere morbi. Scelerisque purus semper eget
                duis. Dui id ornare arcu odio ut sem nulla pharetra.
              </p>
            </div>
            <div className={styles.interiordesignflxright}>
                <div className={styles.interiordesignflxrightimgmain}>
                    <Image src={interiordesignimage2} alt="interiordesignimage2" className={styles.interiordesignimage2}/>
                    <div className={styles.interiordesignimage3}></div>
                </div>
              <div className={styles.interiordesignflxrightcontent}>
                <p>
                  Quis commodo odio aenean sed. Risus viverra adipiscing at in
                  tellus integer feugiat scelerisque varius. Sit amet aliquam id
                  diam. Eget dolor morbi non arcu risus quis varius quam.
                  Fermentum posuere urna nec tincidunt praesent semper feugiat
                  nibh sed. Urna id volutpat lacus laoreet.
                </p>
                <button type="button" className={styles.learnbutton}>learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
