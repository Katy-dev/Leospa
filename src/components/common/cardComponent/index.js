import React from "react";
import styles from "./cardComponent.module.scss";
import Button from "../buttonComponent";
import {Link} from "react-router-dom";

const CardComponent = (props) => {
    const { img, title, description, link } = props;

    return (
        <div className={styles.container__card}>
            <div>
                <div className={styles.card_img}>
                    {img}
                </div>
                <div className={styles.card_descr}>
                    <h5 className={styles.title_card}>{title}</h5>
                    <p className={styles.description}>{description}</p>
                </div>
                <Link to={link}>
                <Button title="Read more" button="cardButton"/>
                </Link>
            </div>
        </div>
        )
};

export default CardComponent;