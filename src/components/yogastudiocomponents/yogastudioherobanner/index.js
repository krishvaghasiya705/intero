import React from 'react'
import styles from "./yogastudioherobanner.module.scss"
import Image from "next/image";
import yogastudioimage1 from "@/assets/image/yogastudioimage1.jpg"
import yogastudioimage2 from "@/assets/image/yogastudioimage2.jpg"
import Trueicon from '@/assets/icons/trueicon';

export default function Yogastudioherobanner() {
  return (
    <>
      <div className={styles.yogastudioherobannermain}>
        <div className="container">
            <div className={styles.Yogastudioherobanner}>
                <div className={styles.Yogastudioherobannerleft}>
                    <Image src={yogastudioimage1} alt="yogastudioimage1" />
                </div>
                <div className={styles.Yogastudioherobannercenter}>
                    <Image src={yogastudioimage2} alt="yogastudioimage2" />
                </div>
                <div className={styles.Yogastudioherobannerright}>
                    <div className={styles.Yogastudioherobannerrightcontent}>
                        <h1>Yoga studio</h1>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <div className={styles.qutesdivmain}>
                            <div className={styles.qutesdiv}>
                                <Trueicon />
                                <span>Massa tincidunt nunc pulvinar</span>
                            </div>
                            <div className={styles.qutesdiv}>
                                <Trueicon />
                                <span>Commodo elit at imperdiet</span>
                            </div>
                        </div>
                        <button type="button" className={styles.readbutton}>read more</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
