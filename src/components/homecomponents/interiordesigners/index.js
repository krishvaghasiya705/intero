import React from "react";
import styles from "./interiordesigners.module.scss";
import Image from "next/image";
import interiordesignerbodyimg from "@/assets/image/interiordesignerbodyimg.jpg";
import Humanicon from "@/assets/icons/humanicon";
import Locationicon from "@/assets/icons/locationicon";
import Cofeecupicon from "@/assets/icons/cofeecupicon";
import Settingicon from "@/assets/icons/settingicon";

export default function Interiordesigners() {
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
            <h3>Interior Designers</h3>
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
                <div className={styles.interiordesignercard} key={index}>
                  <div className={styles.interiordesignercardicon}>{i.icon}</div>
                  <h4>{i.number}</h4>
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
