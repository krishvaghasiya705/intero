"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./realtime.module.scss";
import Image from "next/image";
import realtimeimage from "@/assets/image/realtimeimage.jpg";
import Shape from "@/assets/icons/shape";

gsap.registerPlugin(ScrollTrigger);

export default function Realtime() {
  const leftImgRef = useRef(null);
  const leftShapeRef = useRef(null);
  const rightBoxRef = useRef(null);
  const rightBoxSquareRef = useRef(null);
  const rightBoxCircleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftImgRef.current,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftImgRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 0.5,
            once: false,
          },
        }
      );
      gsap.fromTo(
        leftShapeRef.current,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftShapeRef.current,
            start: "top 95%",
            end: "top 65%",
            scrub: 0.5,
            once: false,
          },
        }
      );
      gsap.fromTo(
        rightBoxSquareRef.current,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightBoxSquareRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 0.5,
            once: false,
          },
        }
      );
      gsap.fromTo(
        rightBoxCircleRef.current,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightBoxCircleRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 0.5,
            once: false,
          },
        }
      );
      gsap.fromTo(
        rightBoxRef.current,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightBoxRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 0.5,
            once: false,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={styles.realtimesectionmain}>
        <div className="container">
          <div className={styles.realtimeflxmain}>
            <div className={styles.realtimeflxleft}>
              <div className={styles.realtimeflxleftimg} ref={leftImgRef}>
                <Image src={realtimeimage} alt="realtimeimage" />
              </div>
              <div className={styles.relatimeleftshape} ref={leftShapeRef}>
                <Shape />
              </div>
            </div>
            <div className={styles.realtimeflxright}>
              <div
                className={styles.realtimeflxrightsqure}
                ref={rightBoxSquareRef}
              ></div>
              <div
                className={styles.realtimeflxrightcircle}
                ref={rightBoxCircleRef}
              ></div>
              <div className={styles.realtimerightbox} ref={rightBoxRef}>
                <h4>Real-time Visualization</h4>
                <p>
                  Elit ut aliquam purus sit amet luctus venenatis. Ridiculus mus
                  mauris vitae ultricies leo integer malesuada. Massa enim nec
                  dui nunc mattis enim. Sagittis vitae et leo duis ut. Lacus
                  suspendisse faucibus interdum.
                </p>
                <button type="button" className={styles.learnbutton}>
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
