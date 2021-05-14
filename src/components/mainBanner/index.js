import styles from "./mainBanner.module.scss";
import React, { useState }from "react";
import Player from "../common/videoComponent/video";

const MainBanner = () => {
    const [isPlay, setPlay] = useState(false);

    const handleClick = () => {
        setPlay(() => !isPlay);
    }

    return (
        <section className={styles.mainBanner}>
            <div className={styles.mainBanner__spa_img}>
                <img src="/assets/image/photo/mainBanner2.jpg" alt="makeup"/>
            </div>
            <div className={styles.mainBanner__img}>
                <img src="/assets/image/img/flowerMainBanner.png" alt="flower"/>
            </div>
            <div className={styles.mainBanner__content}>
            <h5 className={styles.mainBanner__header}>SPA & BEAUTY CENTER</h5>
            <h1 className={styles.mainBanner__mainHeader}>Beauty and success starts here.</h1>
            <p className={styles.mainBanner__description}>Together creeping heaven upon third dominion be upon won't darkness rule behold it created good saw after she'd Our set living.</p>
                <div className={styles.wrapperButton}>
                <a
               className={styles.buttonReserve}
               href="#section-reserve">
                Reserve now</a>
                <div
                    className={styles.buttonVideo}>
                    <img className={styles.buttonPlayVideo_img} src="/assets/image/icon/play.svg" alt="play"/>
                </div>
            <button onClick={handleClick} className={styles.buttonPlayVideo}>
                Watch our story
            </button>
                </div>
                {
               isPlay && <div className={styles.wrapperVideoPlayer}>
                   <button onClick={handleClick} className={styles.buttonCancel}>
                       <img src="/assets/image/icon/cancel.svg" alt="cross"/>
                   </button>
                   <div className={styles.videoPlayer}>
                       <Player />
                   </div>
               </div>
            }
            </div>
        </section>
    )
};

export default MainBanner;
