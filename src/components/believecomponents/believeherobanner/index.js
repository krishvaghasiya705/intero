import React from 'react'
import styles from "./believeherobanner.module.scss"
import Image from 'next/image'
import quatsicon from "@/assets/icons/quatsicon.png"
import believeimage1 from "@/assets/image/believeimage1.jpg"
import believeimage2 from "@/assets/image/believeimage2.jpg"
import believeimage3 from "@/assets/image/believeimage3.jpg"

export default function Believeherobanner() {
  return (
    <>
        <div className={styles.believeherobannermain}>
            <div className="container">
                <div className={styles.believeherobanner}>
                    <div className={styles.believeherobannerleft}>
                        <div className={styles.believeherobannerleftcontent}>
                            <div className={styles.quatsiconmain}>
                                <Image src={quatsicon} alt="quatsicon" className={styles.quatsicon} />
                            </div>
                            <h1>We believe that people can be truly happy on the outside only after reaching happiness within.</h1>
                            <div className={styles.believeherobannerleftcontentnames}>
                                <h2>Victoria Perry</h2>
                                <p>CEO and Co-Founder</p>
                            </div>
                        </div>
                        <div className={styles.believeimage1main}>
                            <Image src={believeimage1} alt="believeimage1" className={styles.believeimage1} />
                        </div>
                    </div>
                    <div className={styles.believeherobannerright}>
                        <Image src={believeimage2} alt="believeimage2" className={styles.believeimage2} />
                        <Image src={believeimage3} alt="believeimage3" className={styles.believeimage3} />
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}
