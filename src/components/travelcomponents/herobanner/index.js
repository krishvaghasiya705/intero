import React from "react";
import styles from "./travelherobanner.module.scss";
import travelimage from "@/assets/image/travelimage.jpg";
import Image from "next/image";

export default function Travelherobanner() {
  return (
    <>
      <div className={styles.travelherobannermain}>
        <div className="container">
          <div className={styles.travelherobanner}>
            <div className={styles.travelherobannerleft}>
              <div className={styles.travelherobannerleftboxblank}></div>
              <div className={styles.travelherobannerleftboximg}></div>
              <div className={styles.travelherobannerleftbox}>
                <Image src={travelimage} alt="travelimage" />
              </div>
            </div>
            <div className={styles.travelherobannerright}>
              <h1>Planning a holiday for you and your better half?</h1>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
              <button type="button" className={styles.learnbutton}>
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
