import React from "react";
import styles from "./philosophyherobanner.module.scss";
import Image from "next/image";
import philosophyimg1 from "@/assets/image/philosophyimg1.jpg";
import philosophyimg2 from "@/assets/image/philosophyimg2.jpg";
import philosophyimg3 from "@/assets/image/philosophyimg3.jpg";

export default function Philosophyherobanner() {
  return (
    <>
      <div className={styles.philosophyherobannermain}>
        <div className="container">
          <div className={styles.philosophyherobanner}>
            <div className={styles.philosophyherobannerleft}>
              <Image src={philosophyimg1} alt="philosophyimg1" />
            </div>
            <div className={styles.philosophyherobannercenter}>
              <Image src={philosophyimg2} alt="philosophyimg2" />
            </div>
            <div className={styles.philosophyherobannerright}>
              <Image src={philosophyimg3} alt="philosophyimg3" />
            </div>
            <div className={styles.philosophtcontentmain}>
              <div className={styles.philosophtcontent}>
                <h1>Yoga for Everyone</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...</p>
                <button type="button" className={styles.learnbutton}>learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
