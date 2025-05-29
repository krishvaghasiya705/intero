"use client";
import React, { useEffect, useRef } from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import contactusimage from "@/assets/image/contactusimage.jpg";
import realtimeimage from "@/assets/image/lineingimage.png";
import Callicon from "@/assets/icons/callicon";
import Locationpinicon from "@/assets/icons/locationpinicon";
import Clockicon from "@/assets/icons/clockicon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      formRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        x: 100,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
    const detailsBoxes = detailsRef.current.children;
    gsap.fromTo(
      detailsBoxes,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: detailsRef.current,
          start: "top 85%",
          end: "top 70%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.to(imageRef.current.querySelector(`.${styles.realtimeimage}`), {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <footer>
        <div className={styles.contactussectionmain} ref={sectionRef}>
          <div className="container">
            <div className={styles.contactussectiomflx}>
              <div className={styles.contactussectiomflxleft} ref={formRef}>
                <h5>Contact Us</h5>
                <div className={styles.contactusleftform}>
                  <form>
                    <div className={styles.contactinputmain}>
                      <input type="text" placeholder="Enter your Name" />
                    </div>
                    <div className={styles.contactinputmain}>
                      <input
                        type="email"
                        placeholder="Enter a valid email address"
                      />
                    </div>
                    <div className={styles.contactinputmain}>
                      <textarea placeholder="Enter your message" />
                    </div>
                    <button type="submit" className={styles.submitbutton}>
                      submit
                    </button>
                  </form>
                </div>
              </div>
              <div className={styles.contactussectiomflxright} ref={imageRef}>
                <Image
                  src={contactusimage}
                  alt="contactusimage"
                  className={styles.contactusimage}
                />
                <div className={styles.realtimeimage}>
                  <Image src={realtimeimage} alt="realtimeimage" />
                </div>
              </div>
            </div>
            <div className={styles.contactusdetailsmain} ref={detailsRef}>
              <div className={styles.contactusdetailsbox}>
                <div className={styles.contactusdetailsboxtitle}>
                  <Callicon />
                  <span>Call Us</span>
                </div>
                <div className={styles.contactusdetailsboxbody}>
                  <a href="tel:1 (234) 567-891">
                    <p>1 (234) 567-891,</p>
                  </a>
                  <a href="tel:1 (234) 987-654">
                    <p>1 (234) 987-654</p>
                  </a>
                </div>
              </div>
              <div className={styles.contactusdetailsbox}>
                <div className={styles.contactusdetailsboxtitle}>
                  <Locationpinicon />
                  <span>Location</span>
                </div>
                <div className={styles.contactusdetailsboxbody}>
                  <a href="https://maps.app.goo.gl/HHx41NMrzyfvZKzC8" target="__blank">
                    <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                  </a>
                </div>
              </div>
              <div className={styles.contactusdetailsbox}>
                <div className={styles.contactusdetailsboxtitle}>
                  <Clockicon />
                  <span>Hours</span>
                </div>
                <div className={styles.contactusdetailsboxbody}>
                  <p>Mon - Fri …… 11 am - 8 pm, Sat, Sun …… 6 am - 8 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
