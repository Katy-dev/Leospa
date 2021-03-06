import React, {useRef, useState} from "react";
import styles from "./bannerFeedback.module.scss";
import FeedbackForm from "./feedbackForm";
import ImageUploader from "../common/imageUploader/uploader";

const addressList = [
    {
      icon: "/assets/image/icon/map.svg",
      description:  "848 E 28th ST, BROOKLYN NEW YORK, USA"
    },
    {
      icon: "/assets/image/icon/message.svg",
      description:  "example@gmail.com"
    },
    {
      icon: "/assets/image/icon/phone.svg",
      description:  "+1 415 555 26 45"
    }
];

const BannerFeedback = () => {
    return (
        <section className={styles.container}>
            <div className={styles.container_description}>
                <h3 className={styles.title}>
                    Get In Touch
                </h3>
                <p className={styles.description}>To doesn't his appear replenish together called he of mad place won't
                    wherein blessed second every wherein were meat kind wherein and martcin</p>
            </div>
            <div className={styles.feedback__avatar_wrapper}>
                <ImageUploader />
            </div>
            <div className={styles.feedback__container}>
                <div className={styles.feedback__form}>
                    <FeedbackForm />
                </div>
                <div className={styles.address__container}>
                    {
                        addressList.map((item, index)=> {
                            return (
                                <address className={styles.address__wrapper} key={index}>
                                    <span className={styles.address__wrapper_icon}><img src={item.icon} alt="icon"/></span>
                                    <span className={styles.address__wrapper_descr}>{item.description}</span>
                                </address>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};

export default BannerFeedback;