"use client"
import React, { useEffect, useRef } from "react";
import styles from "./interiordesigners.module.scss";
import Image from "next/image";
import interiordesignerbodyimg from "@/assets/image/interiordesignerbodyimg.jpg";
import Humanicon from "@/assets/icons/humanicon";
import Locationicon from "@/assets/icons/locationicon";
import Cofeecupicon from "@/assets/icons/cofeecupicon";
import Settingicon from "@/assets/icons/settingicon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Interiordesigners() {
    const cardsRef = useRef([]);
    const numbersRef = useRef([]);
    const scrolltoshow = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animation for the heading
        gsap.fromTo(scrolltoshow.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: scrolltoshow.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
        numbersRef.current.forEach((number, index) => {
            const targetValue = parseFloat(number.textContent);
            const obj = { value: 0 };
            
            gsap.to(obj, {
                value: targetValue,
                duration: 2,
                scrollTrigger: {
                    trigger: number,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                onUpdate: function() {
                    number.textContent = obj.value.toFixed(3);
                }
            });
        });
    }, []);

    const Interiordesignercard = [
        {
            icon: <Humanicon />,
            number: "2.324",
            title: "PROJECTS FINISHED",
        },
        {
            icon: <Locationicon />,
            number: "7.158",
            title: "HAPPY CLIENTS",
        },
        {
            icon: <Cofeecupicon />,
            number: "729",
            title: "Coffee cups",
        },
        {
            icon: <Settingicon />,
            number: "3.129",
            title: "WORKING HOURS",
        }
    ]
  return (
    <>
      <div className={styles.interiordesignersmain}>
        <div className="container">
          <div className={styles.interiordesignertitle}>
            <h3 ref={scrolltoshow}>Interior Designers</h3>
          </div>
        </div>
        <div className={styles.interiordesignerbody}>
          <div className={styles.interiordesignerbodyimg}>
            <Image
              src={interiordesignerbodyimg}
              alt="interiordesignerbodyimg"
            />
          </div>
          <div className="container">
            <div className={styles.interiordesignerbodycard}>
              {Interiordesignercard.map((i, index) => (
                <div 
                  className={styles.interiordesignercard} 
                  key={index}
                  ref={el => cardsRef.current[index] = el}
                >
                  <div className={styles.interiordesignercardicon}>{i.icon}</div>
                  <h4 ref={el => numbersRef.current[index] = el}>{i.number}</h4>
                  <p>{i.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
