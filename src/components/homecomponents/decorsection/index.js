"use client"
import React, { useEffect, useRef } from "react";
import styles from "./decorsection.module.scss";
import Image from "next/image";
import decorimage1 from "@/assets/image/decorimage1.jpg";
import decorimage2 from "@/assets/image/decorimage2.jpg";
import decorimage3 from "@/assets/image/decorimage3.jpg";
import decorimage4 from "@/assets/image/decorimage4.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Decorsection() {
  // Refs for animated elements
  const decorideaboxRef = useRef(null);
  const flx1leftRef = useRef(null);
  const flx1rightRef = useRef(null);
  const flx2leftRef = useRef(null);
  const flx2leftcontentRef = useRef(null);
  const flx2rightRef = useRef(null);

  useEffect(() => {
    const triggers = [];
    // Decorideabox: from right, sticky scroll
    triggers.push(
      gsap.fromTo(
        decorideaboxRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: decorideaboxRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
          ease: "power3.out",
        }
      )
    );
    // flx1left: from right
    triggers.push(
      gsap.fromTo(
        flx1leftRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: flx1leftRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
          },
          ease: "power3.out",
        }
      )
    );
    // flx1right: from left
    triggers.push(
      gsap.fromTo(
        flx1rightRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: flx1rightRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
          },
          ease: "power3.out",
        }
      )
    );
    // flx2left: from left
    triggers.push(
      gsap.fromTo(
        flx2leftRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: flx2leftRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
          ease: "power3.out",
        }
      )
    );
    // flx2leftcontentbox: from left
    triggers.push(
      gsap.fromTo(
        flx2leftcontentRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: flx2leftcontentRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
          ease: "power3.out",
        }
      )
    );
    // flx2right: from right
    triggers.push(
      gsap.fromTo(
        flx2rightRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: flx2rightRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
          ease: "power3.out",
        }
      )
    );
    return () => {
      triggers.forEach(anim => anim.scrollTrigger && anim.scrollTrigger.kill());
    };
  }, []);

  return (
    <>
      <div className={styles.decorsectionmain}>
        <div className="container">
          <div className={styles.decorsection}>
            <div className={styles.decorideabox} ref={decorideaboxRef}>
              <h3>Decorating Ideas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                nunc justo sagittis suscipit ultrices. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <button type="button" className={styles.learnbutton}>
                learn more
              </button>
            </div>
            <div className={styles.decorsectionflx1}>
              <div className={styles.decorsectionflx1left} ref={flx1rightRef}>
                <Image src={decorimage1} alt="decorimage1" />
              </div>
              <div className={styles.decorsectionflx1right} ref={flx1leftRef}>
                <Image src={decorimage2} alt="decorimage2" />
              </div>
            </div>
            <div className={styles.decorsectionflx2}>
              <div className={styles.decorsectionflx2leftmain}>
                <div className={styles.decorsectionflx2leftimgmain}>
                  <div className={styles.decorsectionflx2left} ref={flx2leftRef}>
                    <Image src={decorimage3} alt="decorimage3" />
                  </div>
                </div>
                <div className={styles.decorsectionflx2leftcontentbox} ref={flx2leftcontentRef}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className={styles.decorsectionflx2right} ref={flx2rightRef}>
                <Image src={decorimage4} alt="decorimage4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
