import React from "react";
import styles from "./bannerGallery.module.scss";

const BannerGallery = () => {

    const imgList = [
        <img className={styles.img} src="/assets/image/photo/galleryBlock1.jpg" alt="women"/>,
        <img className={styles.img} src="/assets/image/photo/galleryBlock2.jpg" alt="women"/>,
        <img className={styles.img} src="/assets/image/photo/galleryBlock3.jpg" alt="women"/>,
        <img className={styles.img} src="/assets/image/photo/galleryBlock4.jpg" alt="women"/>,
    ]

    return (
        <section className={styles.services}>
            <ul className={styles.container}>
                {
                    imgList.map((item, index) => {
                        return (
                            <li className={styles.service}
                                key={index}>
                                {item}
                                <div className={styles.service__wrapper}>
                                    <div className={styles.service__wrapper_content}>
                                        <img className={styles.service__wrapper_img}
                                             src="/assets/image/icon/cosmetics.svg"
                                             alt="icon"/>
                                        <span>Body Treatment</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
};
export default BannerGallery;
