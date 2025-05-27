import React from "react";
import styles from "./decorsection.module.scss";
import Image from "next/image";
import decorimage1 from "@/assets/image/decorimage1.jpg";
import decorimage2 from "@/assets/image/decorimage2.jpg";
import decorimage3 from "@/assets/image/decorimage3.jpg";
import decorimage4 from "@/assets/image/decorimage4.jpg";

export default function Decorsection() {
  return (
    <>
      <div className={styles.decorsectionmain}>
        <div className="container">
          <div className={styles.decorsection}>
            <div className={styles.decorideabox}>
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
              <div className={styles.decorsectionflx1left}>
                <Image src={decorimage1} alt="decorimage1" />
              </div>
              <div className={styles.decorsectionflx1right}>
                <Image src={decorimage2} alt="decorimage2" />
              </div>
            </div>
            <div className={styles.decorsectionflx2}>
              <div className={styles.decorsectionflx2leftmain}>
                <div className={styles.decorsectionflx2leftimgmain}>
                  <div className={styles.decorsectionflx2left}>
                    <Image src={decorimage3} alt="decorimage3" />
                  </div>
                </div>
                <div className={styles.decorsectionflx2leftcontentbox}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className={styles.decorsectionflx2right}>
                <Image src={decorimage4} alt="decorimage4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
