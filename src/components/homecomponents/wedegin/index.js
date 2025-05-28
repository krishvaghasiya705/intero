import React from "react";
import styles from "./wedesign.module.scss";
import Projecticon from "@/assets/icons/projecticon";
import Sofaicon from "@/assets/icons/sofaicon";
import Decoricon from "@/assets/icons/decoricon";
import Abouticon from "@/assets/icons/abouticon";

export default function Wedesign() {
  const Wedesigncard = [
    {
      Icon: <Projecticon />,
      title: "Projects",
      paragraph:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      Icon: <Sofaicon />,
      title: "Great design",
      paragraph:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      Icon: <Decoricon />,
      title: "Home Decor",
      paragraph:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      Icon: <Abouticon />,
      title: "About Us",
      paragraph:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
  ];
  return (
    <>
      <div className={styles.wedesignmain}>
        <div className="container">
          <div className={styles.wedesigntitle}>
            <h2>We design beautiful hotels</h2>
          </div>
          <div className={styles.wedeigncardsgrd}>
            {Wedesigncard.map((i, index) => (
              <div className={styles.wedeigncard} key={index}>
                <div className={styles.cardiconmain}>
                  <div className={styles.cardicon}>{i.Icon}</div>
                </div>
                <span>{i.title}</span>
                <p>{i.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
