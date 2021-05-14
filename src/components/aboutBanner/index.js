import React from "react";
import styles from "./aboutBanner.module.scss";
import Button from "../common/buttonComponent/index";
import { Link } from "react-router-dom";

const AboutBanner = () => {
    return (
    <section className={styles.wrapper_about_banner}>
        <div className={styles.wrapper_img}>
            <img src="/assets/image/img/flowerAboutBanner.png" alt="flower"/>
        </div>
        <div className={styles.wrapper_content}>
           <h4 className={styles.title_section}>ABOUT OUR SPA CENTER</h4>
            <h3 className={styles.main_title}>Come and you will be Inspired!</h3>
            <p className={styles.description}>It’s the end of summer the sweltering heat makes human sweat in the night and makes the plants and trees wilt even in the moonlit nights. The eastern wind breeze brings an eerie feeling, that the monsoon clouds are soon coming, there is a strange silence in the ears, the sky gets darker and darker</p>
        </div>
        <Link to='/about'>
            <Button title="Read more" button="blockButton"/>
        </Link>
        <div className={styles.img_right}>
            <img src="/assets/image/img/pink-flower.png" alt="flower"/>
        </div>
    </section>
    )
}
export default AboutBanner;