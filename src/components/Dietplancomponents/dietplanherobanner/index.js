import React from 'react'
import styles from "./dietplanherobanner.module.scss"
import Image from "next/image";
import dietplanimage1 from "@/assets/image/dietplanimage1.jpg"
import dietplanimage2 from "@/assets/image/dietplanimage2.jpg"
import dietplanimage3 from "@/assets/image/dietplanimage3.jpg"
import dietplanimage4 from "@/assets/image/dietplanimage4.jpg"

export default function Dietplanherobanner() {
  return (
    <>
     <div className={styles.dietplanherobannermain}>
        <div className="container">
            <div className={styles.dietplanherobanner}>
                <div className={styles.dietplanherobannerleft}>
                        <Image src={dietplanimage1} alt="dietplanimage1" className={styles.dietplanimage1}/>
                        <h1>Diet Plan</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button type='button' className={styles.readmorebutton}>read more</button>
                </div>
                <div className={styles.dietplanherobannerright}>
                    <div className={styles.dietplanherobannerrightflx}>
                        <Image src={dietplanimage2} alt="dietplanimage2" className={styles.dietplanimage2}/>
                        <Image src={dietplanimage3} alt="dietplanimage3" className={styles.dietplanimage3}/>
                    </div>
                    <Image src={dietplanimage4} alt="dietplanimage4" className={styles.dietplanimage4}/>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
