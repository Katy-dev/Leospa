import React from "react";
import styles from "./bannerProcedures.module.scss";
import CardComponent from "../common/cardComponent";

const BannerProcedures = () => {
    const imgList = [
        {
            img: <img src="/assets/image/photo/blockProcedures1.jpg" alt="women"/>,
            title: "Massage Therapy",
            description: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.",
        },
        {
            img: <img src="/assets/image/photo/blockProcedures2.jpg" alt="women"/>,
            title: "Beauty Care",
            description: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.",
        },
        {
            img: <img src="/assets/image/photo/blockProcedures3.jpg" alt="women"/>,
            title: "Executive Reflexology",
            description: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.",
        },
    ]
    return (
        <section className={styles.container}>
            <div>
                <div className={styles.container__descr}>
                    <h3
                        className={styles.main_title}>
                        Popular Procedures
                    </h3>
                    <p
                        className={styles.description}>
                        To doesn't his appear replenish together called he of mad place won't wherein blessed second
                        every wherein were meat kind wherein and martcin
                    </p>
                </div>
            </div>
            <ul className={styles.wrapper__cards}>
                {
                    imgList.map((item, index) => {
                        return (

                            <CardComponent img={item.img}
                                           key={index}
                                           title={item.title}
                                           description={item.description}
                                           link={'/service'}
                            />
                        )
                    })
                }
            </ul>
        </section>
    )
};
export default BannerProcedures;
