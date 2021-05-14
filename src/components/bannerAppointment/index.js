import React from "react";
import styles from "./bannerAppointment.module.scss";
import FormAppointment from "./formAppointment"

const BannerAppointment = () => {

    return (
        <div className={styles.appointment_wrap} id={"section-reserve"}>
          <figure className={styles.appointment_container}>
              <img className={styles.appointment_img} src="/assets/image/photo/blockAppointment.jpg" alt="woman"/>
          </figure>
            <FormAppointment />
        </div>
    )
};

export default BannerAppointment;