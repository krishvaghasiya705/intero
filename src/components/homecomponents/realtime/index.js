import React from "react";
import styles from "./realtime.module.scss";
import Image from "next/image";
import realtimeimage from "@/assets/image/realtimeimage.jpg";
import Shape from "@/assets/icons/shape";

export default function Realtime() {
  return (
    <>
      <div className={styles.realtimesectionmain}>
        <div className="container">
          <div className={styles.realtimeflxmain}>
            <div className={styles.realtimeflxleft}>
              <div className={styles.realtimeflxleftimg}>
                <Image src={realtimeimage} alt="realtimeimage" />
              </div>
              <div className={styles.relatimeleftshape}>
                <Shape />
              </div>
            </div>
            <div className={styles.realtimeflxright}>
              <div className={styles.realtimerightbox}>
                <h4>Decorating Ideas</h4>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
