"use client"
import React, { useEffect, useRef } from "react";
import styles from "./driven.module.scss";
import Image from "next/image";
import drivenimage1 from "@/assets/image/drivenimage1.jpg";
import drivenimage2 from "@/assets/image/drivenimage2.jpg";
import drivenimage3 from "@/assets/image/drivenimage3.jpg";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Driven() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        // Title animation
        gsap.fromTo(
            titleRef.current,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1
                }
            }
        );

        // Paragraph animation
        gsap.fromTo(
            paragraphRef.current,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: paragraphRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1
                }
            }
        );

        // Cards animation
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 1
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const Drivencard = [
        {
            img: drivenimage1,
            title: "Concepts",
            paragraph: "Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum. Tristique senectus.",
        },
        {
            img: drivenimage2,
            title: "Prototyping",
            paragraph: "Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum. Tristique senectus.",
        },
        {
            img: drivenimage3,
            title: "Interior",
            paragraph: "Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum. Tristique senectus.",
        },
    ]
  return (
    <>
      <div className={styles.drivenmain} ref={sectionRef}>
        <div className="container">
          <div className={styles.driven}>
            <div className={styles.driventitle}>
              <h5 ref={titleRef}>We are driven to inspire our clients</h5>
              <p ref={paragraphRef}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non.
              </p>
            </div>
            <div className={styles.drivencardflx}>
                {Drivencard.map((i, index) => (
                    <div 
                        className={styles.drivencard} 
                        key={index}
                        ref={el => cardsRef.current[index] = el}
                    >
                        <Image src={i.img} alt={i.img} />
                        <div className={styles.drivencardcontent}>
                            <h6>{i.title}</h6>
                            <p>{i.paragraph}</p>
                            <Link href={"/"}>more</Link>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
