import React from "react";
import styles from "./buttonComponent.module.scss";

const Button = (props) => {
    const { button } = props;
    return (
        <button className={
            button === 'blockButton'
                ? `${styles.button}`
                : button === 'cardButton'
                ? `${styles.button} ${styles.card_button}`
                        : 'incorrect button'
            }
        type="submit">
            {props.title}
        </button>
    )
};

export default Button;
