"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./travelherobanner.module.scss";
import travelimage from "@/assets/image/travelimage.jpg";
import Image from "next/image";

export default function Travelherobanner() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        rightRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(
        imageBoxRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={styles.travelherobannermain}>
        <div className="container">
          <div className={styles.travelherobanner}>
            <div className={styles.travelherobannerleft} ref={leftRef}>
              <div className={styles.travelherobannerleftboxblank}></div>
              <div className={styles.travelherobannerleftboximg}></div>
              <div className={styles.travelherobannerleftbox} ref={imageBoxRef}>
                <Image src={travelimage} alt="travelimage" />
              </div>
            </div>
            <div className={styles.travelherobannerright} ref={rightRef}>
              <h1>Planning a holiday for you and your better half?</h1>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
              <button type="button" className={styles.learnbutton}>
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}