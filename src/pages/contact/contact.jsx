import React from "react";
import Header from "../../components/header";
import BannerFeedback from "../../components/bannerFeedback";
import styles from "./contact.module.scss";

export const ContactPage = () => {
    return (
        <section className={styles.main_wrapper}>
            <Header/>
            <BannerFeedback />
        </section>
    )
}