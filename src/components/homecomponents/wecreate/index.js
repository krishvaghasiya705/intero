"use client"
import React, { useEffect, useRef } from "react";
import styles from "./wecreate.module.scss";
import Image from "next/image";
import wecreateimage from "@/assets/image/wecreateimage.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Wecreate() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Left section animation
    gsap.fromTo(
      leftRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    // Right section animation
    gsap.fromTo(
      rightRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <>
      <div className={styles.wecreate}>
        <div className="container">
          <div className={styles.wecreateflxmain}>
            <div ref={leftRef} className={styles.wecreateflxleft}>
              <h2>We create unique interior designs</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
              <button type="button" className={styles.learnbutton}>
                learn more
              </button>
            </div>
            <div ref={rightRef} className={styles.wecreateflxright}>
              <div ref={imageRef}>
                <Image src={wecreateimage} alt="wecreateimage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
