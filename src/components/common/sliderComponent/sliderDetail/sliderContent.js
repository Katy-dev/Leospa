import React from "react";
import styles from "./sliderContent.module.scss";

const SliderContent = ({ description, photo, name }) => {

    return (
        <div
            className={styles.container}>
            <div>
            <img
                className={styles.icon}
                src="/assets/image/icon/quote.svg"
                alt="quote"/>
            <div>
                <p
                    className={styles.description}>
                    {description}
                </p>
                <div>
                    <img className={styles.img}
                         src={photo}
                         alt="person"
                    />
                <span className={styles.title}>
                    {name}
                </span>
                </div>
                </div>
            </div>
        </div>
    )
};
export default SliderContent;
