import React from "react";
import styles from "./bannerBlog.module.scss";

const BannerBlog = () => {
    return (
        <section className={styles.container}>
            <div className={styles.container_description}>
                <h3 className={styles.title}>
                    Latest from blog
                </h3>
                <p className={styles.description}>To doesn't his appear replenish together called he of mad place won't
                    wherein blessed second every wherein were meat kind wherein and martcin</p>
            </div>
        </section>
    )
};

export default BannerBlog;