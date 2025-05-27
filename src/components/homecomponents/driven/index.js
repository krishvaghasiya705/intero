import React from "react";
import styles from "./driven.module.scss";
import Image from "next/image";
import drivenimage1 from "@/assets/image/drivenimage1.jpg";
import drivenimage2 from "@/assets/image/drivenimage2.jpg";
import drivenimage3 from "@/assets/image/drivenimage3.jpg";
import Link from "next/link";

export default function Driven() {
    const Drivencard = [
        {
            img: drivenimage1,
            title: "Concepts",
            paragraph: "Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum. Tristique senectus.",
        },
        {
            img: drivenimage2,
            title: "Prototyping",
            paragraph: "Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum. Tristique senectus.",
        },
        {
            img: drivenimage3,
            title: "Interior",
            paragraph: "Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum. Tristique senectus.",
        },
    ]
  return (
    <>
      {/* <div className={styles.herobanner}>
        <div className={styles.container}>
          <div className={styles.herobannerlayout}>
            <div className={styles.herobannertitle}>
              <h1>Dive into Blissful Destinations and Dreamy Getaways</h1>
              <p>
                immerse yourself in authentic adventures, curated expertly to
                transcend the ordinary, with us trips.
              </p>
              <button type="button" className={styles.explorebutton}>
                explore now
              </button>
            </div>
            <div className={styles.herobannergrdmain}>
              <div className={styles.herobannergrdsmallleft}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcAWcI9SnKzeQ2g4J698TPfGk3LTghm9iPw&s"
                  alt="grdimage"
                />
              </div>
              <div className={styles.herobannergrdsmall}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcAWcI9SnKzeQ2g4J698TPfGk3LTghm9iPw&s"
                  alt="grdimage"
                />
              </div>
              <div className={styles.herobannergrdbig}>
                <div className={styles.herobannergrdbigflx}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcAWcI9SnKzeQ2g4J698TPfGk3LTghm9iPw&s"
                    alt="grdimage"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcAWcI9SnKzeQ2g4J698TPfGk3LTghm9iPw&s"
                    alt="grdimage"
                  />
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcAWcI9SnKzeQ2g4J698TPfGk3LTghm9iPw&s"
                  alt="grdimage"
                />
              </div>
              <div className={styles.herobannergrdsmall}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcAWcI9SnKzeQ2g4J698TPfGk3LTghm9iPw&s"
                  alt="grdimage"
                />
              </div>
              <div className={styles.herobannergrdsmallright}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcAWcI9SnKzeQ2g4J698TPfGk3LTghm9iPw&s"
                  alt="grdimage"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className={styles.drivenmain}>
        <div className="container">
          <div className={styles.driven}>
            <div className={styles.driventitle}>
              <h5>We are driven to inspire our clients</h5>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non.
              </p>
            </div>
            <div className={styles.drivencardflx}>
                {Drivencard.map((i) => (
                    <div className={styles.drivencard}>
                        <Image src={i.img} alt={i.img} />
                        <div className={styles.drivencardcontent}>
                            <h6>{i.title}</h6>
                            <p>{i.paragraph}</p>
                            <Link href={"/"}>more</Link>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
