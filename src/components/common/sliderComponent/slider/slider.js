import React, { useEffect, useState } from 'react'
import styles from "./slider.module.scss";
import SliderContent from "../sliderDetail/sliderContent";

const BannerReview = () => {
    let reviewList = [
        {
            photo: "/assets/image/photo/blockReview1.jpg",
            description: "First i beast be fruitful open you tree all Won't can't likeness and you're have whales creature seed to two grass life blessed you meat shall you winged under from their there he That you're one called gather make much red wherein set fourth green bearing fifth replenish given she had.",
            name: "Anna Milosh",
        },
        {
            photo: "/assets/image/photo/blockReview2.jpg",
            description: "That you're one called gather make much red wherein set fourth green bearing fifth replenish given she had.First i beast be fruitful open you tree all Won't can't likeness and you're have whales creature seed to two grass life blessed you meat shall you winged under from their there he.",
            name: "Mary Harris",
        },
        {
            photo: "/assets/image/photo/blockReview3.jpg",
            description: "That you're one called gather make much red wherein set fourth green bearing fifth replenish given she had.First i beast be fruitful open you tree all Won't can't likeness and you're have whales creature seed to two grass life blessed you meat shall you winged under from their there he.",
            name: "Trudy Mashlow",
        },
        {
            photo: "/assets/image/photo/blockReview4.jpg",
            description: "That you're one called gather make much red wherein set fourth green bearing fifth replenish given she had.First i beast be fruitful open you tree all Won't can't likeness and you're have whales creature seed to two grass life blessed you meat shall you winged under from their there he.",
            name: "Kate Abramovich",
        }
    ];

    let slideWidth = reviewList.length - 1;

    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * slideWidth) : setX(x + 100);

    };
    const goRight = () => {
        x === -100 * slideWidth ? setX(0) : setX(x - 100);

    };

    useEffect(() => {
        const interval = setInterval(goRight,3000);

        return(() => {
             clearInterval(interval);
        });
    },[goRight]);

    return (
        <section className={styles.main} >
            <div className={styles.container}>
            <div className={styles.container__reviews} style={{transform: `translate( ${x}%)`}}>
                    {
                        reviewList.map((item, index) => {
                            return (
                                <SliderContent
                                    key={index}
                                    photo={item.photo}
                                    description={item.description}
                                    name={item.name}
                                />
                            )
                        })
                    }
            </div>
            <button
                className={styles.left}
                onClick={goLeft}
            >
                <img src="/assets/image/icon/arrow.svg" alt="arrow"/>
            </button>
            <button
                className={styles.right}
                onClick={goRight}
            >
                <img src="/assets/image/icon/arrow.svg" alt="arrow"/>
            </button>
            </div>
        </section>
    )

}

export default BannerReview;
