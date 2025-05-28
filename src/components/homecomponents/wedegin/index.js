"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./wedesign.module.scss";
import Projecticon from "@/assets/icons/projecticon";
import Sofaicon from "@/assets/icons/sofaicon";
import Decoricon from "@/assets/icons/decoricon";
import Abouticon from "@/assets/icons/abouticon";

export default function Wedesign() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const Wedesigncard = [
    {
      Icon: <Projecticon />,
      title: "Projects",
      paragraph:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      Icon: <Sofaicon />,
      title: "Great design",
      paragraph:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      Icon: <Decoricon />,
      title: "Home Decor",
      paragraph:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      Icon: <Abouticon />,
      title: "About Us",
      paragraph:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
  ];
  useEffect(() => {
    let observer;
    if (sectionRef.current) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Animate title
            gsap.fromTo(
              titleRef.current,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
            );
            // Animate cards
            gsap.fromTo(
              cardsRef.current,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
              }
            );
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(sectionRef.current);
    }
    return () => {
      if (observer && sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
    <>
      <div className={styles.wedesignmain} ref={sectionRef}>
        <div className="container">
          <div className={styles.wedesigntitle} ref={titleRef}>
            <h2>We design beautiful hotels</h2>
          </div>
          <div className={styles.wedeigncardsgrd}>
            {Wedesigncard.map((i, index) => (
              <div
                className={styles.wedeigncard}
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div className={styles.cardiconmain}>
                  <div className={styles.cardicon}>{i.Icon}</div>
                </div>
                <span>{i.title}</span>
                <p>{i.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
