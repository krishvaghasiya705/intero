import React from "react";
import styles from "./herobanner.module.scss";

export default function Herobanner() {
  return (
    <>
      <div className={styles.herobannermain}>
        <div className="container">
          <div className={styles.herobannerboxflxmain}>
            <div className={styles.herobannerbox}>
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
