import React from "react";
import styles from "./contactus.module.scss";
import Image from "next/image";
import contactusimage from "@/assets/image/contactusimage.jpg";
import realtimeimage from "@/assets/image/lineingimage.png";
import Callicon from "@/assets/icons/callicon";
import Locationpinicon from "@/assets/icons/locationpinicon";
import Clockicon from "@/assets/icons/clockicon";

export default function Contactus() {
  return (
    <>
      <div className={styles.contactussectionmain}>
        <div className="container">
          <div className={styles.contactussectiomflx}>
            <div className={styles.contactussectiomflxleft}>
              <h5>Contact Us</h5>
              <div className={styles.contactusleftform}>
                <form>
                  <div className={styles.contactinputmain}>
                    <input type="text" placeholder="Enter your Name" />
                  </div>
                  <div className={styles.contactinputmain}>
                    <input
                      type="email"
                      placeholder="Enter a valid email address"
                    />
                  </div>
                  <div className={styles.contactinputmain}>
                    <textarea placeholder="Enter your message" />
                  </div>
                  <button type="submit" className={styles.submitbutton}>
                    submit
                  </button>
                </form>
              </div>
            </div>
            <div className={styles.contactussectiomflxright}>
              <Image
                src={contactusimage}
                alt="contactusimage"
                className={styles.contactusimage}
              />
              <div className={styles.realtimeimage}>
                <Image src={realtimeimage} alt="realtimeimage" />
              </div>
            </div>
          </div>
          <div className={styles.contactusdetailsmain}>
            <div className={styles.contactusdetailsbox}>
              <div className={styles.contactusdetailsboxtitle}>
                <Callicon />
                <span>Call Us</span>
              </div>
              <div className={styles.contactusdetailsboxbody}>
                <p>1 (234) 567-891,</p>
                <p>1 (234) 987-654</p>
              </div>
            </div>
            <div className={styles.contactusdetailsbox}>
              <div className={styles.contactusdetailsboxtitle}>
                <Locationpinicon />
                <span>Location</span>
              </div>
              <div className={styles.contactusdetailsboxbody}>
                <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
              </div>
            </div>
            <div className={styles.contactusdetailsbox}>
              <div className={styles.contactusdetailsboxtitle}>
                <Clockicon />
                <span>Hours</span>
              </div>
              <div className={styles.contactusdetailsboxbody}>
                <p>Mon - Fri …… 11 am - 8 pm, Sat, Sun …… 6 am - 8 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
