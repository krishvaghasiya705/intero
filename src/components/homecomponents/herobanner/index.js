"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./herobanner.module.scss";

export default function Herobanner() {
  const boxRef = useRef(null);

  useEffect(() => {
    const el = boxRef.current;
    let ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={styles.herobannermain}>
        <div className="container">
          <div className={styles.herobannerboxflxmain}>
            <div className={styles.herobannerbox} ref={boxRef}>
              <h1>Interior Renovation</h1>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <button type="button" className={styles.learnbutton}>learn more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
