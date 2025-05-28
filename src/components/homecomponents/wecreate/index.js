import React from "react";
import styles from "./wecreate.module.scss";
import Image from "next/image";
import wecreateimage from "@/assets/image/wecreateimage.jpg";

export default function Wecreate() {
  return (
    <>
      <div className={styles.wecreate}>
        <div className="container">
          <div className={styles.wecreateflxmain}>
            <div className={styles.wecreateflxleft}>
              <h2>We create unique interior designs</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
              <button type="button" className={styles.learnbutton}>
                learn more
              </button>
            </div>
            <div className={styles.wecreateflxright}>
              <Image src={wecreateimage} alt="wecreateimage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
